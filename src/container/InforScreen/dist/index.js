"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var HeaderInFor_1 = require("@components/Header/HeaderInfor/HeaderInFor");
var ContainerInfor_1 = require("./Components/ContainerInfor");
var InforScreen = function () {
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(HeaderInFor_1["default"], null),
        react_1["default"].createElement(ContainerInfor_1["default"], null)));
};
exports["default"] = InforScreen;
