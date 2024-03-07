import AppText from '@components/Custom/AppText';
import {useHome} from '@container/HomeScreen/Provider/HomeProvider';
import React from 'react';
import {View} from 'react-native';

const HeaderOptionBuy = () => {
  const {chooseProduct} = useHome();
  return (
    <View>
      <AppText text={chooseProduct?.productName} textFont="bold" />
    </View>
  );
};

export default HeaderOptionBuy;
