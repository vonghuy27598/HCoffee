/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONSTANTS_STORAGE} from '../../constants';
import {Helper} from '@common/index';
export type Method = 'PUT' | 'POST' | 'DELETE' | 'GET';
export interface IFetchAPI {
  url: string;
  request?: {
    method: Method;
    queryString?: string;
    body?: BodyInit;
    checkCall?: 'InApp' | 'Other';
  };
}

export const fetchAPI = ({url, request}: IFetchAPI) => {
  return new Promise(
    (
      resolve: (value: unknown | PromiseLike<unknown>) => void,
      reject: (reason?: unknown) => void,
    ) => {
      AsyncStorage.multiGet(
        [
          CONSTANTS_STORAGE.ACCESS_TOKEN,
          CONSTANTS_STORAGE.IS_LOGIN,
          CONSTANTS_STORAGE.SESSION_USER,
        ],
        async (errors, result) => {
          if (errors) {
            reject('Error');
          }
          const headers = new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
          });
          let getUser = null;
          //get user logged
          if (JSON.parse(result![1][1]!)) {
            getUser = JSON.parse(result![2][1]?.toString() ?? '');
          }
          if (
            !Helper.isNullOrUndefined(getUser) &&
            Helper.isNullOrUndefined(request?.checkCall) &&
            request?.checkCall !== 'Other'
          ) {
            headers.append('Authorization', getUser.token);
          }

          let urlAPI = url;
          const newRequest = {
            ...request,
            headers,
          };

          if (!Helper.isNullOrUndefined(request?.queryString)) {
            urlAPI = `${urlAPI}?${request?.queryString}`;
          }
          console.log('API REQUEST:', urlAPI);
          console.log('API REQUEST Body', newRequest);
          await fetch(urlAPI, newRequest)
            .then(async res => {
              let response = await res.text();
              if (Helper.isJSON(response) || Helper.isArray(response)) {
                response = JSON.parse(response);
              }
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
