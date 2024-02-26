import {Helper} from '../../common';
import {constantsURL} from '../../config/api';
import {AppDispatch} from '../store';
import {typeCategoryMenu} from '../constants/typeCategoryMenuAction';
import {fetchAPI, IFetchAPI} from '../../config/api/fetchAPI';

export const getCategoryMenu = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const paramsAPI: IFetchAPI = {
        url: constantsURL.GET_CATEGORY_MENU,
      };
      const response = await fetchAPI(paramsAPI);
      if (!Helper.isNullOrUndefined(response)) {
        console.log(response);
        dispatch(
          Helper.createAction(typeCategoryMenu.GET_CATEGORY_MENU, response),
        );
      }
    } catch (error) {
      console.log('ERROR ACTION', error);
    }
  };
};
