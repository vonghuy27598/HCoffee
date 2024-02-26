import {Helper} from '@common/index';
import {constantsURL, fetchAPI} from '@config/api';
import {IFetchAPI} from '@config/api/fetchAPI';
import {typeBannerAction} from '@redux/constants/typeBannerAction';
import {AppDispatch} from '@redux/store';

export const getBannerHome = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const paramsAPI: IFetchAPI = {
        url: constantsURL.GET_BANNER_HOME,
      };
      const response: any = await fetchAPI(paramsAPI);
      if (!Helper.isNullOrUndefined(response)) {
        const arrayImage = response.map((val: any) => {
          return val.imageBanner;
        });
        const payload = {response, arrayImage};
        dispatch(
          Helper.createAction(typeBannerAction.GET_LIST_BANNER_HOME, payload),
        );
      }
    } catch (error) {
      console.log('ERROR ACTION', error);
    }
  };
};
