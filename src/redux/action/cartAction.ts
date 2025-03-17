/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {createAction, isArrayEquals} from '@common/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {typeCartACtion} from '@redux/constants/typeCartAction';
import {AppDispatch, RootState} from '@redux/store';
import {IStoreCartType, IStoreOptionBuyProductType} from '@type/cartType';
import {ISelectToppingType} from '@type/toppingType';
import {Alert} from 'react-native';
import {CONSTANTS_STORAGE} from '../../constants';
import {Helper} from '@common/index';
import {constantsURL, fetchAPI} from '@config/api';
import {IFetchAPI} from '@config/api/fetchAPI';
import {IResponseCode} from '@type/responseAPIType';
import {client} from '@graphQL/rest';
import {getAllTopping} from '@graphQL/services/serviceGetAllTopping';

export const selectTopping = (data: ISelectToppingType[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch(createAction(typeCartACtion.ACTION_SELECT_TOPPING, data));
  };
};

export const selectOptionBuy = (data: IStoreOptionBuyProductType) => {
  return async (dispatch: AppDispatch) => {
    dispatch(createAction(typeCartACtion.ACTION_SELECT_OPTION_BUY, data));
  };
};

export const setCart = (data: IStoreOptionBuyProductType) => {
  return async (dispatch: AppDispatch, state: () => RootState) => {
    try {
      const cart = state().setCartReducer;
      const {isLogin, numberPhone, deviceId} = state().genarateReducer;

      cart.totalPriceShipCart = 18000; // update soon
      const firstCart = await AsyncStorage.getItem(
        CONSTANTS_STORAGE.FIRST_CART,
      );
      //check exists product in cart
      const checkProduct = cart.listProduct.findIndex(
        x =>
          x.productId === data.productId &&
          x.size === data.size &&
          isArrayEquals(x.listTopping, data.listTopping),
      );

      if (!Helper.isNullOrUndefined(checkProduct) && checkProduct >= 0) {
        cart.listProduct[checkProduct].totalPrice += data.totalPrice;
        cart.listProduct[checkProduct].quantity += data.quantity;
      } else {
        cart.listProduct.push(data);
      }
      cart.address = state().getLocationUserReducer.items[0].address.label;
      cart.phoneNumber = numberPhone;
      cart.totalPriceCart = Helper.sumArrayKey(cart.listProduct, 'totalPrice');
      cart.totalQuantityCart = Helper.sumArrayKey(cart.listProduct, 'quantity');

      // check isLogin:   login save cart to server
      if (isLogin) {
        const listProduct = cart.listProduct.map(x => {
          return {
            productId: x.productId,
            productName: x.productName,
            categoryId: x.iD_Cate,
            listToppingId: x.listTopping.map(x => x.toppingId),
            size: x.size,
            quantity: x.quantity,
            totalPrice: x.totalPrice,
            noteProduct: x.note,
          };
        });
        const formBodyRequest = {
          phoneNumber: numberPhone,
          address: cart.address,
          deviceId: deviceId,
          cartDetail: [
            {
              totalPriceCart: cart.totalPriceCart,
              totalQuantityCart: cart.totalQuantityCart,
              totalPriceShipCart: cart.totalPriceShipCart,
              listProductInCart: listProduct,
            },
          ],
        };

        const paramAPI = {
          url: JSON.parse(firstCart!)
            ? constantsURL.ADD_CART
            : constantsURL.UPDATE_CART,
          request: {
            method: JSON.parse(firstCart!) ? 'POST' : 'PUT',
            queryString: `numberPhone=${numberPhone}`,
            body: JSON.stringify(formBodyRequest),
          },
        } as IFetchAPI;
        console.log('FIRSTTTT', firstCart);

        const res = (await fetchAPI(paramAPI)) as IResponseCode;
        if (!Helper.isNullOrUndefined(res) && res.resCode === 1) {
          await AsyncStorage.setItem(
            CONSTANTS_STORAGE.FIRST_CART,
            JSON.stringify(false),
          );
        }
      }
      dispatch(createAction(typeCartACtion.ACTION_SET_CART, cart));
      // save cart to AsyncStorage
      await AsyncStorage.setItem(
        CONSTANTS_STORAGE.STORAGE_CART,
        JSON.stringify(cart),
      );
      // Alert.alert('H-COFFE', 'Đã thêm vào giỏ hàng');
    } catch (error) {
      Alert.alert('Uiiiii', 'Lỗi rồi');
      console.log('ERROR ADD CART', error);
    }
  };
};

