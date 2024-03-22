import {Animated, ScrollView} from 'react-native';

export interface IOrderProviderType {
  scrollOrderRef: React.RefObject<ScrollView>;
  headerCateName: string;
  setHeaderCateName: React.Dispatch<React.SetStateAction<string>>;
  scrollToChangeCateName: (offSetY: number) => void;
  lastCurrentY: React.MutableRefObject<number>;
  animHeader: Animated.Value;
  headerAnimation: {
    transform: {
      translateY: Animated.AnimatedInterpolation<string | number>;
    }[];
  };
  handleScroll: (...args: any[]) => void;
  handleSnap: ({nativeEvent}: any) => void;
  cateName: any;
  boxLocationAnimOrder: {
    width: Animated.AnimatedInterpolation<string | number>;
    height: Animated.AnimatedInterpolation<string | number>;
    left: Animated.AnimatedInterpolation<string | number>;
  };
  iconAnimOrder: {
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
  textTitleLocationAnimOrder: {
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
  textLocationAnimOrder: {
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
  showBottomSheetOrder: boolean;
  setShowBottomSheetOrder: React.Dispatch<React.SetStateAction<boolean>>;
}
