import AppText from '@components/Custom/AppText';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';
import React from 'react';
import {View} from 'react-native';

const HeaderOptionBuy = (productName: string) => {
  return (
    <View>
      <AppText text={productName} textFont="bold" />
    </View>
  );
};

export default HeaderOptionBuy;
