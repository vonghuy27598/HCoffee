import {View, Animated, Image, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {styles} from './styles';
import {COLORS, IMAGES} from '../../../constants';
import FocusAwareStatusBar from '@components/FocusAwareStatusBar';
import AppText from '@components/Custom/AppText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useOrder} from '@container/OrderScreen/Provider/OrderProvider';

const HeaderOrder = () => {
  const {headerAnimation, headerCateName} = useOrder();
  return useMemo(() => {
    return (
      <Animated.View
        style={[styles.container, styles.flexRowDicrection, headerAnimation]}>
        <FocusAwareStatusBar
          backgroundColor={COLORS.WHITE_COLOR}
          barStyle={'dark-content'}
        />
        <View style={[styles.headerLeft, styles.flexRowDicrection]}>
          <TouchableOpacity style={styles.btnCate}>
            <Image
              source={IMAGES.ICON_CATE_HEADER}
              resizeMode="contain"
              style={styles.iconCate}
            />
            <AppText
              text={headerCateName}
              style={styles.txtCate}
              textFont="bold"
              textSize={16}
            />
            <Icon name="keyboard-arrow-down" size={20} />
          </TouchableOpacity>
        </View>
        <View style={[styles.headerRight, styles.flexRowDicrection]}>
          <TouchableOpacity style={styles.btnIcon}>
            <Icon name="search" size={30} color={COLORS.PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIcon}>
            <Icon
              name="favorite-border"
              size={30}
              color={COLORS.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }, [headerCateName]);
};

export default HeaderOrder;
