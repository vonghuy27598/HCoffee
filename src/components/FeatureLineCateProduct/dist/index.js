"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LineCateProductProvider_1 = require("./Provider/LineCateProductProvider");
var BoxCategory_1 = require("./Component/BoxCategory");
var LineProductByCate_1 = require("./Component/LineProductByCate");
var ShowBottomSheet_1 = require("./Component/ShowBottomSheet");
var FeatureLineCateProduct = function () {
    return (react_1["default"].createElement(LineCateProductProvider_1.LineCateProductProvider, null,
        react_1["default"].createElement(BoxCategory_1["default"], null),
        react_1["default"].createElement(LineProductByCate_1["default"], null),
        react_1["default"].createElement(ShowBottomSheet_1["default"], null)));
};
exports["default"] = FeatureLineCateProduct;
