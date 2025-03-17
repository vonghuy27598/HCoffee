/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from '@redux/store';
import {CONSTANTS_STORAGE} from '../../constants';
import {Helper} from '@common/index';
import {getCart} from './cartAction';
import {typeGenarateAction} from '@redux/constants/typeGenarateAction';
import {createAction} from '@common/helper';
import {getUniqueId} from 'react-native-device-info';

export const genarateApp = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const storage = await AsyncStorage.multiGet([
        CONSTANTS_STORAGE.IS_LOGIN,
        CONSTANTS_STORAGE.SESSION_USER,
      ]);
      console.log('CALL genarateApp', storage);

      const isLogin = storage[0][1];
      const user = JSON.parse(storage[1][1] ?? '');
      if (isLogin && !Helper.isNullOrUndefined(user)) {
        const payload = {
          isLogin: JSON.parse(isLogin),
          numberPhone: user.numberPhone,
          deviceId: await getUniqueId(),
        };
        dispatch(createAction(typeGenarateAction.ACTION_GENARATE_APP, payload));
      }
      dispatch(getCart(JSON.parse(isLogin!), user.numberPhone));
    } catch (error) {
      console.log('GENARATE APP ERROR', error);
    }
  };
};
