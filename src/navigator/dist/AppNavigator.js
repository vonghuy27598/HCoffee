"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var MainNavigator_1 = require("./MainNavigator");
var AppProvider_1 = require("./AppProvider");
var AppNavigator = function () {
    return (react_1["default"].createElement(native_1.NavigationContainer, null,
        react_1["default"].createElement(AppProvider_1.AppProvider, null,
            react_1["default"].createElement(MainNavigator_1["default"], null))));
};
exports["default"] = AppNavigator;
