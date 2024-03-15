import {typeCategoryAction} from '@redux/constants/typeCategoryAction';
import {
  categoryStore,
  positionCategory,
  getHeaderCateName,
} from '@redux/store/categoryStore';
import {
  IStoreCategoryType,
  IStorePositionCategoryType,
  IStoreScreenCategoryPositionType,
} from '@type/categoryType';

export const getCategoryReducer = (
  state = categoryStore,
  action: any,
): IStoreCategoryType => {
  const {type, payload} = action;
  switch (type) {
    case typeCategoryAction.ACTION_GET_CATEGORY:
      return {
        ...state,
        dataCategory: payload,
        isLoadingCategory: false,
      };
    default:
      return state;
  }
};

export const setPositionCategory = (
  state = positionCategory,
  action: any,
): IStoreScreenCategoryPositionType => {
  const {type, payload} = action;
  switch (type) {
    case typeCategoryAction.ACTION_SET_POSITION_CATEGORY:
      return {
        ...state,
        dataPosition: [
          ...state.dataPosition,
          {screenName: payload.screenName, listPosition: payload.listPosition},
        ],
      };
    default:
      return state;
  }
};

export const setHeaderCateName = (state = getHeaderCateName, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case typeCategoryAction.ACTION_SET_HEADER_CATE_CATEGORY:
      return {
        ...state,
        cateName: payload,
      };
    default:
      return state;
  }
};
