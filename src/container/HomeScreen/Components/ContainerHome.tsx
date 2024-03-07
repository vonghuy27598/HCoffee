import {View, ScrollView} from 'react-native';
import React from 'react';
import PaddingHeader from '@components/PaddingHeader';
import LinearGradient from 'react-native-linear-gradient';
import RewardHome from '@components/RewardHome';
import CategoryMenu from '@components/CategoryMenu';
import Banner from '@components/Banner';
import {styles} from './styles';
import {useHome} from '../Provider/HomeProvider';
import {
  BodyOptionBuy,
  FooterOptionBuy,
  HeaderOptionBuy,
} from '@components/OptionBuyProduct';
import AppDraggaleBottomSheet from '@components/Custom/AppDraggaleBottomSheet';
import FeatureLineCateProduct from '@components/FeatureLineCateProduct';

const ContainerHome = () => {
  const {
    showBottomSheet,
    setShowBottomSheet,
    animHeader,
    animHeaderBG,
    lastOffsetY,
    scrollDirection,
    scrollRefHome,
    setDistanceCategoryHome,
  } = useHome();
  console.log('RENDER CONTAINER HOME');
  return (
    <View>
      <ScrollView
        ref={scrollRefHome}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animHeaderBG.setValue(offsetY);
          animHeader.setValue(offsetY);
        }}
        onScrollEndDrag={e => {
          console.log('scrollDirection', scrollDirection.current);
          if (
            scrollDirection.current === 'down' &&
            e.nativeEvent.contentOffset.y < 50
          ) {
            scrollRefHome.current?.scrollTo({y: 50, animated: true});
          } else if (
            scrollDirection.current === 'up' &&
            e.nativeEvent.contentOffset.y < 50
          ) {
            scrollRefHome.current?.scrollTo({y: 0, animated: true});
          }
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={20}
        nestedScrollEnabled>
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
        <View
          style={styles.container}
          onLayout={e => {
            setDistanceCategoryHome(e.nativeEvent.layout.y);
          }}>
          <CategoryMenu />
          <Banner />
          {/* <BoxCategory />
          <View
            onLayout={e => {
              setDistaceLineProductCate(e.nativeEvent.layout.y);
            }}>
            <LineProductByCate />
          </View> */}
          <FeatureLineCateProduct />
        </View>
      </ScrollView>
      {/* <AppDraggaleBottomSheet
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}
        HeaderBottomSheetComponent={HeaderOptionBuy()}
        BodyBottomSheetComponent={BodyOptionBuy()}
        FooterBottoomSheetComponent={FooterOptionBuy()}
      /> */}
    </View>
  );
};

export default ContainerHome;
