import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FeatureProduct from './FeatureProduct';
import {OrderProvider} from './OrderProvider';

const OrderScreen = () => {
  return (
    <OrderProvider>
      <FeatureProduct />
    </OrderProvider>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
