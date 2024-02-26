import {typeBannerAction} from '@redux/constants/typeBannerAction';
import {bannerHomeStore} from '@redux/store/bannerHomeStore';
import {IListBannerType} from 'src/type/bannerType';

export const getBannerHomeReducer = (
  state = bannerHomeStore,
  action: any,
): IListBannerType => {
  const {type, payload} = action;
  switch (type) {
    case typeBannerAction.GET_LIST_BANNER_HOME:
      return {
        ...state,
        data: payload.response,
        arrayImage: payload.arrayImage,
        isLoading: false,
      };
    default:
      return state;
  }
};
