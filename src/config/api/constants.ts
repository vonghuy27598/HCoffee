const API_BASE = 'http://localhost:5132/api';

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

//GET PRODUCT HOME
export const GET_ALL_PRODUCT = `${API_BASE}/Product/GetAllProduct`;

//GET MENU HOME
export const GET_CATEGORY_MENU = `${API_BASE}/CategoryMenu/GetAllMenu`;

//GET BANNER HOME
export const GET_BANNER_HOME = `${API_BASE}/Banner/GetAllBanner`;
