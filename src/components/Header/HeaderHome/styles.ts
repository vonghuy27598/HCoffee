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
    backgroundColor: '#f1c9bd',
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
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'space-around',
  },
  space: {
    paddingHorizontal: 5,
  },
  iconTouch: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.WHITE_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: {width: 10, height: 20},
    borderRadius: 15,
  },
  justifyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxSearch: {
    backgroundColor: COLORS.WHITE_COLOR,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: {width: 10, height: 20},
    borderRadius: 15,
    paddingLeft: 9,
    paddingRight: 5,
  },
});
