import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useOrder} from './OrderProvider';
import Product from '@components/Products';

const FeatureProduct = () => {
  const {loadingProducts, dataProducts} = useOrder();
  return (
    <View>
      <FlatList
        key={'fl99'}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataProducts}
        keyExtractor={(item, index) => `${item.productId}`}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 10}}>
              <Product product={item} key={`${item.productId}`} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default FeatureProduct;

const styles = StyleSheet.create({});
