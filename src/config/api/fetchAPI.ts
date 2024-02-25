import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONSTANTS_STORAGE} from '../../constants';
import {GET_ALL_PRODUCT} from './constants';
type Method = 'PUT' | 'POST' | 'DELETE' | 'GET';
interface IFetchAPI {
  url: string;
  request: {
    method: Method;
    header?: Headers;
    body?: object;
  };
}

export const fetchAPI = ({url, request}: IFetchAPI) => {
  return new Promise(
    (
      resolve: (value: unknown | PromiseLike<unknown>) => void,
      reject: (reason?: unknown) => void,
    ) => {
      AsyncStorage.multiGet(
        [CONSTANTS_STORAGE.ACCESS_TOKEN, CONSTANTS_STORAGE.IS_LOGIN],
        async (errors, result) => {
          if (errors) {
            reject('Error');
          }
          await fetch(url).then(async res => {
            const response = await res.json();
            console.log('RESSSS', response);
            resolve(response);
          });
        },
      );
    },
  );
};
