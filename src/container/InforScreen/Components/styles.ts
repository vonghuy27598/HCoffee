import {Dimensions} from '@common/index';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../..//constants';

export const styles = StyleSheet.create({
  containerInfor: {
    width: Dimensions.width,
    height: Dimensions.height,
    paddingTop: 70,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  viewInfor: {
    paddingVertical: 20,
  },
  boxView: {
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfViewBox: {
    width: '48%',
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: COLORS.WHITE_COLOR,
    borderRadius: 10,
  },
  fullViewBox: {
    width: '100%',
    padding: 15,
    backgroundColor: COLORS.WHITE_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_e3e3e3_COLOR,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFull: {
    marginLeft: 10,
    fontSize: 15,
  },
  rightView: {},
});
