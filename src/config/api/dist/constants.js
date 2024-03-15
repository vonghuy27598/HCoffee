"use strict";
exports.__esModule = true;
exports.GET_LOCATION_USER = exports.GET_CATEGORY = exports.GET_BANNER_HOME = exports.GET_CATEGORY_MENU = exports.GET_ALL_PRODUCT = exports.METHOD = void 0;
var API_BASE = 'http://192.168.1.2:8082/api';
//REVERSE GEOLOCATION
var API_REGEOCODE = 'https://revgeocode.search.hereapi.com/v1/revgeocode';
exports.METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};
//GET PRODUCT
exports.GET_ALL_PRODUCT = API_BASE + "/Product/GetAllProduct";
//GET MENU
exports.GET_CATEGORY_MENU = API_BASE + "/CategoryMenu/GetAllMenu";
//GET BANNER
exports.GET_BANNER_HOME = API_BASE + "/Banner/GetAllBanner";
//GET CATEGORY
exports.GET_CATEGORY = API_BASE + "/Category/GetAllCategories";
//API REVERSE GEOLOCATION
exports.GET_LOCATION_USER = "" + API_REGEOCODE;
