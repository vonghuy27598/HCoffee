"use strict";
exports.__esModule = true;
var AppText_1 = require("@components/Custom/AppText");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_fast_image_1 = require("react-native-fast-image");
var styles_1 = require("./styles");
var index_1 = require("@common/index");
var LineCateProductProvider_1 = require("@components/FeatureLineCateProduct/Provider/LineCateProductProvider");
var RenderCategory = function (_a) {
    var item = _a.item, index = _a.index;
    var _b = LineCateProductProvider_1.useLineCateProduct(), handleChooseCategory = _b.handleChooseCategory, currentScreen = _b.currentScreen;
    return react_1.useMemo(function () {
        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { key: index, style: styles_1.styles.itemCate, onPress: function () { return handleChooseCategory(index); } },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_fast_image_1["default"], { source: { uri: item.imageCate }, style: styles_1.styles.imageCate, resizeMode: "contain" })),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.lineText },
                react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatWrapLineSpace(item.cateName, 2), textColor: "black", textAlign: "center", textSize: 13 }))));
    }, [item, index, handleChooseCategory, currentScreen]);
};
exports["default"] = RenderCategory;
