import {IListCategoryMenu} from '../../type/categoryMenuType';
import {typeCategoryMenu} from '../constants/typeCategoryMenuAction';
import {categoryMenuStore} from '../store/categoryMenuStore';

export const getCategoryMenuReducer = (
  state = categoryMenuStore,
  action: any,
): IListCategoryMenu => {
  const {type, payload} = action;
  switch (type) {
    case typeCategoryMenu.GET_CATEGORY_MENU:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
