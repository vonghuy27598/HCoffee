"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var FeatureLineCateProduct_1 = require("@components/FeatureLineCateProduct");
var PaddingHeader_1 = require("@components/PaddingHeader");
var styles_1 = require("./styles");
var OrderProvider_1 = require("../Provider/OrderProvider");
var AppDraggaleBottomSheet_1 = require("@components/Custom/AppDraggaleBottomSheet");
var FeatureCart_1 = require("@components/FeatureCart");
var ContainerOder = function () {
    var _a = OrderProvider_1.useOrder(), scrollOrderRef = _a.scrollOrderRef, handleScroll = _a.handleScroll, handleSnap = _a.handleSnap, showBottomSheetOrder = _a.showBottomSheetOrder, setShowBottomSheetOrder = _a.setShowBottomSheetOrder;
    return (react_1["default"].createElement(react_native_1.Animated.ScrollView, { ref: scrollOrderRef, style: styles_1.styles.containerScroll, onScroll: handleScroll, 
        // onScrollEndDrag={e => {
        //   onScrollEndDragAnimation(e.nativeEvent.contentOffset.y);
        // }}
        onMomentumScrollEnd: handleSnap, onScrollBeginDrag: function (e) {
            // animHeader.setOffset(lastCurrentY.current);
            // animHeader.resetAnimation();
        } },
        react_1["default"].createElement(PaddingHeader_1["default"], null),
        react_1["default"].createElement(FeatureLineCateProduct_1["default"], null),
        react_1["default"].createElement(AppDraggaleBottomSheet_1["default"], { showBottomSheet: showBottomSheetOrder, setShowBottomSheet: setShowBottomSheetOrder, maxHeightBottomSheet: "100%", HeaderBottomSheetComponent: FeatureCart_1.HeaderCart(showBottomSheetOrder, setShowBottomSheetOrder), BodyBottomSheetComponent: FeatureCart_1.BodyCart(showBottomSheetOrder, setShowBottomSheetOrder), FooterBottoomSheetComponent: FeatureCart_1.FooterCart(showBottomSheetOrder, setShowBottomSheetOrder) })));
};
exports["default"] = ContainerOder;
