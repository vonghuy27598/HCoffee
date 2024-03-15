import React, {useMemo} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import RenderCategory from './RenderCategory';
import {styles} from './styles';
import AppText from '@components/Custom/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../../constants';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

const BoxCategory = () => {
  const {
    dataCategory,
    isLoadingCategory,
    currentScreen,
    setDistaceLineProductCate,
    setHeightBoxCate,
  } = useLineCateProduct();

  return useMemo(() => {
    return (
      !isLoadingCategory &&
      dataCategory && (
        <View
          style={styles.container}
          onLayout={e => {
            setHeightBoxCate(e.nativeEvent.layout.height);
            setDistaceLineProductCate(e.nativeEvent.layout.y); // 30 margin
          }}>
          <View style={styles.headCate}>
            <AppText text="H-COFFEE WELCOME" textFont="bold" textSize={18} />
            <TouchableOpacity style={styles.boxHeart}>
              <Icon
                name="heart-outline"
                size={25}
                color={COLORS.PRIMARY_COLOR}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            onLayout={e => {
              console.log('VIX', e.nativeEvent.layout.height);
            }}
            data={dataCategory}
            keyExtractor={(_, index) => `category_item${index}`}
            renderItem={({item, index}) => (
              <RenderCategory index={index} item={item} />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.contentContainerList}
          />
        </View>
      )
    );
  }, [dataCategory, isLoadingCategory, currentScreen]);
};
export default BoxCategory;
