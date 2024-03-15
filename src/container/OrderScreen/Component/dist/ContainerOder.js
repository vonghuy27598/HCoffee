"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var FeatureLineCateProduct_1 = require("@components/FeatureLineCateProduct");
var PaddingHeader_1 = require("@components/PaddingHeader");
var styles_1 = require("./styles");
var OrderProvider_1 = require("../Provider/OrderProvider");
var ContainerOder = function () {
    var _a = OrderProvider_1.useOrder(), scrollOrderRef = _a.scrollOrderRef, handleScroll = _a.handleScroll, handleSnap = _a.handleSnap;
    return (react_1["default"].createElement(react_native_1.Animated.ScrollView, { ref: scrollOrderRef, style: styles_1.styles.containerScroll, onScroll: handleScroll, 
        // onScrollEndDrag={e => {
        //   onScrollEndDragAnimation(e.nativeEvent.contentOffset.y);
        // }}
        onMomentumScrollEnd: handleSnap, onScrollBeginDrag: function (e) {
            // animHeader.setOffset(lastCurrentY.current);
            // animHeader.resetAnimation();
        } },
        react_1["default"].createElement(PaddingHeader_1["default"], null),
        react_1["default"].createElement(FeatureLineCateProduct_1["default"], null)));
};
exports["default"] = ContainerOder;
