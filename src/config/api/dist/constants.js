"use strict";
exports.__esModule = true;
exports.GET_LOCATION_USER = exports.SEND_OTP = exports.REQUEST_OTP = exports.LOGIN_BY_PHONE = exports.SET_SEEN_NOTIFY = exports.DELETE_NOTIFY = exports.UPDATE_NOTIFY = exports.ADD_NOTIFY_BY_PHONE = exports.GET_COUNT_NO_WATCH = exports.GET_NOTIFY_BY_PHONE = exports.GET_ALL_NOTIFY = exports.DELETE_ORDER = exports.UPDATE_ORDER = exports.ADD_ORDER = exports.GET_ORDER = exports.DELETE_CART = exports.UPDATE_CART = exports.ADD_CART = exports.GET_CART_BY_PHONE = exports.GET_CATEGORY = exports.GET_BANNER_HOME = exports.GET_CATEGORY_MENU = exports.GET_ALL_PRODUCT = exports.METHOD = void 0;
var API_BASE = 'http://192.168.1.4:8082/api';
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
//CART
// .../api/Cart/GetCartByPhone/numberPhone?phoneNumber=123
exports.GET_CART_BY_PHONE = API_BASE + "/Cart/GetCartByPhone";
exports.ADD_CART = API_BASE + "/Cart/addCart";
exports.UPDATE_CART = API_BASE + "/Cart/updateCart";
exports.DELETE_CART = API_BASE + "/Cart/deleteCart";
//ORDER
exports.GET_ORDER = API_BASE + "/Order/getOrderByPhone";
exports.ADD_ORDER = API_BASE + "/Order/addOrder";
exports.UPDATE_ORDER = API_BASE + "/Order/updateOrder";
exports.DELETE_ORDER = API_BASE + "/Order/deleteOrder";
//NOTIFICATION
exports.GET_ALL_NOTIFY = API_BASE + "/Notification/getAllNotifyByPhone";
exports.GET_NOTIFY_BY_PHONE = API_BASE + "/Notification/getNotifyByPhone";
exports.GET_COUNT_NO_WATCH = API_BASE + "/Notification/getCountNoWatch";
exports.ADD_NOTIFY_BY_PHONE = API_BASE + "/Notification/addNotifyByPhone";
exports.UPDATE_NOTIFY = API_BASE + "/Notification/updateNotifyByPhone";
exports.DELETE_NOTIFY = API_BASE + "/Notification/deleteNotifyByPhone";
exports.SET_SEEN_NOTIFY = API_BASE + "/Notification/setSeenNotify";
//USER
exports.LOGIN_BY_PHONE = API_BASE + "/User/Login/Login";
exports.REQUEST_OTP = API_BASE + "/SMS/CreateOTP";
exports.SEND_OTP = API_BASE + "/SMS/SendOTP";
//API REVERSE GEOLOCATION
exports.GET_LOCATION_USER = "" + API_REGEOCODE;
