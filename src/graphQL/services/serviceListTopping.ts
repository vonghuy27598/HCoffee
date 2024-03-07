// import {toppingFields} from '@graphQL/fragment/framentTopping';
// import {MutationGQL, requestConfig} from '@graphQL/queries';
// import {IToppingType} from '@type/toppingType';

// export const getListToppingByProduct = MutationGQL({
//   nameOperation: 'GET_TOPPING_PRODUCT',
//   representsField: 'listTopping',
//   representsFieldType: 'GET_TOPPING_PRODUCT',
//   method: 'POST',
//   path: 'Topping/GetListTopping',
//   selectionResponse: `
//       ...toppingFields
//     `,
//   modelResponse: {} as IToppingType[],
//   bodyApi: (listTopping: number[]) =>
//     requestConfig({
//       body: listTopping,
//     }),
//   fragment: toppingFields,
// });
