import {View, Image, TouchableOpacity, Animated, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '@components/Custom/AppText';
import {COLORS, IMAGES} from '../../constants';
import {useHome} from '@container/HomeScreen/Provider/HomeProvider';
import {useOrder} from '@container/OrderScreen/Provider/OrderProvider';

const BoxLocation = () => {
  const {boxLocationAnim, iconAnim, textLocationAnim, textTitleLocationAnim} =
    useHome();
  const {
    boxLocationAnimOrder,
    iconAnimOrder,
    textLocationAnimOrder,
    textTitleLocationAnimOrder,
  } = useOrder();
  return (
    <Animated.View
      style={[
        styles.containerBox,
        styles.flexDirectionRow,
        boxLocationAnim,
        boxLocationAnimOrder,
      ]}>
      <View style={styles.areaLocation}>
        <Animated.View style={[styles.flexDirectionRow, styles.titleLocation]}>
          <Animated.Image
            source={IMAGES.ICON_COFFEE}
            resizeMode="stretch"
            style={[styles.imgIconCoffee, iconAnim, iconAnimOrder]}
          />
          <AppText
            text="Địa chỉ giao hàng"
            animated={true}
            style={[textTitleLocationAnim, textTitleLocationAnimOrder]}
          />
        </Animated.View>
        <AppText
          text="Đường Bình Trị Đông, Phường Bình Trị Đông, Quận Bình Tân"
          textFont="bold"
          animated={true}
          style={[textLocationAnim, textLocationAnimOrder]}
          numberOfLines={1}
        />
      </View>
      <TouchableOpacity style={[styles.flexDirectionRow, styles.btnGoCart]}>
        <View style={styles.boxQuantity}>
          <AppText
            text="5"
            textColor={COLORS.PRIMARY_COLOR}
            textSize={13}
            textFont="bold"
          />
        </View>
        <AppText
          text="255.000đ"
          textColor={COLORS.WHITE_COLOR}
          textFont="bold"
          style={styles.totalPrice}
          textSize={15}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BoxLocation;
