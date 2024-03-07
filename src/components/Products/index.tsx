import {IProductType} from '@type/productType';
import React from 'react';
import HorizontalBox from './HorizontalBox';
import VerticalBox from './VerticalBox';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

const BoxType = {
  Horizontal: 'Horizontal',
  Vertical: 'Vertical',
};

interface IProduct {
  product: IProductType;
  boxType?: keyof typeof BoxType;
}

const Product = ({product, boxType}: IProduct) => {
  const {currentScreen} = useLineCateProduct();

  if (currentScreen.current === 'OrderTab') {
    return <HorizontalBox product={product} />;
  }
  return <VerticalBox product={product} />;
};

export default Product;
