import {Animated, PanResponderInstance} from 'react-native';

export interface IDataBottomSheetProvider {
  showBottomSheet: boolean;
  setShowBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  BOTTOM_SHEET_WIDTH: number;
  BOTTOM_SHEET_MAX_HEIGHT: number;
  BOTTOM_HEADER_HEIGHT: number;
  BOTTOM_FOOTER_HEIGHT: number;
  BOTTOM_SHEET_DISTANCE_HEIGHT: number;
  MAX_UPWAR_TRANSLATE_Y: number;
  MAX_DOWNWAR_TRANSLATE_Y: number;
  DRAG_THRESHOLD: number;
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
}
