import React from 'react';
import {
  Animated,
  OpaqueColorValue,
  StatusBar,
  StatusBarStyle,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

interface IStatusBarProps {
  animated?: boolean | undefined;
  backgroundColor?:
    | string
    | OpaqueColorValue
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | undefined;
  barStyle?: StatusBarStyle | null | undefined;
  hidden?: boolean | undefined;
}
const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

const FocusAwareStatusBar = (props: IStatusBarProps) => {
  const isFocused = useIsFocused();

  return isFocused ? <AnimatedStatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;
