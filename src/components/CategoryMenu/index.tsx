import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategoryMenu} from '../../redux/action/categoryMenuAction';
import {RootState} from '../../redux/store';
import RenderCategoryMenu from './RenderCategoryMenu';
import {styles} from './styles';

const CategoryMenu = () => {
  const dispatch = useDispatch<any>();
  const data = useSelector(
    (state: RootState) => state.getCategoryMenuReducer.data,
  );
  const isLoading = useSelector(
    (state: RootState) => state.getCategoryMenuReducer.isLoading,
  );
  useEffect(() => {
    dispatch(getCategoryMenu());
  }, []);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={RenderCategoryMenu}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.contentContainerStyle}
      />
    </View>
  );
};
export default CategoryMenu;
