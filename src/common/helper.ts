/* eslint-disable @typescript-eslint/no-inferrable-types */
export const isNullOrUndefined = (value: any) => {
  if (value === null) return true;
  if (value === undefined) return true;
  if (value === '') return true;
  return false;
};
export const createAction = (type: string, payload?: any) => ({
  type,
  payload,
});
export const formatPrice = (price: string = '') => {
  try {
    return `${price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}đ`;
  } catch {
    return `${price}`;
  }
};
