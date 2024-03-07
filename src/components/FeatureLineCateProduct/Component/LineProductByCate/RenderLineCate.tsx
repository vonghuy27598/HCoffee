import AppText from '@components/Custom/AppText';
import {ILineProductByCateType} from '@type/categoryType';
import React, {useMemo, useRef} from 'react';
import {FlatList, View} from 'react-native';
import RenderLineProduct from './RenderLineProduct';
import {styles} from './styles';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

interface IProps {
  index: number;
  item: ILineProductByCateType;
  currentScreen: React.MutableRefObject<string>;
}

const RenderLineCate = ({item, index, currentScreen}: IProps) => {
  const {setPosition} = useLineCateProduct();

  return useMemo(() => {
    return (
      <View
        key={`category-${index}`}
        style={styles.containerLineCate}
        onLayout={e => {
          const layout = e.nativeEvent.layout.height;
          setPosition(index, layout);
        }}>
        <AppText text={item.cateName} textFont="bold" textSize={18} />
        <FlatList
          data={item.listProduct}
          renderItem={({index, item}) => (
            <RenderLineProduct _index={index} _item={item} />
          )}
          keyExtractor={(_, index) => `listProduct-${index}`}
          numColumns={currentScreen.current === 'HomeTab' ? 2 : 1}
          columnWrapperStyle={
            currentScreen.current === 'HomeTab' && {
              justifyContent: 'space-between',
            }
          }
        />
      </View>
    );
  }, [currentScreen, item, index, setPosition]);
};

export default RenderLineCate;
