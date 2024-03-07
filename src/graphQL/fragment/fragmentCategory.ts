import {productFields} from '@container/OrderScreen/fragment/fragmentOrder';

export const lineProductByCateFlieds = `
    fragment lineProductByCateFlieds on DataCategory {
        categoryId @export(as: "idCate")
        cateName
        imageCate
        listProduct @rest(path: "Product/GetProductByCate/{exportVariables.idCate}", type: "LIST_PRODUCT", method: "GET"){
           ...productFields
        },
    }
    ${productFields}`;
