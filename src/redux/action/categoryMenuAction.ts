import {Helper} from '../../common';
import {constantsURL, fetchAPI} from '../../config/api';
import {AppDispatch} from '../store';
import {typeCategoryMenu} from '../constants/typeCategoryMenuAction';
const getCategoryMenu = () => {
  return async (dispatch: AppDispatch) => {
    const response = fetchAPI(constantsURL.GET_CATEGORY_MENU);
    if (!Helper.isNullOrUndefined(response)) {
      console.log(response);
      dispatch(
        Helper.createAction(typeCategoryMenu.GET_CATEGORY_MENU, response),
      );
    }
  };
};
