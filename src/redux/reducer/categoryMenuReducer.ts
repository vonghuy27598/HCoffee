import {IStoreCategoryMenu} from '../../type/categoryMenuType';
import {typeCategoryMenuAction} from '../constants/typeCategoryMenuAction';
import {categoryMenuStore} from '../store/categoryMenuStore';

export const getCategoryMenuReducer = (
  state = categoryMenuStore,
  action: any,
): IStoreCategoryMenu => {
  const {type, payload} = action;
  switch (type) {
    case typeCategoryMenuAction.ACTION_GET_CATEGORY_MENU:
      return {
        ...state,
        dataMenu: payload,
        isLoadingMenu: false,
      };
    default:
      return state;
  }
};
