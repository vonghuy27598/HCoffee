/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Animated, PanResponder} from 'react-native';
import React, {createContext, useContext, useEffect, useRef} from 'react';
import {IDataBottomSheetProvider} from './typeAppBottomSheetProvider';
import {Dimensions} from '@common/index';
import {IDraggableBottomProps} from '.';

const AppBottomSheetContext = createContext({});

const DraggableBottomSheetProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: IDraggableBottomProps;
}) => {
  const BOTTOM_SHEET_WIDTH = Dimensions.width;
  const BOTTOM_SHEET_MAX_HEIGHT = Dimensions.height;
  const BOTTOM_HEADER_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.07;
  const BOTTOM_FOOTER_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.09;
  const BOTTOM_SHEET_DISTANCE_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.2; // distance bottom sheet to status bar
  const MAX_UPWAR_TRANSLATE_Y = 0 - BOTTOM_SHEET_DISTANCE_HEIGHT; // upward translate y max height screen
  const MAX_DOWNWAR_TRANSLATE_Y = BOTTOM_SHEET_MAX_HEIGHT;
  const BOTTOM_BODY_HEIGHT =
    BOTTOM_SHEET_MAX_HEIGHT -
    BOTTOM_HEADER_HEIGHT -
    BOTTOM_SHEET_DISTANCE_HEIGHT;
  const DRAG_THRESHOLD = 150;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedBodyValue = useRef(new Animated.Value(0)).current;
  const directionDragging = useRef('');
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant() {
        animatedValue.setOffset(lastGestureDy.current);
        animatedBodyValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove(e, gestureState) {
        animatedValue.setValue(gestureState.dy);
        animatedBodyValue.setValue(gestureState.dy);
      },
      onPanResponderRelease(e, gestureState) {
        animatedValue.flattenOffset();
        animatedBodyValue.flattenOffset();
        lastGestureDy.current += gestureState.dy;
        gestureState.dy > 0
          ? (directionDragging.current = 'down')
          : (directionDragging.current = 'up');

        if (gestureState.dy > 0) {
          //dragging down
          if (gestureState.dy > DRAG_THRESHOLD) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
        // dragging up
        else springAnimation('up');
      },
    }),
  ).current;
  useEffect(() => {
    if (value.showBottomSheet) {
      animatedHideOrShow('show');
    } else {
      animatedHideOrShow('hide');
    }
  }, [value.showBottomSheet, lastGestureDy.current]);
  const animatedHideOrShow = async (status: 'hide' | 'show') => {
    Animated.timing(animatedValue, {
      toValue: status === 'hide' ? MAX_DOWNWAR_TRANSLATE_Y : 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      if (status === 'hide') value.setShowBottomSheet!(false);
    });
  };
  const springAnimation = (direction: 'up' | 'down') => {
    console.log('springAnimation', direction, animatedBodyValue);

    lastGestureDy.current = direction === 'down' ? MAX_DOWNWAR_TRANSLATE_Y : 0;
    Animated.timing(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start(() => {
      if (lastGestureDy.current === MAX_DOWNWAR_TRANSLATE_Y) {
        value.setShowBottomSheet!(false);
        lastGestureDy.current = 0;
      }
      animatedBodyValue.setValue(0);
    });
  };
  const bottomContentAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWAR_TRANSLATE_Y, MAX_DOWNWAR_TRANSLATE_Y],
          outputRange: [MAX_UPWAR_TRANSLATE_Y, MAX_DOWNWAR_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const bottomBodyContentAnimation = {
    height: animatedBodyValue.interpolate({
      inputRange: [MAX_UPWAR_TRANSLATE_Y, 0],
      outputRange: [MAX_DOWNWAR_TRANSLATE_Y, BOTTOM_BODY_HEIGHT],
      extrapolate: 'clamp',
    }),
    // transform: [
    //   // {
    //   //   // translateY: animatedValue.interpolate({
    //   //   //   inputRange: [MAX_UPWAR_TRANSLATE_Y, MAX_DOWNWAR_TRANSLATE_Y],
    //   //   //   outputRange: [BOTTOM_HEADER_HEIGHT, MAX_DOWNWAR_TRANSLATE_Y],
    //   //   //   extrapolate: 'clamp',
    //   //   // }),
    //   // },
    //   // {
    //   //   scaleY: animatedValue.interpolate({
    //   //     inputRange: [0, 1],
    //   //     outputRange: [1, 12],
    //   //     extrapolate: 'clamp',
    //   //   }),
    //   // },
    // ],
  };
  const bottomFooterAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, MAX_DOWNWAR_TRANSLATE_Y - DRAG_THRESHOLD],
          outputRange: [0, BOTTOM_FOOTER_HEIGHT + 100],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const dataProvider = {
    showBottomSheet: value.showBottomSheet,
    animatedHideOrShow,
    animatedValue,
    BOTTOM_FOOTER_HEIGHT,
    BOTTOM_HEADER_HEIGHT,
    BOTTOM_SHEET_DISTANCE_HEIGHT,
    BOTTOM_SHEET_MAX_HEIGHT,
    BOTTOM_SHEET_WIDTH,
    bottomContentAnimation,
    bottomFooterAnimation,
    bottomBodyContentAnimation,
    DRAG_THRESHOLD,
    MAX_DOWNWAR_TRANSLATE_Y,
    MAX_UPWAR_TRANSLATE_Y,
    panResponder,
    springAnimation,
  } as IDataBottomSheetProvider;
  return (
    <AppBottomSheetContext.Provider value={dataProvider}>
      {children}
    </AppBottomSheetContext.Provider>
  );
};

const useAppBottomSheet = () => {
  const context = useContext(AppBottomSheetContext);
  if (!context) {
    throw new Error('AppBottomSheet context error');
  }

  return context as IDataBottomSheetProvider;
};

export {DraggableBottomSheetProvider, useAppBottomSheet};
