import {Animated, ScrollView} from 'react-native';
import React from 'react';
import FeatureLineCateProduct from '@components/FeatureLineCateProduct';
import PaddingHeader from '@components/PaddingHeader';
import {styles} from './styles';
import {useOrder} from '../Provider/OrderProvider';

const ContainerOder = () => {
  const {scrollOrderRef, handleScroll, handleSnap} = useOrder();
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
    </Animated.ScrollView>
  );
};

export default ContainerOder;
