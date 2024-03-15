import React from 'react';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constants';
import {Portal} from '@gorhom/portal';
import {useAppBottomSheet} from './DraggableBottomSheetProvider';
import {IDraggableBottomProps} from '.';
import {Dimensions} from '@common/index';

const BOTTOM_SHEET_WIDTH = Dimensions.width;
const BOTTOM_SHEET_MAX_HEIGHT = Dimensions.height;
const BOTTOM_SHEET_DISTANCE_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.2; // distance bottom sheet to status bar
const BOTTOM_HEADER_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.07;
const BOTTOM_BODY_HEIGHT =
  BOTTOM_SHEET_MAX_HEIGHT - BOTTOM_HEADER_HEIGHT - BOTTOM_SHEET_DISTANCE_HEIGHT;
const BOTTOM_FOOTER_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.09;

// const MAX_UPWAR_TRANSLATE_Y = 0 - BOTTOM_SHEET_DISTANCE_HEIGHT; // upward translate y max height screen
// const MAX_DOWNWAR_TRANSLATE_Y = BOTTOM_SHEET_MAX_HEIGHT;
// const DRAG_THRESHOLD = 150;
const AppDraggableBottom = ({
  HeaderBottomSheetComponent,
  BodyBottomSheetComponent,
  FooterBottoomSheetComponent,
}: IDraggableBottomProps) => {
  const {
    showBottomSheet,
    animatedHideOrShow,
    bottomContentAnimation,
    panResponder,
    bottomFooterAnimation,
    bottomBodyContentAnimation,
  } = useAppBottomSheet();
  const HeaderBottomSheet = () => {
    return HeaderBottomSheetComponent;
  };

  const BodyBottomSheet = () => {
    return BodyBottomSheetComponent;
  };

  const FooterBottomSheet = () => {
    return FooterBottoomSheetComponent;
  };
  return (
    showBottomSheet && (
      <Portal>
        <View style={[styles.container]}>
          <View
            style={styles.emptyArea}
            onStartShouldSetResponder={() => true}
            onResponderGrant={() => {
              console.log('CLSE');
              animatedHideOrShow('hide');
            }}></View>
          <Animated.View style={[styles.contentArea, bottomContentAnimation]}>
            <View style={styles.headerContent} {...panResponder.panHandlers}>
              <HeaderBottomSheet />
            </View>
            <Animated.View
              style={[styles.bodyContent, bottomBodyContentAnimation]}>
              <ScrollView scrollEnabled style={{flex: 1}}>
                <BodyBottomSheet />
              </ScrollView>
            </Animated.View>
          </Animated.View>
          <Animated.View style={[styles.footerArea, bottomFooterAnimation]}>
            <FooterBottomSheet />
          </Animated.View>
        </View>
      </Portal>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_SHEET_MAX_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  emptyArea: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_SHEET_MAX_HEIGHT,
  },
  contentArea: {
    backgroundColor: COLORS.WHITE_COLOR,
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_SHEET_MAX_HEIGHT,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: 'absolute',
    top: BOTTOM_SHEET_DISTANCE_HEIGHT,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  headerContent: {
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: COLORS.LIGHT_GRAY_COLOR,
    borderBottomWidth: 0.5,
  },
  bodyContent: {
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_BODY_HEIGHT,
    backgroundColor: COLORS.GRAY_cbc9c9_COLOR,
    paddingBottom: BOTTOM_FOOTER_HEIGHT + 20,
  },
  footerArea: {
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_FOOTER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE_COLOR,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  toggleClose: {},
});

export default AppDraggableBottom;
