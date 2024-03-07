import {Dimensions} from '@common/index';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const WIDTH_FULL_SCREEN = Dimensions.width - 30;
const WIDTH_HALF_SCREEN = Dimensions.width / 2 - 30;

export const styles = StyleSheet.create({
  //#region styles VerticalBox
  containerProduct: {
    marginTop: 10,
  },
  containerProductHalfWidth: {
    width: WIDTH_HALF_SCREEN,
  },
  containerProductFullWidth: {
    width: WIDTH_FULL_SCREEN,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imageProduct: {
    borderRadius: 20,
  },
  imageProductFullWidth: {
    width: WIDTH_FULL_SCREEN / 2.5,
    height: WIDTH_FULL_SCREEN / 2.5,
  },
  imageProductHaflWidth: {
    width: WIDTH_HALF_SCREEN,
    height: WIDTH_HALF_SCREEN,
  },
  btnProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  horizontalBoxInfo: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  //#endregion

  //#region styles HorizontalBox
  //#endregion
});
