import {View, Image, TouchableOpacity, Animated, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '@components/Custom/AppText';
import {COLORS, IMAGES} from '../../constants';
import {useHome} from '@container/HomeScreen/Provider/HomeProvider';
import {useOrder} from '@container/OrderScreen/Provider/OrderProvider';
import {requestPermissionLocation} from '@common/permissions';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {getLocationUserAction} from '@redux/action/locationAction';
import {RootState} from '@redux/store';
import {Helper} from '@common/index';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const BoxLocation = () => {
  const {
    boxLocationAnim,
    iconAnim,
    textLocationAnim,
    textTitleLocationAnim,
    setShowBottomSheet,
  } = useHome();
  const {
    boxLocationAnimOrder,
    iconAnimOrder,
    textLocationAnimOrder,
    textTitleLocationAnimOrder,
    setShowBottomSheetOrder,
  } = useOrder();
  const dispatch = useDispatch<any>();
  const locationCurrent = useSelector(
    (state: RootState) => state.getLocationUserReducer.items,
  );
  const getLocation = async () => {
    if (await requestPermissionLocation()) {
      Geolocation.getCurrentPosition(
        (postion: any) => {
          console.log('onReady App', postion);
          if (postion.coords) {
            dispatch(
              getLocationUserAction(
                postion.coords.latitude,
                postion.coords.longitude,
              ),
            );
          }
        },
        (err: any) => {
          console.log('getCurrentPosition error', err);
        },
        {
          timeout: 100000,
          maximumAge: 100000,
          enableHighAccuracy: true,
        },
      );
    }
  };
  return (
    <AnimatedTouchableOpacity
      style={[
        styles.containerBox,
        styles.flexDirectionRow,
        boxLocationAnim,
        boxLocationAnimOrder,
      ]}
      activeOpacity={1}
      onPress={() => {
        getLocation();
      }}>
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
          text={
            !Helper.isNullOrUndefined(locationCurrent) &&
            locationCurrent.length > 0
              ? locationCurrent[0].address.label
              : 'Giao hàng tận nơi'
          }
          textFont="bold"
          animated={true}
          style={[textLocationAnim, textLocationAnimOrder]}
          numberOfLines={1}
        />
      </View>
      <TouchableOpacity
        style={[styles.flexDirectionRow, styles.btnGoCart]}
        onPress={() =>
          setShowBottomSheet
            ? setShowBottomSheet(true)
            : setShowBottomSheetOrder(true)
        }>
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
    </AnimatedTouchableOpacity>
  );
};

export default BoxLocation;
