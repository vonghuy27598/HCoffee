import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '@components/Custom/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {COLORS} from '../../constants';

const HeaderPromotion = (
  showBottomSheetCart: boolean,
  setShowBottomSheetCart: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return (
    <View style={[styles.flexDirection, styles.headerContainer]}>
      <AppText text="Nhập mã khuyến mãi" textFont="bold" textSize={18} />
      <TouchableOpacity
        onPress={() => setShowBottomSheetCart(false)}
        style={styles.btnClose}>
        <Icon name="close" size={25} color={COLORS.TEXT_BLACK_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderPromotion;
