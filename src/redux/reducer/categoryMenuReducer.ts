import {ICategoryMenu} from '../../type/categoryMenuType';
import {typeCategoryMenu} from '../constants/typeCategoryMenuAction';
import {categoryMenuStore} from '../store/categoryMenuStore';

export const getCategoryMenuReducer = (
  state = categoryMenuStore,
  action: any,
): ICategoryMenu => {
  const {type, payload} = action;
  switch (type) {
    case typeCategoryMenu.GET_CATEGORY_MENU:
      return {
        ...state,
        data: {
          CateMenuId: payload.CateMenuId,
          CateMenuName: payload.CateMenuName,
          DetailCate: payload.DetailCate,
          ImageCate: payload.ImageCate,
        },
        isLoading: false,
      };
    default:
      return state;
  }
};
