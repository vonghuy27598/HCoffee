import {Helper} from '../../common';
import {constantsURL} from '../../config/api';
import {AppDispatch} from '../store';
import {typeCategoryMenuAction} from '../constants/typeCategoryMenuAction';
import {fetchAPI, IFetchAPI} from '../../config/api/fetchAPI';

export const getCategoryMenu = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const paramsAPI: IFetchAPI = {
        url: constantsURL.GET_CATEGORY_MENU,
      };
      const response = await fetchAPI(paramsAPI);
      if (!Helper.isNullOrUndefined(response)) {
        dispatch(
          Helper.createAction(
            typeCategoryMenuAction.ACTION_GET_CATEGORY_MENU,
            response,
          ),
        );
      }
    } catch (error) {
      console.log('ERROR ACTION', error);
    }
  };
};
