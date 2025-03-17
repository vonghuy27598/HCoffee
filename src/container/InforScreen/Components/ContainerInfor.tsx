import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '@components/Custom/AppText';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';

const ContainerInfor = () => {
  const navigation = useNavigation();
  const {isLogin} = useSelector((state: RootState) => state.genarateReducer);
  return (
    <View style={styles.containerInfor}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewInfor}>
          <AppText text="Tiện ích" textFont="bold" style={styles.textTitle} />
          <View style={styles.flexDirection}>
            <TouchableOpacity
              style={[
                styles.halfViewBox,
                {backgroundColor: COLORS.BLUE_5f86d7_COLOR},
              ]}>
              <Icon name="edit-note" size={30} color={COLORS.WHITE_COLOR} />
              <AppText
                text="Lích sử đơn hàng"
                textColor={COLORS.WHITE_COLOR}
                textFont="bold"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.halfViewBox,
                {backgroundColor: COLORS.PRIMARY_COLOR},
              ]}>
              <Icon name="file-present" size={30} color={COLORS.WHITE_COLOR} />
              <AppText
                text="Điều khoản"
                textColor={COLORS.WHITE_COLOR}
                textFont="bold"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.viewInfor, styles.boxView]}>
          <AppText text="Hỗ trợ" textFont="bold" style={styles.textTitle} />
          <TouchableOpacity style={[styles.flexDirection, styles.fullViewBox]}>
            <View style={styles.leftView}>
              <Icon name="star-border" size={18} />
              <AppText text="Đánh giá đơn hàng" style={styles.textFull} />
            </View>
            <View style={styles.rightView}>
              <Icon name="chevron-right" size={16} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexDirection, styles.fullViewBox]}>
            <View style={styles.leftView}>
              <Icon name="chat-bubble-outline" size={18} />
              <AppText text="Liên hệ góp ý" style={styles.textFull} />
            </View>
            <View style={styles.rightView}>
              <Icon name="chevron-right" size={16} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexDirection, styles.fullViewBox]}>
            <View style={styles.leftView}>
              <Icon name="collections-bookmark" size={18} />
              <AppText
                text="Hướng dẫn xuất hóa đơn GTGT"
                style={styles.textFull}
              />
            </View>
            <View style={styles.rightView}>
              <Icon name="chevron-right" size={16} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.viewInfor, styles.boxView]}>
          <AppText text="Tài khoản" textFont="bold" style={styles.textTitle} />
          <TouchableOpacity style={[styles.flexDirection, styles.fullViewBox]}>
            <View style={styles.leftView}>
              <Icon name="account-box" size={18} />
              <AppText text="Thông tin cá nhân" style={styles.textFull} />
            </View>
            <View style={styles.rightView}>
              <Icon name="chevron-right" size={16} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexDirection, styles.fullViewBox]}>
            <View style={styles.leftView}>
              <Icon name="menu" size={18} />
              <AppText text="Cài đặt" style={styles.textFull} />
            </View>
            <View style={styles.rightView}>
              <Icon name="chevron-right" size={16} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexDirection, styles.fullViewBox]}
            onPress={() => navigation.navigate('Login' as never)}>
            <View style={styles.leftView}>
              <Icon name="login" size={18} />
              <AppText
                text={isLogin ? 'Đăng xuất' : 'Đăng nhập'}
                style={styles.textFull}
              />
            </View>
            <View style={styles.rightView}>
              <Icon name="chevron-right" size={16} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContainerInfor;
