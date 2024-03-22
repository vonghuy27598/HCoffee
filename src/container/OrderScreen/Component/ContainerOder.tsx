import {Animated, ScrollView} from 'react-native';
import React from 'react';
import FeatureLineCateProduct from '@components/FeatureLineCateProduct';
import PaddingHeader from '@components/PaddingHeader';
import {styles} from './styles';
import {useOrder} from '../Provider/OrderProvider';
import AppDraggaleBottomSheet from '@components/Custom/AppDraggaleBottomSheet';
import {BodyCart, FooterCart, HeaderCart} from '@components/FeatureCart';

const ContainerOder = () => {
  const {
    scrollOrderRef,
    handleScroll,
    handleSnap,
    showBottomSheetOrder,
    setShowBottomSheetOrder,
  } = useOrder();
  return (
    <Animated.ScrollView
      ref={scrollOrderRef}
      style={styles.containerScroll}
      onScroll={handleScroll}
      // onScrollEndDrag={e => {
      //   onScrollEndDragAnimation(e.nativeEvent.contentOffset.y);
      // }}
      onMomentumScrollEnd={handleSnap}
      onScrollBeginDrag={e => {
        // animHeader.setOffset(lastCurrentY.current);
        // animHeader.resetAnimation();
      }}>
      <PaddingHeader />
      <FeatureLineCateProduct />
      <AppDraggaleBottomSheet
        showBottomSheet={showBottomSheetOrder}
        setShowBottomSheet={setShowBottomSheetOrder}
        maxHeightBottomSheet="100%"
        HeaderBottomSheetComponent={HeaderCart(
          showBottomSheetOrder,
          setShowBottomSheetOrder,
        )}
        BodyBottomSheetComponent={BodyCart(
          showBottomSheetOrder,
          setShowBottomSheetOrder,
        )}
        FooterBottoomSheetComponent={FooterCart(
          showBottomSheetOrder,
          setShowBottomSheetOrder,
        )}
      />
    </Animated.ScrollView>
  );
};

export default ContainerOder;
