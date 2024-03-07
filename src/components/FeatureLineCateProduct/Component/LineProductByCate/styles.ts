import {Dimensions} from '@common/index';
import {StyleSheet} from 'react-native';

const WIDTH_FULL_SCREEN = Dimensions.width - 30;
const WIDTH_HALF_SCREEN = Dimensions.width / 2 - 30;

export const styles = StyleSheet.create({
  container: {},
  containerLineCate: {
    marginVertical: 15,
  },
  containerProductCate: {
    marginTop: 10,
  },
  containerProductCateFullWidth: {
    width: WIDTH_FULL_SCREEN,
  },
  containerProductCateHalfWidth: {
    width: WIDTH_HALF_SCREEN,
  },
  imageProduct: {
    borderRadius: 10,
  },
  imageProductFullWidth: {
    width: WIDTH_FULL_SCREEN,
    height: WIDTH_FULL_SCREEN / 2,
  },
  imageProductHaflWidth: {
    width: WIDTH_HALF_SCREEN,
    height: WIDTH_HALF_SCREEN,
  },
});
