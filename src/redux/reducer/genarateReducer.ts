import {typeGenarateAction} from '@redux/constants/typeGenarateAction';
import {genarateStore} from '@redux/store/genarateStore';

export const genarateReducer = (state = genarateStore, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case typeGenarateAction.ACTION_GENARATE_APP:
      return {
        ...state,
        isLogin: payload.isLogin,
        numberPhone: payload.numberPhone,
        deviceId: payload.deviceId,
      };
    default:
      return state;
  }
};
