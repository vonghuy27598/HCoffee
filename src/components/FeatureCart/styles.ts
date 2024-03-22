import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bodyContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 5,
  },
  viewBody: {
    backgroundColor: COLORS.WHITE_COLOR,
    padding: 15,
    marginVertical: 5,
  },
  viewTitle: {
    paddingBottom: 15,
  },
  viewLocation: {
    alignItems: 'center',
  },
  spacingTxtAddress: {
    paddingVertical: 6,
  },
  txtTitle: {
    fontSize: 19,
  },
  txtItem: {
    fontSize: 16,
  },
  boxInput: {
    borderWidth: 0.7,
    borderColor: COLORS.LIGHT_GRAY_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  infoUser: {
    flex: 0.8,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.LIGHT_GRAY_COLOR,
    borderStyle: 'dotted',
    paddingVertical: 15,
  },
  spacingInfoUser: {
    flex: 0.2,
  },
  spacingTxtInfo: {
    paddingVertical: 2,
  },
  btnPlus: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_PRIMARY_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  viewItem: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.GRAY_e3e3e3_COLOR,
  },
  leftItem: {
    justifyContent: 'flex-start',
    paddingRight: 15,
    flex: 3,
  },
  rightItem: {
    alignItems: 'flex-end',
    flex: 1,
  },
  aboveRow: {
    backgroundColor: COLORS.WHITE_COLOR,
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  btnHidden: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 75,
  },
  btnUpdate: {
    right: 75,
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  btnDelete: {
    right: 0,
    backgroundColor: COLORS.RED_COLOR,
  },
  footerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btnBuy: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.WHITE_COLOR,
    borderRadius: 15,
  },
});
