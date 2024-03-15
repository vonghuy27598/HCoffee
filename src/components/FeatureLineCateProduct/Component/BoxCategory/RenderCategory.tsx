import AppText from '@components/Custom/AppText';
import {ICategoryType} from '@type/categoryType';
import React, {useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {Helper} from '@common/index';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

interface IProps {
  index: number;
  item: ICategoryType;
}

const RenderCategory = ({item, index}: IProps) => {
  const {handleChooseCategory, currentScreen} = useLineCateProduct();
  return useMemo(() => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.itemCate}
        onPress={() => handleChooseCategory(index)}>
        <View>
          <FastImage
            source={{uri: item.imageCate}}
            style={styles.imageCate}
            resizeMode="contain"
          />
        </View>
        <View style={styles.lineText}>
          <AppText
            text={Helper.formatWrapLineSpace(item.cateName, 2)}
            textColor="black"
            textAlign="center"
            textSize={13}
          />
        </View>
      </TouchableOpacity>
    );
  }, [item, index, handleChooseCategory, currentScreen]);
};
export default RenderCategory;
