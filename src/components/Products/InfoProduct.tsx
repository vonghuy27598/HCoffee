import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {IProductType} from '@type/productType';
import AppText from '@components/Custom/AppText';
import {Helper} from '@common/index';

interface IProps {
  product: IProductType;
  style?: StyleProp<ViewStyle>;
}

const InfoProduct = ({product, style}: IProps) => {
  return (
    <View style={style}>
      <AppText
        style={styles.txtName}
        text={product.productName}
        numberOfLines={2}
        textFont="bold"
      />
      <AppText
        text={Helper.formatPrice(product?.smallPrice)}
        style={{marginBottom: 15}}
      />
    </View>
  );
};

export default InfoProduct;

const styles = StyleSheet.create({
  txtName: {
    fontWeight: '800',
    marginVertical: 15,
  },
});
