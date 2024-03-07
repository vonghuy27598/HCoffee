import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IProductType} from '@type/productType';
import {styles} from './styles';
import AvatarProduct from './AvatarProduct';
import InfoProduct from './InfoProduct';
import ButtonBuy from './ButtonBuy';

interface IProps {
  product: IProductType;
}

const HorizontalBox = ({product}: IProps) => {
  return (
    <View style={[styles.containerProductFullWidth, styles.containerProduct]}>
      <TouchableOpacity style={styles.btnProduct}>
        <AvatarProduct
          styleImage={[styles.imageProductFullWidth, styles.imageProduct]}
          path={product.imageProduct}
        />
        <InfoProduct product={product} style={styles.horizontalBoxInfo} />
      </TouchableOpacity>
      <ButtonBuy product={product} />
    </View>
  );
};

export default HorizontalBox;
