import {IToppingType} from './toppingType';

export interface IProductType {
  productId: number;
  productName: string;
  description: string;
  shortDescription: string;
  imageProduct: string;
  smallPrice: number;
  mediumPrice: number;
  bigPrice: number;
  reducedPrice: number;
  unitProduct: string;
  iD_Cate: number;
  iD_TypeTopping: number[];
  listTopping: IToppingType[];
}
