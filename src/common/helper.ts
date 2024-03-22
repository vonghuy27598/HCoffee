import {IProductType} from '@type/productType';
import {ISelectToppingType} from '@type/toppingType';

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

export const getFirstSize = (smallPrice: number, mediumPrice: number) => {
  if (smallPrice > 0) {
    return 'smallPrice';
  } else if (mediumPrice > 0) {
    return 'mediumPrice';
  }
  return 'bigPrice';
};

export const isArrayEquals = (arr1: any[], arr2: any[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((obj1, index) => {
    const obj2 = arr2[index];
    return isObjectEqual(obj1, obj2);
  });
};

export const isObjectEqual = (obj1: any, obj2: any): boolean => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(key => obj1[key] === obj2[key]);
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

export const getPriceSize = (
  size: string,
  selectProduct: IProductType | undefined,
) => {
  if (size === 'smallPrice') {
    return selectProduct?.smallPrice ?? 0;
  } else if (size === 'mediumPrice') {
    return selectProduct?.mediumPrice ?? 0;
  }
  return selectProduct?.bigPrice ?? 0;
};
export const getPriceCheckTopping = (
  listToppingChecked: ISelectToppingType[],
) => {
  let sumPriceTopping = 0;
  listToppingChecked
    .filter(x => x.checked)
    .forEach(x => (sumPriceTopping += x.price));

  return sumPriceTopping;
};
export const formatSize = (
  typeSize: 'smallPrice' | 'mediumPrice' | 'bigPrice' | string,
) => {
  switch (typeSize) {
    case 'smallPrice':
      return 'Nhỏ';
    case 'mediumPrice':
      return 'Vừa';
    case 'bigPrice':
      return 'Lớn';
    default:
      return 'Vừa';
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
