"use strict";
exports.__esModule = true;
var AppText_1 = require("@components/Custom/AppText");
var react_1 = require("react");
var react_native_1 = require("react-native");
var HeaderOptionBuy = function (productName) {
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(AppText_1["default"], { text: productName, textFont: "bold" })));
};
exports["default"] = HeaderOptionBuy;
