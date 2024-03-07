import React, {useMemo} from 'react';
import {View, FlatList} from 'react-native';
import RenderCategoryMenu from './RenderCategoryMenu';
import {styles} from './styles';
import {useHome} from '@container/HomeScreen/Provider/HomeProvider';

const CategoryMenu = () => {
  const {dataMenu, isLoadingMenu} = useHome();
  return useMemo(() => {
    return (
      <View>
        <FlatList
          data={dataMenu}
          renderItem={RenderCategoryMenu}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentContainerStyle}
        />
      </View>
    );
  }, [dataMenu, isLoadingMenu]);
};
export default CategoryMenu;
