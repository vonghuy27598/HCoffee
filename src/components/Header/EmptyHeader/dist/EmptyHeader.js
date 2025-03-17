"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var native_1 = require("@react-navigation/native");
var AppText_1 = require("@components/Custom/AppText");
var EmptyHeader = function (_a) {
    var headerName = _a.headerName;
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.container, styles_1.styles.flexRowDicrection] },
        react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.headerLeft, styles_1.styles.flexRowDicrection] },
            react_1["default"].createElement(AppText_1["default"], { text: headerName, textFont: "bold", textSize: 20 }),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.space }))));
};
exports["default"] = EmptyHeader;
