import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '@components/Custom/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import {useHome} from '@container/HomeScreen/Provider/HomeProvider';
import {useDispatch} from 'react-redux';
import {deleteCart} from '@redux/action/cartAction';

const HeaderCart = (
  showBottomSheetCart: boolean,
  setShowBottomSheetCart: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  // const {setShowBottomSheet} = useHome();
  const disptach = useDispatch<any>();
  const handleDeleteCart = () => {
    Alert.alert(
      'Xác nhận',
      'Xóa toàn bộ sản phẩm đã chọn khỏi đơn hàng của bạn?',
      [
        {
          text: 'Xóa',
          onPress: () => {
            disptach(deleteCart());
            setShowBottomSheetCart(false);
          },
        },
        {
          text: 'Hủy',
        },
      ],
    );
  };
  return (
    <View style={[styles.flexDirection, styles.headerContainer]}>
      <TouchableOpacity onPress={() => handleDeleteCart()}>
        <AppText text="Xóa" textSize={15} />
      </TouchableOpacity>
      <AppText text="Xác nhận đơn hàng" textFont="bold" textSize={18} />
      <TouchableOpacity onPress={() => setShowBottomSheetCart(false)}>
        <Icon name="close" size={25} color={COLORS.TEXT_BLACK_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCart;
