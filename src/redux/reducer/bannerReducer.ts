import {typeBannerAction} from '@redux/constants/typeBannerAction';
import {bannerHomeStore} from '@redux/store/bannerHomeStore';
import {IStoreBannerType} from 'src/type/bannerType';

export const getBannerHomeReducer = (
  state = bannerHomeStore,
  action: any,
): IStoreBannerType => {
  const {type, payload} = action;
  switch (type) {
    case typeBannerAction.ACTION_GET_LIST_BANNER_HOME:
      return {
        ...state,
        dataBanner: payload.response,
        arrayImage: payload.arrayImage,
        isLoadingBanner: false,
      };
    default:
      return state;
  }
};
