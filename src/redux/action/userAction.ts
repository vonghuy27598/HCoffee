import {Helper} from '@common/index';
import {constantsURL, fetchAPI} from '@config/api';
import {IFetchAPI} from '@config/api/fetchAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {typeUserAction} from '@redux/constants/typeUserAction';
import {AppDispatch} from '@redux/store';
import {getUniqueId} from 'react-native-device-info';
import {CONSTANTS_STORAGE} from '../../constants';
import {Alert} from 'react-native';
import {getCart} from './cartAction';
import { typeGenarateAction } from '@redux/constants/typeGenarateAction';

export const requestOTP = (numberPhone: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const deviceId = await getUniqueId();
      console.log('DEVICE ID', deviceId);
      const queryString = `DeviceId=${deviceId}&numberPhone=${numberPhone}`;
      const paramsAPI: IFetchAPI = {
        url: constantsURL.REQUEST_OTP,
        request: {
          method: 'POST',
          queryString: queryString,
        },
      };
      const response = await fetchAPI(paramsAPI);
      if (!Helper.isNullOrUndefined(response)) {
        dispatch(Helper.createAction(typeUserAction.ACTION_REQUEST_OTP));
      }
    } catch (error) {
      console.log('ERROR requestOTP', error);
    }
  };
};

export const sendOTP = (numberPhone: string, code: string, navigation: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const deviceId = await getUniqueId();
      const body = {
        DeviceId: deviceId,
        PhoneNumber: numberPhone,
        Code: code,
      };
      const paramsAPI: IFetchAPI = {
        url: constantsURL.SEND_OTP,
        request: {
          method: 'POST',
          body: JSON.stringify(body),
        },
      };
      const response: any = await fetchAPI(paramsAPI);
      if (!Helper.isNullOrUndefined(response)) {
        dispatch(Helper.createAction(typeUserAction.ACTION_SEND_OTP));
        if (response?.resCode === 1 && response?.status === 'Success') {
          dispatch(loginByPhone(numberPhone, navigation));
        } else {
          Alert.alert('Có lỗi', 'Mã xác thực không chính xác');
        }
      }
    } catch (error) {
      console.log('ERROR sendOTP', error);
    }
  };
};

export const loginByPhone = (phoneNumber: string, navigation?: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const deviceId = await getUniqueId();
      const getTokenNotify = await AsyncStorage.getItem(
        CONSTANTS_STORAGE.TOKEN_NOTIFY,
      );
      const body = {
        deviceId: deviceId,
        phoneNumber: phoneNumber,
        tokenNotify: getTokenNotify,
      };
      const paramsAPI: IFetchAPI = {
        url: constantsURL.LOGIN_BY_PHONE,
        request: {
          method: 'POST',
          body: JSON.stringify(body),
        },
      };
      dispatch(Helper.createAction(typeUserAction.ACTION_LOGIN_BYPHONE));
      const response: any = await fetchAPI(paramsAPI);
      if (!Helper.isNullOrUndefined(response)) {
        dispatch(Helper.createAction(typeUserAction.ACTION_SEND_OTP));
        if (response?.resCode === 1 && response?.status === 'Success') {
          const tokenUser = 'Bearer ' + response?.data;
          const user = {
            numberPhone: phoneNumber.replace('84', '0'),
            token: tokenUser,
          };
          console.log('LOGIN SUCCESS', user);
          await AsyncStorage.setItem(
            CONSTANTS_STORAGE.IS_LOGIN,
            JSON.stringify(true),
          );
          //save token to AsyncStorage
          await AsyncStorage.setItem(
            CONSTANTS_STORAGE.SESSION_USER,
            JSON.stringify(user),
          );

          dispatch(
            Helper.createAction(typeUserAction.ACTION_LOGIN_BYPHONE_SUCCESS),
          );
          const payload = {
            isLogin: true,
            numberPhone: phoneNumber.replace('84', '0'),
            deviceId: await getUniqueId(),
          };
          dispatch(Helper.createAction(typeGenarateAction.ACTION_GENARATE_APP, payload));
          dispatch(getCart(true, phoneNumber.replace('84', '0')));
          navigation.goBack();
          // tiếp tục get thông tin user khi login thành công
          dispatch(getInforUser());
        } else {
          dispatch(
            Helper.createAction(typeUserAction.ACTION_LOGIN_BYPHONE_FAIL),
          );
        }
      }
    } catch (error) {
      console.log('ERROR loginByPhone', error);
    }
  };
};

export const checkLogin = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const isLogin = await AsyncStorage.getItem(CONSTANTS_STORAGE.IS_LOGIN);
      if (isLogin === 'LOGIN') {
        dispatch(getInforUser());
      }
    } catch (error) {
      console.log('ERROR checkLogin', error);
    }
  };
};

export const getInforUser = () => {
  return async (dispatch: AppDispatch) => {
    try {
      //
    } catch (error) {
      console.log('ERROR checkLogin', error);
    }
  };
};
