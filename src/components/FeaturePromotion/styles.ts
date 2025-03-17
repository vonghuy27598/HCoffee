import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import {Dimensions} from '@common/index';

export const styles = StyleSheet.create({
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    height: '100%',
    borderBottomWidth: 1,
    borderColor: COLORS.GRAY_e3e3e3_COLOR,
  },
  btnClose: {
    position: 'absolute',
    right: 10,
  },
  bodyContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 60,
  },
  boxSearch: {
    width: Dimensions.width * 0.8,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY_e3e3e3_COLOR,
    shadowColor: COLORS.BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
    backgroundColor: COLORS.WHITE_COLOR,
  },
  searchIcon: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    width: Dimensions.width * 0.5,
    paddingHorizontal: 5,
  },
  searchBtn: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    height: 60,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  contentContainer: {
    marginVertical: 30,
  },
  boxTicket: {
    width: Dimensions.width - 30,
    height: Dimensions.width / 3 + 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE_COLOR,
    borderRadius: 10,
    marginVertical: 5,
  },
  viewImageTicket: {
    flex: 1,
    height: '100%',
  },
  imageTicket: {
    width: '100%',
    height: '100%',
  },
  imagePromo: {
    width: '100%',
    height: '100%',
  },
  lineBreak: {
    position: 'absolute',
    top: 0,
    left: Dimensions.width / 3,
    bottom: 0,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.GRAY_efefef_COLOR,
    borderStyle: 'dotted',
    alignItems: 'center',
  },
  dotBreakTop: {
    position: 'absolute',
    top: 0,

    width: 10,
    height: 5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: COLORS.GRAY_efefef_COLOR,
  },
  dotBreakBottom: {
    position: 'absolute',
    bottom: 0,
    width: 10,
    height: 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: COLORS.GRAY_efefef_COLOR,
  },
  contentTicket: {
    flex: 2,
    height: '100%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingLeft: 20,
  },
});
