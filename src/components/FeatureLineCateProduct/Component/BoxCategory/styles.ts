import {Dimensions} from '@common/index';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

const WIDTH_CATEGORY = Dimensions.width / 5;

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.WHITE_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
  },
  headCate: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.LIGHT_GRAY_COLOR,
  },
  boxHeart: {
    backgroundColor: COLORS.LIGHT_PRIMARY_COLOR,
    padding: 7,
    borderRadius: 10,
  },
  contentContainerList: {
    flexDirection: 'row',
    width: WIDTH_CATEGORY * 6, // 36 margin,
    flexWrap: 'wrap',
  },
  itemCate: {
    width: WIDTH_CATEGORY,
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageCate: {
    width: 40,
    height: 40,
  },
  lineText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  },
});
