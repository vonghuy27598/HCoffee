import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  flexRowDicrection: {
    flexDirection: 'row',
  },
  container: {
    height: 68.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE_COLOR,
    // shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  headerLeft: {
    zIndex: 99,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconCate: {
    width: 20,
    height: 20,
  },
  btnCate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCate: {
    paddingLeft: 5,
    paddingRight: 10,
  },
  headerRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'space-around',
  },
  btnIcon: {
    paddingHorizontal: 10,
  },
});
