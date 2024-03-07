import {lineProductByCateFlieds} from '@graphQL/fragment/fragmentCategory';
import {QueryGQL, requestConfig} from '@graphQL/queries';
import {ILineProductByCateType} from '@type/categoryType';

export const getProductByCate = QueryGQL({
  nameOperation: 'GET_PRODUCT_BY_CATE',
  representsField: 'getProductByCate',
  representsFieldType: 'GET_PRODUCT_BY_CATE',
  method: 'GET',
  path: `Category/GetAllCategories`,
  selectionResponse: `...lineProductByCateFlieds`,
  modelResponse: {} as ILineProductByCateType[],
  bodyApi: () =>
    requestConfig({
      body: {},
    }),
  fragment: lineProductByCateFlieds,
});
