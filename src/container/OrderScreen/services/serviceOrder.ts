import {MutationGQL, requestConfig} from '@graphQL/queries';
import {IProductType} from '@type/productType';
import {productFields} from '../fragment/fragmentOrder';

export const getAllProduct = MutationGQL({
  nameOperation: 'GET_ALL_PRODUCTS',
  representsField: 'products',
  representsFieldType: 'GET_ALL_PRODUCTS',
  method: 'GET',
  path: `Product/GetAllProduct`,
  selectionResponse: `
    ...productFields
  `,
  modelResponse: {} as IProductType[],
  bodyApi: () =>
    requestConfig({
      body: {},
    }),
  fragment: productFields,
});
