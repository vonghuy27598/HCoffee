import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IProductType} from '@type/productType';
import AvatarProduct from './AvatarProduct';
import InfoProduct from './InfoProduct';
import ButtonBuy from './ButtonBuy';
import {styles} from './styles';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

interface IProps {
  product: IProductType;
}

const VerticalBox = ({product}: IProps) => {
  return (
    <View style={[styles.containerProductHalfWidth, styles.containerProduct]}>
      <TouchableOpacity>
        <AvatarProduct
          styleImage={[styles.imageProductHaflWidth, styles.imageProduct]}
          path={product.imageProduct}
        />
        <InfoProduct product={product} />
      </TouchableOpacity>
      <ButtonBuy product={product} />
    </View>
  );
};

export default VerticalBox;
