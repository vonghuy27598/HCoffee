import {
  IStoreCategoryType,
  IStorePositionCategoryType,
  IStoreScreenCategoryPositionType,
} from '@type/categoryType';

export const categoryStore: IStoreCategoryType = {
  dataCategory: [],
  isLoadingCategory: false,
};

export const positionCategory: IStoreScreenCategoryPositionType = {
  dataPosition: [],
};

export const getHeaderCateName = {
  cateName: 'Danh mục',
};
