import React from 'react';
import {LineCateProductProvider} from './Provider/LineCateProductProvider';
import BoxCategory from './Component/BoxCategory';
import LineProductByCate from './Component/LineProductByCate';
import {View} from 'react-native';

const FeatureLineCateProduct = () => {
  return (
    <LineCateProductProvider>
      <BoxCategory />
      <LineProductByCate />
    </LineCateProductProvider>
  );
};

export default FeatureLineCateProduct;
