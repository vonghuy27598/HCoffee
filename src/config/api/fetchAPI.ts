import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONSTANTS_STORAGE} from '../../constants';
export type Method = 'PUT' | 'POST' | 'DELETE' | 'GET';
export interface IFetchAPI {
  url: string;
  request?: {
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
          console.log('API REQUEST:', url);

          await fetch(url)
            .then(async res => {
              const response = await res.json();
              console.log('API RESPONSE', response);
              console.log('API RESPONSE URL', url);
              resolve(response);
            })
            .catch(errors => {
              console.log('ERROR REQUEST API', url, errors);
              reject('ERROR REQUEST API');
            });
        },
      );
    },
  );
};
