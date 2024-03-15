import React, {useMemo} from 'react';
import {View, FlatList} from 'react-native';
import RenderLineCate from './RenderLineCate';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

const LineProductByCate = () => {
  const {loadingProduct, errorProduct, dataProduct, currentScreen} =
    useLineCateProduct();

  if (errorProduct) console.log('GET LINE PRODUCT ERROR', errorProduct);

  return useMemo(() => {
    return (
      <View>
        {!loadingProduct && (
          <View
            style={{marginBottom: 60}}
            onLayout={e => {
              console.log('HUY III', e.nativeEvent.layout);
            }}>
            {/* <FlashList
              data={dataProduct?.getProductByCate}
              estimatedItemSize={200}
              scrollEnabled={false}
              renderItem={({index, item}) => (
                <RenderLineCate
                  index={index}
                  item={item}
                  currentScreen={currentScreen}
                />
              )}
              keyExtractor={(_, index) => `listLineProductCate-${index}`}
            /> */}
            <FlatList
              data={dataProduct?.getProductByCate}
              scrollEnabled={false}
              renderItem={({index, item}) => (
                <RenderLineCate
                  index={index}
                  item={item}
                  currentScreen={currentScreen}
                />
              )}
              keyExtractor={(_, index) => `listLineProductCate-${index}`}
            />
          </View>
        )}
      </View>
    );
  }, [loadingProduct, errorProduct, dataProduct]);
};

export default LineProductByCate;
