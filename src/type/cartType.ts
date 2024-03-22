import {ISelectToppingType} from '@type/toppingType';

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

export interface IStoreCartType {
  idCart: number;
  listProduct: IStoreOptionBuyProductType[];
}
