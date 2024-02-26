import {gql} from '@apollo/client';
import {constantsURL} from '@config/api';
import {METHOD} from '@config/api/constants';
import {productFields} from '@container/OrderScreen/fragment/fragmentOrder';

export const requestConfig = ({
  body,
  headers = {},
  params = {},
}: {
  body?: any;
  headers?: {[key: string]: string};
  params?: {[key: string | number]: string | number | boolean};
}) => ({
  variables: {
    body: body,
    ...params,
  },
  context: {headers: headers},
});

const convertQueryString = (params: any) => {
  const esc = encodeURIComponent;
  const queryKeys = Object.keys(params);
  const queryString = queryKeys
    .map((item, index) => {
      return `${index === 0 ? '?' : ''}${esc(item)}={args.${item}}`;
    })
    .join('&');
  const argsQueryString = queryKeys.map(key => `${key}:$${key}`).join(',');
  return {queryString, argsQueryString};
};

const transformPath = (path: string, requestCustom: any) => {
  let paramsQuery;
  let pathQueryString;
  let argsQueryString;
  if (typeof requestCustom === 'function') {
    paramsQuery = requestCustom();
  }
  if (paramsQuery) {
    let params = {...paramsQuery.variables};
    delete params.body;
    const query = convertQueryString(params);
    argsQueryString = query.argsQueryString;
    pathQueryString = `${path}${query.queryString}`;
  } else {
    pathQueryString = path;
  }
  return {pathQueryString, argsQueryString};
};

export const MutationGQL = <M, R>({
  nameOperation,
  representsField,
  representsFieldType,
  method,
  path,
  modelResponse,
  selectionResponse,
  bodyApi = {} as R,
  fragment = '',
}: {
  nameOperation: string;
  representsField: string;
  representsFieldType: string;
  method: keyof typeof METHOD;
  path: string;
  modelResponse: M;
  selectionResponse: string;
  bodyApi?: R;
  fragment?: string;
}) => {
  const {pathQueryString, argsQueryString} = transformPath(path, bodyApi);
  return {
    query: gql`
      mutation ${nameOperation.toUpperCase()}($body: any!) {
            ${representsField}(body: $body,${argsQueryString})
            @rest(
                type: "${representsFieldType}"
                method: "${method}"
                path: "${pathQueryString}"
                bodyKey: "body"
            ) {
            ${selectionResponse}
        }
      }
      ${fragment}
  `,
    key: representsField,
    response: {
      [representsField]: modelResponse,
    },
    request: bodyApi,
  };
};

export const QueryGQL = <M, R>({
  nameOperation,
  representsField,
  representsFieldType,
  method,
  path,
  modelResponse,
  selectionResponse,
  bodyApi = {} as R,
  fragment = '',
}: {
  nameOperation: string;
  representsField: string;
  representsFieldType: string;
  method: keyof typeof METHOD;
  path: string;
  modelResponse: M;
  selectionResponse: string;
  bodyApi?: R;
  fragment?: string;
}) => {
  const {pathQueryString, argsQueryString} = transformPath(path, bodyApi);
  return {
    query: gql`
    query ${nameOperation.toUpperCase()}($body: any!) {
        ${representsField}(body: $body,${argsQueryString})
        @rest(
            type: "${representsFieldType}"
            method: "${method}"
            path: "${pathQueryString}"
            bodyKey: "body"
        ) {
        ${selectionResponse}
        }
    }
    ${fragment}
`,
    key: representsField,
    response: {
      [representsField]: modelResponse,
    },
    request: bodyApi,
  };
};