export const getCart = (isLogin: boolean, numberPhone?: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const cart = await AsyncStorage.getItem(CONSTANTS_STORAGE.STORAGE_CART);
      if (isLogin) {
        const paramAPI = {
          url: constantsURL.GET_CART_BY_PHONE,
          request: {
            method: 'GET',
            queryString: `phoneNumber=${numberPhone}`,
          },
        } as IFetchAPI;

        const res = (await fetchAPI(paramAPI)) as IResponseCode;
        if (!Helper.isNullOrUndefined(res) && res?.resCode === 1) {
          if (!Helper.isNullOrUndefined(res.data)) {
            const data = res.data as any;
            const dataToppingQL = client.readQuery<
              typeof getAllTopping.response
            >({
              query: getAllTopping.query,
            });
            const getListProduct: IStoreOptionBuyProductType[] =
              data?.cartDetail[0].listProductInCart.map((x: any) => {
                return {
                  productId: x.productId,
                  productName: x.productName,
                  size: x.size,
                  quantity: x.quantity,
                  totalPrice: x.totalPrice,
                  iD_Cate: x.categoryId,
                  note: x.noteProduct,
                  listTopping: dataToppingQL?.allListTopping.filter(item =>
                    x.listToppingId.includes(item.toppingId),
                  ),
                };
              });
            const getCart: IStoreCartType = {
              idCart: data?.cartId,
              address: data?.address,
              phoneNumber: data?.phoneNumber,
              totalPriceCart: data?.cartDetail[0].totalPriceCart,
              totalPriceShipCart: data?.cartDetail[0].totalPriceShipCart,
              totalQuantityCart: data?.cartDetail[0].totalQuantityCart,
              listProduct: getListProduct,
            };

            dispatch(createAction(typeCartACtion.ACTION_SET_CART, getCart));
            await AsyncStorage.setItem(
              CONSTANTS_STORAGE.FIRST_CART,
              JSON.stringify(false),
            );
          }
        } else {
          if (!Helper.isNullOrUndefined(cart)) {
            dispatch(
              createAction(
                typeCartACtion.ACTION_SET_CART,
                JSON.parse(cart ?? ''),
              ),
            );
          }
          await AsyncStorage.setItem(
            CONSTANTS_STORAGE.FIRST_CART,
            JSON.stringify(true),
          );
        }
      } else {
        if (!Helper.isNullOrUndefined(cart)) {
          dispatch(
            createAction(
              typeCartACtion.ACTION_SET_CART,
              JSON.parse(cart ?? ''),
            ),
          );
        }
        await AsyncStorage.setItem(
          CONSTANTS_STORAGE.FIRST_CART,
          JSON.stringify(true),
        );
      }
    } catch (error) {
      Alert.alert('Uiiiii', 'Lỗi không lấy được giỏ hàng');
      console.log('ERROR GET CART', error);
    }
  };
};

export const updateCartAction = (
  data: IStoreOptionBuyProductType,
  selectIndex: number,
) => {
  return async (dispatch: AppDispatch, state: () => RootState) => {
    try {
      const cart = state().setCartReducer;
      const {isLogin, numberPhone, deviceId} = state().genarateReducer;

      //check exists product in cart
      const findProduct = cart.listProduct.findIndex(
        (_, i) => i === selectIndex,
      );

      if (!Helper.isNullOrUndefined(findProduct) && findProduct >= 0) {
        const checkExistProduct = cart.listProduct.findIndex(
          x =>
            x.productId === data.productId &&
            x.size === data.size &&
            isArrayEquals(x.listTopping, data.listTopping),
        );
        if (
          !Helper.isNullOrUndefined(checkExistProduct) &&
          checkExistProduct >= 0 &&
          findProduct !== checkExistProduct
        ) {
          cart.listProduct[checkExistProduct].totalPrice += data.totalPrice;
          cart.listProduct[checkExistProduct].quantity += data.quantity;
          if (checkExistProduct !== selectIndex) {
            cart.listProduct.splice(findProduct, 1);
          }
        } else {
          cart.listProduct[findProduct] = data;
        }
      }
      cart.address = state().getLocationUserReducer.items[0].address.label;
      cart.phoneNumber = numberPhone;
      cart.totalPriceCart = Helper.sumArrayKey(cart.listProduct, 'totalPrice');
      cart.totalQuantityCart = Helper.sumArrayKey(cart.listProduct, 'quantity');

      // check login update cart
      if (isLogin) {
        const listProduct = cart.listProduct.map(x => {
          return {
            productId: x.productId,
            productName: x.productName,
            categoryId: x.iD_Cate,
            listToppingId: x.listTopping.map(x => x.toppingId),
            size: x.size,
            quantity: x.quantity,
            totalPrice: x.totalPrice,
            noteProduct: x.note,
          };
        });
        const formBodyRequest = {
          phoneNumber: numberPhone,
          address: cart.address,
          deviceId: deviceId,
          cartDetail: [
            {
              totalPriceCart: cart.totalPriceCart,
              totalQuantityCart: cart.totalQuantityCart,
              totalPriceShipCart: cart.totalPriceShipCart,
              listProductInCart: listProduct,
            },
          ],
        };

        const paramAPI = {
          url: constantsURL.UPDATE_CART,
          request: {
            method: 'PUT',
            queryString: `numberPhone=${numberPhone}`,
            body: JSON.stringify(formBodyRequest),
          },
        } as IFetchAPI;

        const res = (await fetchAPI(paramAPI)) as IResponseCode;
        if (!Helper.isNullOrUndefined(res) && res.resCode === 1) {
          console.log('UPDATE CART SUCCESS');
        }
      }
      // save cart to AsyncStorage
      await AsyncStorage.setItem(
        CONSTANTS_STORAGE.STORAGE_CART,
        JSON.stringify(cart),
      );
      dispatch(createAction(typeCartACtion.ACTION_SET_CART, cart));
    } catch (error) {
      Alert.alert('Uiiiii', 'Lỗi rồi');
      console.log('ERROR UPDATE CART', error);
    }
  };
};

