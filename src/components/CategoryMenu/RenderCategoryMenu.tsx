import React from 'react';
import {View, ListRenderItem, Image, TouchableOpacity} from 'react-native';
import {ICategoryMenu} from '../../type/categoryMenuType';
import {styles} from './styles';
import AppText from '../Custom/AppText';

const RenderCategoryMenu: ListRenderItem<ICategoryMenu> = data => {
  return (
    <TouchableOpacity key={data.index} style={styles.containerItem}>
      <View style={styles.boxImage}>
        <Image
          source={{uri: data.item.imageCate}}
          resizeMode="contain"
          width={50}
          height={50}
          style={styles.imageMenu}
        />
      </View>
      <View style={styles.boxTitle}>
        <AppText
          text={data.item.cateMenuName}
          textFont="bold"
          numberOfLines={2}
          style={styles.textTitle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RenderCategoryMenu;
