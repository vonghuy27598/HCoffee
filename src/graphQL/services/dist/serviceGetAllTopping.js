"use strict";
exports.__esModule = true;
exports.getAllTopping = void 0;
var framentTopping_1 = require("@graphQL/fragment/framentTopping");
var queries_1 = require("@graphQL/queries");
exports.getAllTopping = queries_1.QueryGQL({
    nameOperation: 'GET_ALL_TOPPING',
    representsField: 'allListTopping',
    representsFieldType: 'GET_ALL_TOPPING',
    method: 'GET',
    path: 'Topping/GetAllTopping',
    selectionResponse: "\n      ...toppingFields\n    ",
    modelResponse: {},
    bodyApi: function () {
        return queries_1.requestConfig({
            body: {}
        });
    },
    fragment: framentTopping_1.toppingFields
});
