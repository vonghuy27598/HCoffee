import {createAction, isArrayEquals} from '@common/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {typeCartACtion} from '@redux/constants/typeCartAction';
import {AppDispatch, RootState} from '@redux/store';
import {IStoreOptionBuyProductType} from '@type/cartType';
import {ISelectToppingType} from '@type/toppingType';
import {Alert} from 'react-native';
import {CONSTANTS_STORAGE} from '../../constants';
import {Helper} from '@common/index';

export const selectTopping = (data: ISelectToppingType[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch(createAction(typeCartACtion.ACTION_SELECT_TOPPING, data));
    // dispatch(
    //   createAction(
    //     typeCartACtion.ACTION_SET_OPTION_BUY_PRODUCT,
    //     data.filter(x => x.checked),
    //   ),
    // );
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
      cart.idCart = Date.now();
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
      // save cart to AsyncStorage
      await AsyncStorage.setItem(
        CONSTANTS_STORAGE.STORAGE_CART,
        JSON.stringify(cart),
      );
      dispatch(createAction(typeCartACtion.ACTION_SET_CART, cart));
      // Alert.alert('H-COFFE', 'Đã thêm vào giỏ hàng');
    } catch (error) {
      Alert.alert('Uiiiii', 'Lỗi rồi');
      console.log('ERROR ADD CART', error);
    }
  };
};

export const getCart = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const cart = await AsyncStorage.getItem(CONSTANTS_STORAGE.STORAGE_CART);
      if (!Helper.isNullOrUndefined(cart)) {
        dispatch(
          createAction(typeCartACtion.ACTION_SET_CART, JSON.parse(cart ?? '')),
        );
      }
    } catch (error) {
      Alert.alert('Uiiiii', 'Lỗi không lấy được giỏ hàng');
      console.log('ERROR ADD CART', error);
    }
  };
};

export const updateCartAction = (data: IStoreOptionBuyProductType) => {
  return async (dispatch: AppDispatch, state: () => RootState) => {
    try {
      const cart = state().setCartReducer;
      cart.idCart = Date.now();
      //check exists product in cart
      const findProduct = cart.listProduct.findIndex(
        x => x.productId === data.productId,
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
          checkExistProduct >= 0
        ) {
          cart.listProduct[checkExistProduct].totalPrice += data.totalPrice;
          cart.listProduct[checkExistProduct].quantity += data.quantity;
          cart.listProduct.splice(findProduct, 1);
        } else {
          cart.listProduct[findProduct] = data;
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
    cart.idCart = Date.now();
    cart.listProduct.splice(indexProductCart, 1);
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
    cart.idCart = Date.now();
    cart.listProduct = [];
    dispatch(createAction(typeCartACtion.ACTION_SET_CART, cart));
    await AsyncStorage.setItem(
      CONSTANTS_STORAGE.STORAGE_CART,
      JSON.stringify(cart),
    );
  };
};
