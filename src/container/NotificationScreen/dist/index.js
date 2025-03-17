"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var index_1 = require("@common/index");
var NotificationScreen = function () {
    react_1.useEffect(function () {
        index_1.PermissionApp.requestPermissionNotification();
    }, []);
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Text, null, "NotificationScreen")));
};
exports["default"] = NotificationScreen;
