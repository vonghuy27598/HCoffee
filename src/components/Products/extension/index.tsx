/* eslint-disable @typescript-eslint/no-inferrable-types */
const smallPrice = (originalPrice: number) => {
  return originalPrice;
};
const mediumPrice = (originalPrice: number) => {
  return originalPrice + 10000;
};
const bigPrice = (originalPrice: number) => {
  return originalPrice + 20000;
};

const getPriceStragies = {
  smallPrice,
  mediumPrice,
  bigPrice,
};

export const getPrice = (price: number = 0, typePrice: any) => {
  return getPriceStragies[typePrice](price);
};
