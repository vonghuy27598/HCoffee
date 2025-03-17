"use strict";
exports.__esModule = true;
exports.client = void 0;
var client_1 = require("@apollo/client");
var apollo_link_rest_1 = require("apollo-link-rest");
var restLink = new apollo_link_rest_1.RestLink({ uri: 'http://192.168.1.4:8082/api/' });
exports.client = new client_1.ApolloClient({
    link: restLink,
    cache: new client_1.InMemoryCache({
        possibleTypes: {
            DataCategory: ['GET_PRODUCT_BY_CATE'],
            DataOrder: ['LIST_PRODUCT'],
            DataTopping: ['GET_ALL_TOPPING']
        }
    }),
    connectToDevTools: true
});
