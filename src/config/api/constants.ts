const API_BASE = 'http://localhost:5132/api';

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const GET_ALL_PRODUCT = `${API_BASE}/Product/GetAllProduct`;
export const GET_CATEGORY_MENU = `${API_BASE}/CategoryMenu/GetAllMenu`;
