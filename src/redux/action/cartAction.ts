import {createAction} from '@common/helper';
import {typeCartACtion} from '@redux/constants/typeCartAction';
import {AppDispatch} from '@redux/store';
import {IStoreCartType, IStoreOptionBuyProductType} from '@type/cartType';
import {ISelectToppingType} from '@type/toppingType';
import {Alert} from 'react-native';

export const selectTopping = (data: ISelectToppingType[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch(createAction(typeCartACtion.ACTION_SELECT_TOPPING, data));
    dispatch(
      createAction(
        typeCartACtion.ACTION_SET_OPTION_BUY_PRODUCT,
        data.filter(x => x.checked),
      ),
    );
  };
};

export const selectOptionBuy = (data: IStoreOptionBuyProductType) => {
  return async (dispatch: AppDispatch) => {
    dispatch(createAction(typeCartACtion.ACTION_SELECT_OPTION_BUY, data));
  };
};

export const setCart = (data: IStoreOptionBuyProductType) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(createAction(typeCartACtion.ACTION_SET_CART, data));
      Alert.alert('H-COFFE', 'Đã thêm vào giỏ hàng');
    } catch (error) {
      Alert.alert('Uiiiii', 'Lỗi rồi');
      console.log('ERROR ADD CART', error);
    }
  };
};
