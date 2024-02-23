import React, {useEffect, useRef} from 'react';
import {
  ScrollView,
  Animated,
  SafeAreaView,
  Easing,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from './styles';
import HeaderHome from '../components/Header/HeaderHome';
import RewardHome from '../components/RewardHome';
import PaddingHeader from '../components/PaddingHeader';
import LinearGradient from 'react-native-linear-gradient';
const HomeScreen = () => {
  const animHeader = useRef(new Animated.Value(0)).current;
  const animHeaderBG = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);
  const scrollDirection = useRef('');
  const lastOffsetY = useRef(0);
  const dynamicHeaderAnimation = {
    backgroundColor: animHeaderBG.interpolate({
      inputRange: [0, 80],
      outputRange: ['#f1c9bd', '#fff'],
      extrapolate: 'clamp',
    }),
  };
  const searchBoxAnim = {
    width: animHeader.interpolate({
      inputRange: [0, 50],
      outputRange: [200, 0],
      extrapolate: 'clamp',
    }),
    opacity: animHeader.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const searchInputAnim = {
    width: animHeader.interpolate({
      inputRange: [0, 35],
      outputRange: [200, 0],
      extrapolate: 'clamp',
    }),
    opacity: animHeader.interpolate({
      inputRange: [0, 35],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  return (
    <SafeAreaView>
      <HeaderHome
        animateScroll={dynamicHeaderAnimation}
        searchBoxAnim={searchBoxAnim}
        searchInputAnim={searchInputAnim}
      />
      <ScrollView
        ref={scrollRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animHeaderBG.setValue(offsetY);
          animHeader.setValue(offsetY);
          // if (!changeScroll.current) animHeader.setValue(offsetY);
          // changeScroll.current = true;
        }}
        onScrollEndDrag={e => {
          console.log('scrollDirection', scrollDirection.current);
          if (
            scrollDirection.current === 'down' &&
            e.nativeEvent.contentOffset.y < 50
          ) {
            scrollRef.current?.scrollTo({y: 50, animated: true});
          } else if (
            scrollDirection.current === 'up' &&
            e.nativeEvent.contentOffset.y < 50
          ) {
            scrollRef.current?.scrollTo({y: 0, animated: true});
          }
          // if (scrollDirection.current === 'down') {
          //   console.log('down');

          //   Animated.timing(animHeader, {
          //     toValue: 50,
          //     easing: Easing.ease,
          //     useNativeDriver: false,
          //     duration: 100,
          //   }).start();
          // } else if (scrollDirection.current === 'up') {
          //   console.log('up');
          //   Animated.timing(animHeader, {
          //     toValue: 0,
          //     easing: Easing.ease,
          //     useNativeDriver: false,
          //     duration: 100,
          //   }).start();
          // }
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={20}>
        <PaddingHeader />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 2}}
          colors={[
            'rgb(241 201 189)',
            'rgb(253 241 237)',
            'rgb(253 241 237)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
          ]}
          style={styles.container}>
          <RewardHome />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
