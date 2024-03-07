import {ILayoutFlatlist} from './layoutFlatlistType';
import {IProductType} from './productType';

//#region type store
export interface IStoreCategoryType {
  dataCategory: ICategoryType[];
  isLoadingCategory: false;
}

export interface IStorePositionCategoryType {
  screenName: string;
  listPosition: ILayoutFlatlist[];
}

export interface IStoreScreenCategoryPositionType {
  dataPosition: IStorePositionCategoryType[];
}

//#endregion

//#region type data
export interface ICategoryType {
  categoryId: number;
  cateName: string;
  detailCate: string;
  headerTitle: string;
  headerBackground: string;
  imageCate: string;
}

export interface ILineProductByCateType {
  categoryId: number;
  cateName: string;
  imageCate: string;
  listProduct: IProductType[];
}
//#endregion
