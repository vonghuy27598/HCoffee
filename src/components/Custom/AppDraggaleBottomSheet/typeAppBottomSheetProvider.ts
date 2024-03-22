import {Animated, PanResponderInstance} from 'react-native';

export interface IDataBottomSheetProvider {
  showBottomSheet: boolean;
  setShowBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  animatedValue: Animated.Value;
  panResponder: PanResponderInstance;
  animatedHideOrShow: (status: 'hide' | 'show') => Promise<void>;
  springAnimation: (direction: 'up' | 'down') => void;
  bottomContentAnimation: {
    transform: {
      translateY: Animated.AnimatedInterpolation<string | number>;
    }[];
  };
  bottomFooterAnimation: {
    transform: {
      translateY: Animated.AnimatedInterpolation<string | number>;
    }[];
  };
  bottomBodyContentAnimation: {
    height: Animated.AnimatedInterpolation<string | number>;
  };
  mainShow: boolean;
  setMainShow: React.Dispatch<React.SetStateAction<boolean>>;
}
