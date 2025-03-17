import {Helper} from '@common/index';
import {constantsURL} from '@config/api';
import {IFetchAPI, fetchAPI} from '@config/api/fetchAPI';
import {typeOrderAction} from '@redux/constants/typeOrderAction';
import {AppDispatch, RootState} from '@redux/store';
import {IResponseCode} from '@type/responseAPIType';
import {Alert} from 'react-native';
import {deleteCart} from './cartAction';

// DEFAULT STATUS ORDER
const STATUS_ORDER_PENDING = 101; // DEFAULT ADD CART
const STATUS_ORDER_DELIVERY = 102;
const STATUS_ORDER_SUCCESS = 103;
const STATUS_ORDER_ERROR = -1;

export const addOrder = (
  setShowBottomSheetCart: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return async (dispatch: AppDispatch, state: () => RootState) => {
    const cart = state().setCartReducer;
    const {isLogin, numberPhone, deviceId} = state().genarateReducer;
    if (isLogin) {
      const listProductOrder = cart.listProduct.map(x => {
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
        noteOrder: '',
        statusCodeOrder: STATUS_ORDER_PENDING,
        orderDetail: [
          {
            totalPriceOrder: cart.totalPriceCart,
            totalQuantityOrder: cart.totalQuantityCart,
            totalPriceShip: cart.totalPriceShipCart,
            listProductChooses: listProductOrder,
          },
        ],
      };

      const paramAPI = {
        url: constantsURL.ADD_ORDER,
        request: {
          method: 'POST',
          body: JSON.stringify(formBodyRequest),
        },
      } as IFetchAPI;
      const res = (await fetchAPI(paramAPI)) as IResponseCode;

      if (!Helper.isNullOrUndefined(res) && res.resCode === 1) {
        dispatch(Helper.createAction(typeOrderAction.ACTION_ADD_ORDER));
        dispatch(deleteCart());
        console.log('ORDER SUCCESS');
        Alert.alert(
          'Cảm ơn quý khách!',
          'Đơn hàng hiện đã được gửi đến HCoffee!',
        );
        setShowBottomSheetCart(false);
      }
    }
  };
};

export const getListOrder = (pageIndex: number) => {
  return async (dispatch: AppDispatch, state: () => RootState) => {
    const {deviceId, isLogin, numberPhone} = state().genarateReducer;
    if (isLogin) {
      const paramAPI = {
        url: constantsURL.GET_ORDER,
        request: {
          method: 'GET',
        },
      } as IFetchAPI;
    }
    console.log('');
  };
};
