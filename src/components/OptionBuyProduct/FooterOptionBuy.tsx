import AppText from '@components/Custom/AppText';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';
import {Helper} from '@common/index';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

const FooterOptionBuy = () => {
  const {quantity, setQuantity, totalPrice, addToCart} = useLineCateProduct();
  return (
    <View style={styles.containerFooter}>
      <View style={styles.viewQuantity}>
        <TouchableOpacity
          style={styles.btnQuantỉty}
          onPress={() => setQuantity(oldValue => oldValue + 1)}>
          <Icon name="plus" size={20} color={COLORS.PRIMARY_COLOR} />
        </TouchableOpacity>
        <AppText text={quantity.toString()} />
        <TouchableOpacity
          style={styles.btnQuantỉty}
          onPress={() => setQuantity(oldValue => oldValue - 1)}
          disabled={quantity === 1 ? true : false}>
          <Icon name="minus" size={20} color={COLORS.PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewBtnBuy}>
        <TouchableOpacity
          style={styles.btnBuy}
          onPress={() => {
            addToCart();
            // animatedHideOrShow('hide');
          }}>
          <AppText
            text={Helper.formatPrice(totalPrice)}
            textFont="bold"
            textColor={COLORS.WHITE_COLOR}
            textSize={16}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterOptionBuy;
