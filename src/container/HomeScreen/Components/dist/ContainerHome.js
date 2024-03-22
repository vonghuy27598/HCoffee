"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var PaddingHeader_1 = require("@components/PaddingHeader");
var react_native_linear_gradient_1 = require("react-native-linear-gradient");
var RewardHome_1 = require("@components/RewardHome");
var CategoryMenu_1 = require("@components/CategoryMenu");
var Banner_1 = require("@components/Banner");
var styles_1 = require("./styles");
var HomeProvider_1 = require("../Provider/HomeProvider");
var FeatureLineCateProduct_1 = require("@components/FeatureLineCateProduct");
var AppDraggaleBottomSheet_1 = require("@components/Custom/AppDraggaleBottomSheet");
var FeatureCart_1 = require("@components/FeatureCart");
var ContainerHome = function () {
    var _a = HomeProvider_1.useHome(), scrollRefHome = _a.scrollRefHome, setDistanceCategoryHome = _a.setDistanceCategoryHome, handleScroll = _a.handleScroll, handleEndScroll = _a.handleEndScroll, handleEndDragScroll = _a.handleEndDragScroll, showBottomSheet = _a.showBottomSheet, setShowBottomSheet = _a.setShowBottomSheet;
    console.log('RENDER CONTAINER HOME');
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.ScrollView, { ref: scrollRefHome, onScroll: function (e) {
                var offsetY = e.nativeEvent.contentOffset.y;
                handleScroll(offsetY);
            }, onMomentumScrollEnd: function (e) {
                handleEndScroll();
            }, onScrollEndDrag: function (e) {
                var offsetY = e.nativeEvent.contentOffset.y;
                handleEndDragScroll(offsetY);
            }, showsVerticalScrollIndicator: false, scrollEventThrottle: 20, nestedScrollEnabled: true },
            react_1["default"].createElement(PaddingHeader_1["default"], null),
            react_1["default"].createElement(react_native_linear_gradient_1["default"], { start: { x: 0, y: 0 }, end: { x: 0, y: 2 }, colors: [
                    'rgb(241 201 189)',
                    'rgb(253 241 237)',
                    'rgb(253 241 237)',
                    'rgb(255, 255, 255)',
                    'rgb(255, 255, 255)',
                    'rgb(255, 255, 255)',
                ], style: styles_1.styles.container },
                react_1["default"].createElement(RewardHome_1["default"], null)),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.container, onLayout: function (e) {
                    setDistanceCategoryHome(e.nativeEvent.layout.y);
                } },
                react_1["default"].createElement(CategoryMenu_1["default"], null),
                react_1["default"].createElement(Banner_1["default"], null),
                react_1["default"].createElement(FeatureLineCateProduct_1["default"], null))),
        react_1["default"].createElement(AppDraggaleBottomSheet_1["default"], { showBottomSheet: showBottomSheet, setShowBottomSheet: setShowBottomSheet, maxHeightBottomSheet: "100%", HeaderBottomSheetComponent: FeatureCart_1.HeaderCart(showBottomSheet, setShowBottomSheet), BodyBottomSheetComponent: FeatureCart_1.BodyCart(showBottomSheet, setShowBottomSheet), FooterBottoomSheetComponent: FeatureCart_1.FooterCart(showBottomSheet, setShowBottomSheet) })));
};
exports["default"] = ContainerHome;
