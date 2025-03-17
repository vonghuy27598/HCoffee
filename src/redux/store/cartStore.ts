import {IStoreCartType, IStoreOptionBuyProductType} from '@type/cartType';
import {IStoreSelectToppingType} from '@type/toppingType';

export const selectToppingStore: IStoreSelectToppingType = {
  listSelectTopping: [],
};

export const optionBuyProductStore: IStoreOptionBuyProductType = {
  productId: 0,
  productName: '',
  iD_Cate: 0,
  size: '',
  quantity: 0,
  listTopping: [],
  note: '',
  totalPrice: 0,
};

export const cartStore: IStoreCartType = {
  idCart: 0,
  address: '',
  phoneNumber: '',
  totalPriceCart: 0,
  totalPriceShipCart: 0,
  totalQuantityCart: 0,
  listProduct: [],
};
