"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var constants_1 = require("../../../constants");
var portal_1 = require("@gorhom/portal");
var DraggableBottomSheetProvider_1 = require("./DraggableBottomSheetProvider");
var index_1 = require("@common/index");
var BOTTOM_SHEET_WIDTH = index_1.Dimensions.width;
var BOTTOM_SHEET_MAX_HEIGHT = index_1.Dimensions.height;
var BOTTOM_SHEET_DISTANCE_HEIGHT_70 = BOTTOM_SHEET_MAX_HEIGHT * 0.2; // distance bottom sheet to status bar
var BOTTOM_SHEET_DISTANCE_HEIGHT_100 = 10; // distance bottom sheet to status bar
var BOTTOM_HEADER_HEIGHT_70 = BOTTOM_SHEET_MAX_HEIGHT * 0.07;
var BOTTOM_HEADER_HEIGHT_100 = BOTTOM_SHEET_MAX_HEIGHT * 0.07;
var BOTTOM_BODY_HEIGHT_70 = BOTTOM_SHEET_MAX_HEIGHT -
    BOTTOM_HEADER_HEIGHT_70 -
    BOTTOM_SHEET_DISTANCE_HEIGHT_70;
var BOTTOM_BODY_HEIGHT_100 = BOTTOM_SHEET_MAX_HEIGHT;
var BOTTOM_FOOTER_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.09;
// const MAX_UPWAR_TRANSLATE_Y = 0 - BOTTOM_SHEET_DISTANCE_HEIGHT; // upward translate y max height screen
// const MAX_DOWNWAR_TRANSLATE_Y = BOTTOM_SHEET_MAX_HEIGHT;
// const DRAG_THRESHOLD = 150;
var AppDraggableBottom = function (_a) {
    var HeaderBottomSheetComponent = _a.HeaderBottomSheetComponent, BodyBottomSheetComponent = _a.BodyBottomSheetComponent, FooterBottoomSheetComponent = _a.FooterBottoomSheetComponent, maxHeightBottomSheet = _a.maxHeightBottomSheet;
    var _b = DraggableBottomSheetProvider_1.useAppBottomSheet(), showBottomSheet = _b.showBottomSheet, animatedHideOrShow = _b.animatedHideOrShow, bottomContentAnimation = _b.bottomContentAnimation, panResponder = _b.panResponder, bottomFooterAnimation = _b.bottomFooterAnimation, bottomBodyContentAnimation = _b.bottomBodyContentAnimation, mainShow = _b.mainShow;
    var HeaderBottomSheet = function () {
        return HeaderBottomSheetComponent;
    };
    var BodyBottomSheet = function () {
        return BodyBottomSheetComponent;
    };
    var FooterBottomSheet = function () {
        return FooterBottoomSheetComponent;
    };
    return (mainShow && (react_1["default"].createElement(portal_1.Portal, null,
        react_1["default"].createElement(react_native_1.View, { style: [styles.container] },
            react_1["default"].createElement(react_native_1.View, { style: styles.emptyArea, onStartShouldSetResponder: function () { return true; }, onResponderGrant: function () {
                    console.log('CLSE');
                    animatedHideOrShow('hide');
                } }),
            react_1["default"].createElement(react_native_1.Animated.View, { style: [
                    maxHeightBottomSheet === '100%'
                        ? styles.contentArea100
                        : styles.contentArea70,
                    bottomContentAnimation,
                ] },
                react_1["default"].createElement(react_native_1.View, __assign({ style: [
                        maxHeightBottomSheet === '100%'
                            ? styles.headerContent100
                            : styles.headerContent70,
                    ] }, panResponder.panHandlers),
                    react_1["default"].createElement(HeaderBottomSheet, null)),
                react_1["default"].createElement(react_native_1.Animated.View, { style: [
                        maxHeightBottomSheet === '100%'
                            ? styles.bodyContent100
                            : styles.bodyContent70,
                        bottomBodyContentAnimation,
                    ] },
                    react_1["default"].createElement(react_native_1.ScrollView, { style: { flex: 1 } },
                        react_1["default"].createElement(BodyBottomSheet, null)))),
            react_1["default"].createElement(react_native_1.Animated.View, { style: [styles.footerArea, bottomFooterAnimation] },
                react_1["default"].createElement(FooterBottomSheet, null))))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        width: BOTTOM_SHEET_WIDTH,
        height: BOTTOM_SHEET_MAX_HEIGHT,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
    },
    emptyArea: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: BOTTOM_SHEET_WIDTH,
        height: BOTTOM_SHEET_MAX_HEIGHT
    },
    contentArea70: {
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        width: BOTTOM_SHEET_WIDTH,
        height: BOTTOM_SHEET_MAX_HEIGHT,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        position: 'absolute',
        top: BOTTOM_SHEET_DISTANCE_HEIGHT_70,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999
    },
    contentArea100: {
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        width: BOTTOM_SHEET_WIDTH,
        height: BOTTOM_SHEET_MAX_HEIGHT,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        position: 'absolute',
        top: BOTTOM_SHEET_DISTANCE_HEIGHT_100,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999
    },
    headerContent70: {
        width: BOTTOM_SHEET_WIDTH,
        height: BOTTOM_HEADER_HEIGHT_70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: constants_1.COLORS.LIGHT_GRAY_COLOR,
        borderBottomWidth: 0.5
    },
    headerContent100: {
        width: BOTTOM_SHEET_WIDTH,
        height: BOTTOM_HEADER_HEIGHT_100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: constants_1.COLORS.LIGHT_GRAY_COLOR,
        borderBottomWidth: 0.5
    },
    bodyContent70: {
        width: BOTTOM_SHEET_WIDTH,
        height: BOTTOM_BODY_HEIGHT_70,
        backgroundColor: constants_1.COLORS.GRAY_e3e3e3_COLOR,
        paddingBottom: BOTTOM_FOOTER_HEIGHT
    },
    bodyContent100: {
        flex: 1,
        backgroundColor: constants_1.COLORS.GRAY_e3e3e3_COLOR,
        paddingBottom: BOTTOM_FOOTER_HEIGHT
    },
    footerArea: {
        width: BOTTOM_SHEET_WIDTH,
        height: BOTTOM_FOOTER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999
    },
    toggleClose: {}
});
exports["default"] = AppDraggableBottom;
