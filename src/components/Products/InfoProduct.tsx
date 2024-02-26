import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IProductType} from '@type/productType';
import AppText from '@components/Custom/AppText';
import {Helper} from '@common/index';

import {getPrice} from './extension';
import ButtonBuy from './ButtonBuy';

const InfoProduct = (product: IProductType) => {
  return (
    <View style={{width: 110}}>
      <AppText
        style={styles.txtName}
        text={product.productName}
        numberOfLines={2}
      />
      <AppText text={Helper.formatPrice(product.smallPrice?.toString())} />
      <ButtonBuy />
    </View>
  );
};

export default InfoProduct;

const styles = StyleSheet.create({
  txtName: {
    fontWeight: '800',
  },
});
