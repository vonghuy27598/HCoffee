"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var EmptyHeader_1 = require("@components/Header/EmptyHeader/EmptyHeader");
var ContainerHistory_1 = require("./Components/ContainerHistory");
var OrderHistoryScreen = function () {
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(EmptyHeader_1["default"], { headerName: 'Lịch sử đơn hàng' }),
        react_1["default"].createElement(ContainerHistory_1["default"], null)));
};
exports["default"] = OrderHistoryScreen;
