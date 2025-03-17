import {View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '@components/Custom/AppText';
import {COLORS} from '../../constants';
import {Helper} from '@common/index';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {addOrder} from '@redux/action/orderAction';
import {useNavigation} from '@react-navigation/native';

const FooterCart = (
  showBottomSheetCart: boolean,
  setShowBottomSheetCart: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const dispatch = useDispatch<any>();
  const cart = useSelector((state: RootState) => state.setCartReducer);
  const {isLogin} = useSelector((state: RootState) => state.genarateReducer);
  const navigation = useNavigation();
  const handleOrder = () => {
    if (isLogin) {
      dispatch(addOrder(setShowBottomSheetCart));
    } else {
      Alert.alert(
        'Đăng nhập',
        'Quý khách vui lòng đăng nhập trước khi đặt hàng',
        [
          {
            text: 'Đồng ý',
            onPress: () => {
              setShowBottomSheetCart(false);
              navigation.navigate('Login' as never);
            },
          },
          {
            text: 'Hủy',
          },
        ],
      );
    }
  };
  return (
    <View style={[styles.flexDirection, styles.footerContainer]}>
      <View>
        <AppText
          text={`Giao hàng: ${cart.totalQuantityCart} sản phẩm`}
          textColor={COLORS.WHITE_COLOR}
          style={styles.txtItem}
        />
        <AppText
          text={Helper.formatPrice(
            cart.totalPriceCart + cart.totalPriceShipCart,
          )}
          textFont="bold"
          textColor={COLORS.WHITE_COLOR}
          style={styles.txtItem}
        />
      </View>
      <TouchableOpacity style={styles.btnBuy} onPress={() => handleOrder()}>
        <AppText
          text="Đặt hàng"
          textColor={COLORS.PRIMARY_COLOR}
          style={styles.txtItem}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FooterCart;
