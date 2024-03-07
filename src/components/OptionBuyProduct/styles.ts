import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  containerSize: {
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: COLORS.WHITE_COLOR,
  },
  areaTopping: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY_COLOR,
    paddingVertical: 10,
  },
  boxRadioSize: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerTopping: {
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: COLORS.WHITE_COLOR,
  },
  containerFooter: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewQuantity: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  btnQuantỉty: {
    backgroundColor: COLORS.LIGHT_PRIMARY_COLOR,
    borderRadius: 50,
    padding: 10,
  },
  viewBtnBuy: {
    flex: 2,
    paddingHorizontal: 15,
  },
  btnBuy: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
