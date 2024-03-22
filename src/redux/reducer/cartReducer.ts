import {typeCartACtion} from '@redux/constants/typeCartAction';
import {
  cartStore,
  optionBuyProductStore,
  selectToppingStore,
} from '@redux/store/cartStore';
import {IStoreCartType, IStoreOptionBuyProductType} from '@type/cartType';
import {IStoreSelectToppingType} from '@type/toppingType';

export const selectToppingReducer = (
  state = selectToppingStore,
  action: any,
): IStoreSelectToppingType => {
  const {type, payload} = action;
  switch (type) {
    case typeCartACtion.ACTION_SELECT_TOPPING:
      return {
        ...state,
        listSelectTopping: payload,
      };
    default:
      return state;
  }
};

export const selectOptionBuyReducer = (
  state = optionBuyProductStore,
  action: any,
): IStoreOptionBuyProductType => {
  const {type, payload} = action;
  switch (type) {
    case typeCartACtion.ACTION_SELECT_OPTION_BUY:
      return {
        ...state,
        ...payload,
      };
    case typeCartACtion.ACTION_SET_OPTION_BUY_PRODUCT:
      return {
        ...state,
        listTopping: payload,
      };
    default:
      return state;
  }
};

export const setCartReducer = (
  state = cartStore,
  action: any,
): IStoreCartType => {
  const {type, payload} = action;
  switch (type) {
    case typeCartACtion.ACTION_SET_CART:
      return {
        ...state,
        idCart: payload.idCart,
        listProduct: payload.listProduct,
      };
    default:
      return state;
  }
};
