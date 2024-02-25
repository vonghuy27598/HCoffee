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
