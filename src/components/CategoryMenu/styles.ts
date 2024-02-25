import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/';
import {Dimensions} from '../../common';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    borderWidth: 0.5,
    borderColor: COLORS.LIGHT_GRAY_COLOR,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  containerItem: {
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.width / 3 - 25,
  },
  boxImage: {
    marginBottom: 10,
  },
  imageMenu: {
    padding: 15,
  },
  boxTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  textTitle: {
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
