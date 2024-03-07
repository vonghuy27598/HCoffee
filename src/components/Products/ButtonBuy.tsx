import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '@components/Custom/AppText';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../constants';
import {IProductType} from '@type/productType';
import {useHome} from '@container/HomeScreen/Provider/HomeProvider';

interface IProps {
  product: IProductType;
}

const ButtonBuy = ({product}: IProps) => {
  const {setShowBottomSheet, selectProduct} = useHome();
  return (
    <TouchableOpacity
      style={styles.btnBuy}
      onPress={() => {
        setShowBottomSheet(true);
        selectProduct(product.iD_Cate, product.productId);
      }}>
      <Icon name="plus" color={COLORS.WHITE_COLOR} size={20} />
    </TouchableOpacity>
  );
};

export default ButtonBuy;

const styles = StyleSheet.create({
  btnBuy: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY_COLOR,
    padding: 8,
    borderRadius: 50,
  },
});
