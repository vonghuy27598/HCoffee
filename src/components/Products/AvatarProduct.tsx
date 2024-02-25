import {
  StyleSheet,
  Text,
  View,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

interface IAvatarProduct {
  path: string;
  styleImage?: FastImageProps['style'];
}

const AvatarProduct = ({path, styleImage = {}}: IAvatarProduct) => {
  return (
    <View>
      <TouchableOpacity>
        <FastImage style={{...(styleImage as any)}} source={{uri: path}} />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarProduct;
