import {View} from 'react-native';
import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

interface IAvatarProduct {
  path: string;
  styleImage?: FastImageProps['style'];
}

const AvatarProduct = ({path, styleImage = {}}: IAvatarProduct) => {
  return (
    <View>
      <FastImage style={styleImage} source={{uri: path}} resizeMode="contain" />
    </View>
  );
};

export default AvatarProduct;