export const deleteProductCart = (indexProductCart: number) => {
  return async (dispatch: AppDispatch, state: () => RootState) => {
    const cart = state().setCartReducer;
    const {isLogin, numberPhone, deviceId} = state().genarateReducer;
    cart.listProduct.splice(indexProductCart, 1);
    cart.totalPriceCart = Helper.sumArrayKey(cart.listProduct, 'totalPrice');
    cart.totalQuantityCart = Helper.sumArrayKey(cart.listProduct, 'quantity');
    cart.totalPriceShipCart =
      cart.totalQuantityCart === 0 ? 0 : cart.totalPriceShipCart;
    if (isLogin) {
      const listProduct = cart.listProduct.map(x => {
        return {
          productId: x.productId,
          productName: x.productName,
          categoryId: x.iD_Cate,
          listToppingId: x.listTopping.map(x => x.toppingId),
          size: x.size,
          quantity: x.quantity,
          totalPrice: x.totalPrice,
          noteProduct: x.note,
        };
      });
      const formBodyRequest = {
        phoneNumber: numberPhone,
        address: cart.address,
        deviceId: deviceId,
        cartDetail: [
          {
            totalPriceCart: cart.totalPriceCart,
            totalQuantityCart: cart.totalQuantityCart,
            totalPriceShipCart: cart.totalPriceShipCart,
            listProductInCart: listProduct,
          },
        ],
      };

      const paramAPI = {
        url: constantsURL.UPDATE_CART,
        request: {
          method: 'PUT',
          queryString: `numberPhone=${numberPhone}`,
          body: JSON.stringify(formBodyRequest),
        },
      } as IFetchAPI;

      const res = (await fetchAPI(paramAPI)) as IResponseCode;
      if (!Helper.isNullOrUndefined(res) && res.resCode === 1) {
        console.log('DELETE PRODUCT IN CART SUCCESS');
      }
    }
    dispatch(createAction(typeCartACtion.ACTION_SET_CART, cart));
    await AsyncStorage.setItem(
      CONSTANTS_STORAGE.STORAGE_CART,
      JSON.stringify(cart),
    );
  };
};

export const deleteCart = () => {
  return async (dispatch: AppDispatch, state: () => RootState) => {
    const cart = state().setCartReducer;
    const {isLogin, numberPhone, deviceId} = state().genarateReducer;
    cart.idCart = Date.now();
    cart.totalPriceCart = 0;
    cart.totalPriceShipCart = 0;
    cart.totalQuantityCart = 0;
    cart.listProduct = [];
    if (isLogin) {
      const paramAPI = {
        url: constantsURL.DELETE_CART,
        request: {
          method: 'DELETE',
          queryString: `numberPhone=${numberPhone}`,
        },
      } as IFetchAPI;

      const res = (await fetchAPI(paramAPI)) as IResponseCode;
      if (!Helper.isNullOrUndefined(res) && res.resCode === 1) {
        console.log('DELETE CART SUCCESS');
      }
    }
    dispatch(createAction(typeCartACtion.ACTION_SET_CART, cart));
    await AsyncStorage.setItem(
      CONSTANTS_STORAGE.STORAGE_CART,
      JSON.stringify(cart),
    );
  };
};
