import AppText from '@components/Custom/AppText';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';
import React from 'react';
import {View} from 'react-native';

const HeaderOptionBuy = () => {
  const {chooseProduct} = useLineCateProduct();
  return (
    <View>
      <AppText text={chooseProduct?.productName} textFont="bold" />
    </View>
  );
};

export default HeaderOptionBuy;
