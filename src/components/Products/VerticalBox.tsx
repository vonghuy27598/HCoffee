import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IProductType} from '@type/productType';
import AvatarProduct from './AvatarProduct';
import InfoProduct from './InfoProduct';
import ButtonBuy from './ButtonBuy';

const VerticalBox = (product: IProductType) => {
  return (
    <View>
      <AvatarProduct
        styleImage={{width: 110, height: 110}}
        path={product.imageProduct}
      />
      <InfoProduct {...product} />
    </View>
  );
};

export default VerticalBox;

const styles = StyleSheet.create({});
