"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var HeaderHome_1 = require("../../components/Header/HeaderHome/HeaderHome");
var HomeProvider_1 = require("./Provider/HomeProvider");
var ContainerHome_1 = require("./Components/ContainerHome");
var BoxLocation_1 = require("@components/BoxLocation");
var HomeScreen = function () {
    return (react_1["default"].createElement(HomeProvider_1.HomeProvider, null,
        react_1["default"].createElement(react_native_1.SafeAreaView, { style: { flex: 1 } },
            react_1["default"].createElement(HeaderHome_1["default"], null),
            react_1["default"].createElement(ContainerHome_1["default"], null),
            react_1["default"].createElement(BoxLocation_1["default"], null))));
};
exports["default"] = HomeScreen;
