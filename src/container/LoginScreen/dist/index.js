"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LoginProvider_1 = require("./Provider/LoginProvider");
var ContainerLogin_1 = require("./Components/ContainerLogin");
var LoginScreen = function () {
    return (react_1["default"].createElement(LoginProvider_1.LoginProvider, null,
        react_1["default"].createElement(ContainerLogin_1["default"], null)));
};
exports["default"] = LoginScreen;
