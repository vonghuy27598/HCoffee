const API_BASE = 'http://192.168.1.2:8082/api';
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

//API REVERSE GEOLOCATION
export const GET_LOCATION_USER = `${API_REGEOCODE}`;
