import {ScrollView} from 'react-native';
import React from 'react';
import FeatureLineCateProduct from '@components/FeatureLineCateProduct';
import PaddingHeader from '@components/PaddingHeader';
import {styles} from './styles';
import {useOrder} from '../Provider/OrderProvider';

const ContainerOder = () => {
  const {scrollOrderRef} = useOrder();
  return (
    <ScrollView ref={scrollOrderRef} style={styles.containerScroll}>
      <PaddingHeader />
      <FeatureLineCateProduct />
    </ScrollView>
  );
};

export default ContainerOder;
