import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {styles} from './styles';
import AppText from '../Custom/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
const RewardHome = () => {
  const navigation = useNavigation();
  const {isLogin, numberPhone} = useSelector(
    (state: RootState) => state.genarateReducer,
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://img.pikbest.com/element_our/20220830/bg/f88d6762988bd.png!w700wp',
        }}
        resizeMode="cover"
        style={styles.bgContainer}>
        <View style={styles.traparentContainer}>
          <AppText
            style={styles.titleTextReward}
            text={isLogin ? `Chào bạn ${numberPhone}` : 'Đăng nhập'}
          />
          <AppText
            style={styles.textReward}
            text="Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành riêng cho thành
        viên bạn nhé!"
          />
          <TouchableOpacity
            style={styles.touchLoginReward}
            onPress={() => {
              !isLogin ? navigation.navigate('Login' as never) : null;
            }}>
            <AppText
              text={!isLogin ? 'Đăng nhập' : 'Kiểm tra điểm'}
              style={styles.textTouchLogin}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchSeenReward}>
            <AppText text="H-Coffee Reward" />
            <Icon name="chevron-forward-sharp" size={25} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default RewardHome;
