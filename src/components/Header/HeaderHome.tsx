import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {PRIMARY_COLOR} from '../../constants/colors';
import {fetchAPI} from '../../config/api/fetchAPI';

const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TextInput);

const HeaderHome = ({animateScroll, searchBoxAnim, searchInputAnim}: any) => {
  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    console.log('SN', await fetchAPI('ASDASD'));
  };
  return (
    <Animated.View
      style={[styles.container, styles.flexRowDicrection, animateScroll]}>
      <AnimatedStatusBar
        backgroundColor={animateScroll.backgroundColor}
        barStyle={'dark-content'}
      />
      <View style={[styles.headerLeft, styles.flexRowDicrection]}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20230524/original/pngtree-milk-tea-cute-icon-cartoon-png-image_9168753.png',
          }}
          resizeMode="contain"
          width={30}
          height={30}
          style={{marginRight: 5}}
        />
        <View style={styles.space}></View>
        <AnimatedTouchableOpacity
          style={[styles.iconTouch, {position: 'absolute', left: 45}]}>
          <Icon name="search" size={20} color={PRIMARY_COLOR} />
        </AnimatedTouchableOpacity>
        <Animated.View
          style={[styles.flexRowDicrection, styles.boxSearch, searchBoxAnim]}>
          <Icon
            name="search"
            size={20}
            style={{alignSelf: 'center', top: 0}}
            color={PRIMARY_COLOR}
          />
          <AnimatedTextInput
            placeholder="Tìm thức uống yêu thích"
            maxLength={50}
            numberOfLines={1}
            style={[searchInputAnim]}
          />
        </Animated.View>
      </View>
      <View style={[styles.headerRight, styles.flexRowDicrection]}>
        <TouchableOpacity style={[styles.iconTouch, {marginRight: 10}]}>
          <Icon name="ticket" size={20} color={PRIMARY_COLOR} />
        </TouchableOpacity>
        <View style={styles.space}></View>
        <TouchableOpacity style={styles.iconTouch}>
          <Icon name="notifications-sharp" size={20} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default HeaderHome;
