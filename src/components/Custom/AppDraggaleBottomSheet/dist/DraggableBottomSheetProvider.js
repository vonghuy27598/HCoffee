"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useAppBottomSheet = exports.DraggableBottomSheetProvider = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var react_native_1 = require("react-native");
var react_1 = require("react");
var index_1 = require("@common/index");
var AppBottomSheetContext = react_1.createContext({});
var DraggableBottomSheetProvider = function (_a) {
    var children = _a.children, value = _a.value;
    var BOTTOM_SHEET_WIDTH = index_1.Dimensions.width;
    var BOTTOM_SHEET_MAX_HEIGHT = index_1.Dimensions.height;
    var BOTTOM_HEADER_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.07;
    var BOTTOM_FOOTER_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.09;
    var BOTTOM_SHEET_DISTANCE_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT * 0.2; // distance bottom sheet to status bar
    var MAX_UPWAR_TRANSLATE_Y = 0 - BOTTOM_SHEET_DISTANCE_HEIGHT; // upward translate y max height screen
    var MAX_DOWNWAR_TRANSLATE_Y = BOTTOM_SHEET_MAX_HEIGHT;
    var BOTTOM_BODY_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT -
        BOTTOM_HEADER_HEIGHT -
        BOTTOM_SHEET_DISTANCE_HEIGHT;
    var DRAG_THRESHOLD = 150;
    var animatedValue = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var animatedBodyValue = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var directionDragging = react_1.useRef('');
    var lastGestureDy = react_1.useRef(0);
    var panResponder = react_1.useRef(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function () { return true; },
        onPanResponderGrant: function () {
            animatedValue.setOffset(lastGestureDy.current);
            animatedBodyValue.setOffset(lastGestureDy.current);
        },
        onPanResponderMove: function (e, gestureState) {
            animatedValue.setValue(gestureState.dy);
            animatedBodyValue.setValue(gestureState.dy);
        },
        onPanResponderRelease: function (e, gestureState) {
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
                }
                else {
                    springAnimation('up');
                }
            }
            // dragging up
            else
                springAnimation('up');
        }
    })).current;
    react_1.useEffect(function () {
        if (value.showBottomSheet) {
            animatedHideOrShow('show');
        }
        else {
            animatedHideOrShow('hide');
        }
    }, [value.showBottomSheet, lastGestureDy.current]);
    var animatedHideOrShow = function (status) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            react_native_1.Animated.timing(animatedValue, {
                toValue: status === 'hide' ? MAX_DOWNWAR_TRANSLATE_Y : 0,
                duration: 100,
                useNativeDriver: true
            }).start(function () {
                if (status === 'hide')
                    value.setShowBottomSheet(false);
            });
            return [2 /*return*/];
        });
    }); };
    var springAnimation = function (direction) {
        console.log('springAnimation', direction, animatedBodyValue);
        lastGestureDy.current = direction === 'down' ? MAX_DOWNWAR_TRANSLATE_Y : 0;
        react_native_1.Animated.timing(animatedValue, {
            toValue: lastGestureDy.current,
            useNativeDriver: true
        }).start(function () {
            if (lastGestureDy.current === MAX_DOWNWAR_TRANSLATE_Y) {
                value.setShowBottomSheet(false);
                lastGestureDy.current = 0;
            }
            animatedBodyValue.setValue(0);
        });
    };
    var bottomContentAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [MAX_UPWAR_TRANSLATE_Y, MAX_DOWNWAR_TRANSLATE_Y],
                    outputRange: [MAX_UPWAR_TRANSLATE_Y, MAX_DOWNWAR_TRANSLATE_Y],
                    extrapolate: 'clamp'
                })
            },
        ]
    };
    var bottomBodyContentAnimation = {
        height: animatedBodyValue.interpolate({
            inputRange: [MAX_UPWAR_TRANSLATE_Y, 0],
            outputRange: [MAX_DOWNWAR_TRANSLATE_Y, BOTTOM_BODY_HEIGHT],
            extrapolate: 'clamp'
        })
    };
    var bottomFooterAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, MAX_DOWNWAR_TRANSLATE_Y - DRAG_THRESHOLD],
                    outputRange: [0, BOTTOM_FOOTER_HEIGHT + 100],
                    extrapolate: 'clamp'
                })
            },
        ]
    };
    var dataProvider = {
        showBottomSheet: value.showBottomSheet,
        animatedHideOrShow: animatedHideOrShow,
        animatedValue: animatedValue,
        BOTTOM_FOOTER_HEIGHT: BOTTOM_FOOTER_HEIGHT,
        BOTTOM_HEADER_HEIGHT: BOTTOM_HEADER_HEIGHT,
        BOTTOM_SHEET_DISTANCE_HEIGHT: BOTTOM_SHEET_DISTANCE_HEIGHT,
        BOTTOM_SHEET_MAX_HEIGHT: BOTTOM_SHEET_MAX_HEIGHT,
        BOTTOM_SHEET_WIDTH: BOTTOM_SHEET_WIDTH,
        bottomContentAnimation: bottomContentAnimation,
        bottomFooterAnimation: bottomFooterAnimation,
        bottomBodyContentAnimation: bottomBodyContentAnimation,
        DRAG_THRESHOLD: DRAG_THRESHOLD,
        MAX_DOWNWAR_TRANSLATE_Y: MAX_DOWNWAR_TRANSLATE_Y,
        MAX_UPWAR_TRANSLATE_Y: MAX_UPWAR_TRANSLATE_Y,
        panResponder: panResponder,
        springAnimation: springAnimation
    };
    return (react_1["default"].createElement(AppBottomSheetContext.Provider, { value: dataProvider }, children));
};
exports.DraggableBottomSheetProvider = DraggableBottomSheetProvider;
var useAppBottomSheet = function () {
    var context = react_1.useContext(AppBottomSheetContext);
    if (!context) {
        throw new Error('AppBottomSheet context error');
    }
    return context;
};
exports.useAppBottomSheet = useAppBottomSheet;
