import {IProductType} from '@type/productType';
import React from 'react';
import {StyleSheet} from 'react-native';
import HorizontalBox from './HorizontalBox';
import VerticalBox from './VerticalBox';

const BoxType = {
  Horizontal: 'Horizontal',
  Vertical: 'Vertical',
};

interface IProduct {
  product: IProductType;
  boxType?: keyof typeof BoxType;
}

const Product = ({product, boxType}: IProduct) => {
  console.log('product', product);
  if (boxType === 'Horizontal') {
    return <HorizontalBox {...product} />;
  }
  return <VerticalBox {...product} />;
};

export default Product;

const styles = StyleSheet.create({});
