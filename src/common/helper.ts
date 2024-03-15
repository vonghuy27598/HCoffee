/* eslint-disable @typescript-eslint/no-inferrable-types */
export const isNullOrUndefined = (value: any) => {
  if (value === null) return true;
  if (value === undefined) return true;
  if (value === '') return true;
  return false;
};

export const checkZeroPrice = (value: number) => {
  if (value === null) return true;
  if (value === 0) return true;
  return false;
};

export const checkLessThanOneSize = (arrSize: number[]) => {
  const filter = arrSize.filter(x => x > 0);
  if (filter.length <= 1) return true;
  return false;
};

export const createAction = (type: string, payload?: any) => ({
  type,
  payload,
});
export const formatPrice = (price: number) => {
  try {
    return `${price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}đ`;
  } catch {
    return `${price}`;
  }
};

//#region format wrap text by line
const checkSecondSpace = (text: string) => {
  const textTrim = text.trim();
  //check text have more space
  const moreSpace = textTrim.indexOf(' ', textTrim.indexOf(' ') + 1);
  if (moreSpace > 0) {
    return true;
  }
  return false;
};

export const formatWrapLineSpace = (
  text: string,
  positionSpace: number,
): string => {
  const textTrim = text.trim();
  //check all position space
  let index = 0;
  let res = [];
  while ((index = textTrim.indexOf(' ', index + 1)) > 0) {
    res.push(index);
  }
  // get position space by custom
  const indexBySpace = res[positionSpace - 1];
  // check position
  if (indexBySpace > 0) {
    const firstText = textTrim.substr(0, indexBySpace);
    const secondText = textTrim.substr(indexBySpace + 1, textTrim.length);
    if (checkSecondSpace(secondText)) {
      const result = `${firstText}\n${formatWrapLineSpace(
        secondText,
        positionSpace,
      )}`;
      return result;
    }
    return `${firstText}\n${secondText}`;
  }
  return textTrim;
};
//#endregion

export const getCloser = (value: any, checkOne: number, checkTwo: number) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;
