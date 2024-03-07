export interface IToppingType {
  toppingId: number;
  toppingName: string;
  description: string;
  imageTopping: string;
  price: number;
  reducedPrice: number;
  unitProduct: string;
  iD_Cate: number;
}

export interface IStoreSelectToppingType {
  listSelectTopping: ISelectToppingType[];
}

export interface ISelectToppingType {
  toppingId: number;
  toppingName: string;
  price: number;
  checked: boolean;
}
