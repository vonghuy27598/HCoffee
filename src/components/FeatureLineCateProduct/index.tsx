import React from 'react';
import {LineCateProductProvider} from './Provider/LineCateProductProvider';
import BoxCategory from './Component/BoxCategory';
import LineProductByCate from './Component/LineProductByCate';
import ShowBottomSheet from './Component/ShotBottomSheet';

const FeatureLineCateProduct = () => {
  return (
    <LineCateProductProvider>
      <BoxCategory />
      <LineProductByCate />
      <ShowBottomSheet />
    </LineCateProductProvider>
  );
};

export default FeatureLineCateProduct;
