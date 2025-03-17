import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from '@components/Custom/AppText';
import {COLORS, IMAGES} from '../../constants';

const BodyPromotion = () => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.boxSearch}>
        <View style={styles.searchIcon}>
          <Icon name="search" size={20} />
          <View style={styles.searchText}>
            <TextInput
              placeholder="Nhập mã khuyến mãi"
              numberOfLines={1}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <AppText text="Áp dụng" textColor={COLORS.WHITE_COLOR} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <AppText text="Sẵn sàng sử dụng" textFont="bold" textSize={25} />
        <View style={[styles.flexDirection, styles.boxTicket]}>
          <View style={styles.viewImageTicket}>
            <Image
              source={IMAGES.PROMOTION}
              resizeMode="stretch"
              style={styles.imageTicket}
            />
          </View>
          <View style={styles.contentTicket}>
            <AppText
              text="Mua 1 tặng 1 Trà trái cây + Freeship"
              textSize={16}
              numberOfLines={2}
            />
            <AppText text="Hết hạn ngày 30/01/2025" textSize={16} />
          </View>
          <View style={styles.lineBreak}>
            <View style={styles.dotBreakTop} />
            <View style={styles.dotBreakBottom} />
          </View>
        </View>
        <View style={[styles.flexDirection, styles.boxTicket]}>
          <View style={styles.viewImageTicket}>
            <Image
              source={IMAGES.PROMOTION}
              resizeMode="stretch"
              style={styles.imageTicket}
            />
          </View>
          <View style={styles.contentTicket}>
            <AppText
              text="Mua 1 tặng 1 Trà trái cây + Freeship"
              textSize={16}
              numberOfLines={2}
            />
            <AppText text="Hết hạn ngày 30/01/2025" textSize={16} />
          </View>
          <View style={styles.lineBreak} />
        </View>
        <View style={[styles.flexDirection, styles.boxTicket]}>
          <View style={styles.viewImageTicket}>
            <Image
              source={IMAGES.PROMOTION}
              resizeMode="stretch"
              style={styles.imageTicket}
            />
          </View>
          <View style={styles.contentTicket}>
            <AppText
              text="Mua 1 tặng 1 Trà trái cây + Freeship"
              textSize={16}
              numberOfLines={2}
            />
            <AppText text="Hết hạn ngày 30/01/2025" textSize={16} />
          </View>
          <View style={styles.lineBreak} />
        </View>
      </View>
    </View>
  );
};

export default BodyPromotion;
