import {ISelectToppingType} from '@type/toppingType';

export interface IStoreCartType {
  idCart: number;
  phoneNumber: string;
  address: string;
  totalPriceCart: number;
  totalQuantityCart: number;
  totalPriceShipCart: number;
  listProduct: IStoreOptionBuyProductType[];
}

export interface IStoreOptionBuyProductType {
  productId: number;
  productName: string;
  size: string;
  quantity: number;
  listTopping: ISelectToppingType[];
  totalPrice: number;
  iD_Cate: number;
  note: string;
}
