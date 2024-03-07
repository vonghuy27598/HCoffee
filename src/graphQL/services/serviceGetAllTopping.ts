import {toppingFields} from '@graphQL/fragment/framentTopping';
import {QueryGQL, requestConfig} from '@graphQL/queries';
import {IToppingType} from '@type/toppingType';

export const getAllTopping = QueryGQL({
  nameOperation: 'GET_ALL_TOPPING',
  representsField: 'allListTopping',
  representsFieldType: 'GET_ALL_TOPPING',
  method: 'GET',
  path: 'Topping/GetAllTopping',
  selectionResponse: `
      ...toppingFields
    `,
  modelResponse: {} as IToppingType[],
  bodyApi: () =>
    requestConfig({
      body: {},
    }),
  fragment: toppingFields,
});
