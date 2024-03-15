import {ICategoryMenu} from '@type/categoryMenuType';
import {ICategoryType} from '@type/categoryType';
import {Animated, ScrollView} from 'react-native';

export interface IDataHomeProvider {
  animHeader: Animated.Value;
  animHeaderBG: Animated.Value;
  scrollRefHome: React.RefObject<ScrollView>;
  scrollDirection: React.MutableRefObject<string>;
  lastOffsetY: React.MutableRefObject<number>;
  distanceCategoryHome: number;
  setDistanceCategoryHome: React.Dispatch<React.SetStateAction<number>>;
  dynamicHeaderAnimation: {
    backgroundColor: Animated.AnimatedInterpolation<string | number>;
    shadowColor: Animated.AnimatedInterpolation<string | number>;
  };
  searchBoxAnim: {
    width: Animated.AnimatedInterpolation<string | number>;
    opacity: Animated.AnimatedInterpolation<string | number>;
  };
  searchInputAnim: {
    width: Animated.AnimatedInterpolation<string | number>;
    opacity: Animated.AnimatedInterpolation<string | number>;
  };
  dispatch: any;
  dataMenu: ICategoryMenu[];
  isLoadingMenu: boolean;
  arrayImage: string[];
  isLoadingBanner: boolean;
  dataCategory: ICategoryType[];
  isLoadingCategory: boolean;
  handleScroll: (offsetY: number) => void;
  handleEndDragScroll: (offsetY: number) => void;
  handleEndScroll: () => void;
  boxLocationAnim: {
    width: Animated.AnimatedInterpolation<string | number>;
    height: Animated.AnimatedInterpolation<string | number>;
    left: Animated.AnimatedInterpolation<string | number>;
  };
  iconAnim: {
    transform: (
      | {
          translateY: Animated.AnimatedInterpolation<string | number>;
          translateX?: undefined;
        }
      | {
          translateX: Animated.AnimatedInterpolation<string | number>;
          translateY?: undefined;
        }
    )[];
    width: Animated.AnimatedInterpolation<string | number>;
    height: Animated.AnimatedInterpolation<string | number>;
  };
  textTitleLocationAnim: {
    transform: (
      | {
          translateY: Animated.AnimatedInterpolation<string | number>;
          translateX?: undefined;
        }
      | {
          translateX: Animated.AnimatedInterpolation<string | number>;
          translateY?: undefined;
        }
    )[];
    opacity: Animated.AnimatedInterpolation<string | number>;
  };
  textLocationAnim: {
    transform: (
      | {
          translateY: Animated.AnimatedInterpolation<string | number>;
          translateX?: undefined;
        }
      | {
          translateX: Animated.AnimatedInterpolation<string | number>;
          translateY?: undefined;
        }
    )[];
    width: Animated.AnimatedInterpolation<string | number>;
  };
}
