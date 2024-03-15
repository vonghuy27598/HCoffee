import {constantsURL} from '@config/api';
import {IFetchAPI, fetchAPI} from '@config/api/fetchAPI';
import {AppDispatch} from '@redux/store';
import {LOCATION_APP_API_KEY} from '../../constants';
import {Helper} from '@common/index';
import {typeLocationAction} from '@redux/constants/typeLocationAction';

export const getLocationUserAction = (latitude: number, longitude: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const queryString = `at=${latitude},${longitude}&lang=vi-VI&apiKey=${LOCATION_APP_API_KEY}`;
      const paramsAPI: IFetchAPI = {
        url: constantsURL.GET_LOCATION_USER,
        request: {
          method: 'GET',
          queryString,
        },
      };
      const res = await fetchAPI(paramsAPI);
      if (!Helper.isNullOrUndefined(res)) {
        dispatch(
          Helper.createAction(
            typeLocationAction.ACTION_GET_CURRENT_LOCATION,
            res,
          ),
        );
      }
    } catch (error) {
      console.log('GET LOCATION USER ERROR', error);
    }
  };
};
