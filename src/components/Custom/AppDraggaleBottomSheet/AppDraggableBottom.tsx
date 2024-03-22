import React, {useEffect, useState} from 'react';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constants';
import {Portal} from '@gorhom/portal';
import {useAppBottomSheet} from './DraggableBottomSheetProvider';
import {IDraggableBottomProps} from '.';
import {Dimensions} from '@common/index';

const BOTTOM_SHEET_WIDTH = Dimensions.width;
const BOTTOM_SHEET_MAX_HEIGHT = Dimensions.height;
const BOTTOM_SHEET_DISTANCE_HEIGHT_70 = BOTTOM_SHEET_MAX_HEIGHT * 0.2; // distance bottom sheet to status bar
const BOTTOM_SHEET_DISTANCE_HEIGHT_100 = 10; // distance bottom sheet to status bar
const BOTTOM_HEADER_HEIGHT_70 = BOTTOM_SHEET_MAX_HEIGHT * 0.07;
const BOTTOM_HEADER_HEIGHT_100 = BOTTOM_SHEET_MAX_HEIGHT * 0.07;
const BOTTOM_BODY_HEIGHT_70 =
  BOTTOM_SHEET_MAX_HEIGHT -
  BOTTOM_HEADER_HEIGHT_70 -
  BOTTOM_SHEET_DISTANCE_HEIGHT_70;
const BOTTOM_BODY_HEIGHT_100 = BOTTOM_SHEET_MAX_HEIGHT;
const BOTTOM_FOOTER_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.09;

// const MAX_UPWAR_TRANSLATE_Y = 0 - BOTTOM_SHEET_DISTANCE_HEIGHT; // upward translate y max height screen
// const MAX_DOWNWAR_TRANSLATE_Y = BOTTOM_SHEET_MAX_HEIGHT;
// const DRAG_THRESHOLD = 150;
const AppDraggableBottom = ({
  HeaderBottomSheetComponent,
  BodyBottomSheetComponent,
  FooterBottoomSheetComponent,
  maxHeightBottomSheet,
}: IDraggableBottomProps) => {
  const {
    showBottomSheet,
    animatedHideOrShow,
    bottomContentAnimation,
    panResponder,
    bottomFooterAnimation,
    bottomBodyContentAnimation,
    mainShow,
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
    mainShow && (
      <Portal>
        <View style={[styles.container]}>
          <View
            style={styles.emptyArea}
            onStartShouldSetResponder={() => true}
            onResponderGrant={() => {
              console.log('CLSE');
              animatedHideOrShow('hide');
            }}></View>
          <Animated.View
            style={[
              maxHeightBottomSheet === '100%'
                ? styles.contentArea100
                : styles.contentArea70,
              bottomContentAnimation,
            ]}>
            <View
              style={[
                maxHeightBottomSheet === '100%'
                  ? styles.headerContent100
                  : styles.headerContent70,
              ]}
              {...panResponder.panHandlers}>
              <HeaderBottomSheet />
            </View>
            <Animated.View
              style={[
                maxHeightBottomSheet === '100%'
                  ? styles.bodyContent100
                  : styles.bodyContent70,
                bottomBodyContentAnimation,
              ]}>
              <ScrollView style={{flex: 1}}>
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
  contentArea70: {
    backgroundColor: COLORS.WHITE_COLOR,
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_SHEET_MAX_HEIGHT,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: 'absolute',
    top: BOTTOM_SHEET_DISTANCE_HEIGHT_70,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  contentArea100: {
    backgroundColor: COLORS.WHITE_COLOR,
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_SHEET_MAX_HEIGHT,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: 'absolute',
    top: BOTTOM_SHEET_DISTANCE_HEIGHT_100,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  headerContent70: {
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_HEADER_HEIGHT_70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: COLORS.LIGHT_GRAY_COLOR,
    borderBottomWidth: 0.5,
  },
  headerContent100: {
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_HEADER_HEIGHT_100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: COLORS.LIGHT_GRAY_COLOR,
    borderBottomWidth: 0.5,
  },
  bodyContent70: {
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_BODY_HEIGHT_70,
    backgroundColor: COLORS.GRAY_e3e3e3_COLOR,
    paddingBottom: BOTTOM_FOOTER_HEIGHT,
  },
  bodyContent100: {
    flex: 1,
    backgroundColor: COLORS.GRAY_e3e3e3_COLOR,
    paddingBottom: BOTTOM_FOOTER_HEIGHT,
  },
  footerArea: {
    width: BOTTOM_SHEET_WIDTH,
    height: BOTTOM_FOOTER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: COLORS.WHITE_COLOR,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  toggleClose: {},
});

export default AppDraggableBottom;
