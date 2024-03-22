import {View, ScrollView} from 'react-native';
import React from 'react';
import PaddingHeader from '@components/PaddingHeader';
import LinearGradient from 'react-native-linear-gradient';
import RewardHome from '@components/RewardHome';
import CategoryMenu from '@components/CategoryMenu';
import Banner from '@components/Banner';
import {styles} from './styles';
import {useHome} from '../Provider/HomeProvider';
import FeatureLineCateProduct from '@components/FeatureLineCateProduct';
import AppDraggaleBottomSheet from '@components/Custom/AppDraggaleBottomSheet';
import {BodyCart, FooterCart, HeaderCart} from '@components/FeatureCart';

const ContainerHome = () => {
  const {
    scrollRefHome,
    setDistanceCategoryHome,
    handleScroll,
    handleEndScroll,
    handleEndDragScroll,
    showBottomSheet,
    setShowBottomSheet,
  } = useHome();
  console.log('RENDER CONTAINER HOME');
  return (
    <View>
      <ScrollView
        ref={scrollRefHome}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          handleScroll(offsetY);
        }}
        onMomentumScrollEnd={e => {
          handleEndScroll();
        }}
        onScrollEndDrag={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          handleEndDragScroll(offsetY);
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
          <FeatureLineCateProduct />
        </View>
      </ScrollView>
      <AppDraggaleBottomSheet
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}
        maxHeightBottomSheet="100%"
        HeaderBottomSheetComponent={HeaderCart(
          showBottomSheet,
          setShowBottomSheet,
        )}
        BodyBottomSheetComponent={BodyCart(showBottomSheet, setShowBottomSheet)}
        FooterBottoomSheetComponent={FooterCart(
          showBottomSheet,
          setShowBottomSheet,
        )}
      />
    </View>
  );
};

export default ContainerHome;
