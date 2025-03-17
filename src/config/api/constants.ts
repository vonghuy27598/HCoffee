const API_BASE = 'http://192.168.1.4:8082/api';
//REVERSE GEOLOCATION
const API_REGEOCODE = 'https://revgeocode.search.hereapi.com/v1/revgeocode';

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

//GET PRODUCT
export const GET_ALL_PRODUCT = `${API_BASE}/Product/GetAllProduct`;

//GET MENU
export const GET_CATEGORY_MENU = `${API_BASE}/CategoryMenu/GetAllMenu`;

//GET BANNER
export const GET_BANNER_HOME = `${API_BASE}/Banner/GetAllBanner`;

//GET CATEGORY
export const GET_CATEGORY = `${API_BASE}/Category/GetAllCategories`;

//CART
// .../api/Cart/GetCartByPhone/numberPhone?phoneNumber=123
export const GET_CART_BY_PHONE = `${API_BASE}/Cart/GetCartByPhone`;
export const ADD_CART = `${API_BASE}/Cart/addCart`;
export const UPDATE_CART = `${API_BASE}/Cart/updateCart`;
export const DELETE_CART = `${API_BASE}/Cart/deleteCart`;
//ORDER
export const GET_ORDER = `${API_BASE}/Order/getOrderByPhone`;
export const ADD_ORDER = `${API_BASE}/Order/addOrder`;
export const UPDATE_ORDER = `${API_BASE}/Order/updateOrder`;
export const DELETE_ORDER = `${API_BASE}/Order/deleteOrder`;

//NOTIFICATION
export const GET_ALL_NOTIFY = `${API_BASE}/Notification/getAllNotifyByPhone`;
export const GET_NOTIFY_BY_PHONE = `${API_BASE}/Notification/getNotifyByPhone`;
export const GET_COUNT_NO_WATCH = `${API_BASE}/Notification/getCountNoWatch`;
export const ADD_NOTIFY_BY_PHONE = `${API_BASE}/Notification/addNotifyByPhone`;
export const UPDATE_NOTIFY = `${API_BASE}/Notification/updateNotifyByPhone`;
export const DELETE_NOTIFY = `${API_BASE}/Notification/deleteNotifyByPhone`;
export const SET_SEEN_NOTIFY = `${API_BASE}/Notification/setSeenNotify`;

//USER
export const LOGIN_BY_PHONE = `${API_BASE}/User/Login/Login`;
export const REQUEST_OTP = `${API_BASE}/SMS/CreateOTP`;
export const SEND_OTP = `${API_BASE}/SMS/SendOTP`;

//API REVERSE GEOLOCATION
export const GET_LOCATION_USER = `${API_REGEOCODE}`;
