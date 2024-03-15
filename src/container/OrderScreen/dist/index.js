"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var OrderProvider_1 = require("./Provider/OrderProvider");
var ContainerOder_1 = require("./Component/ContainerOder");
var HeaderOrder_1 = require("@components/Header/HeaderOrder/HeaderOrder");
var BoxLocation_1 = require("@components/BoxLocation");
var OrderScreen = function () {
    return (react_1["default"].createElement(OrderProvider_1.OrderProvider, null,
        react_1["default"].createElement(HeaderOrder_1["default"], null),
        react_1["default"].createElement(ContainerOder_1["default"], null),
        react_1["default"].createElement(BoxLocation_1["default"], null)));
};
exports["default"] = OrderScreen;
var styles = react_native_1.StyleSheet.create({});
