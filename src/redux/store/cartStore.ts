import {IStoreCartType, IStoreOptionBuyProductType} from '@type/cartType';
import {IStoreSelectToppingType} from '@type/toppingType';

export const selectToppingStore: IStoreSelectToppingType = {
  listSelectTopping: [],
};

export const optionBuyProductStore: IStoreOptionBuyProductType = {
  productId: 0,
  productName: '',
  size: '',
  quantity: 0,
  listTopping: [],
  note: '',
  totalPrice: 0,
};

export const cartStore: IStoreCartType = {
  idCart: 0,
  listProduct: [],
};
