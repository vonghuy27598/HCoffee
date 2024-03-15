import React from 'react';
import {StyleSheet} from 'react-native';
import {OrderProvider} from './Provider/OrderProvider';
import ContainerOder from './Component/ContainerOder';
import HeaderOrder from '@components/Header/HeaderOrder/HeaderOrder';
import BoxLocation from '@components/BoxLocation';

const OrderScreen = () => {
  return (
    <OrderProvider>
      {/* <FeatureProduct /> */}
      <HeaderOrder />
      <ContainerOder />
      <BoxLocation />
    </OrderProvider>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
