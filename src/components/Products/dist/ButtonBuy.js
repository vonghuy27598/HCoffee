"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Feather_1 = require("react-native-vector-icons/Feather");
var constants_1 = require("../../constants");
var LineCateProductProvider_1 = require("@components/FeatureLineCateProduct/Provider/LineCateProductProvider");
var ButtonBuy = function (_a) {
    var product = _a.product;
    var _b = LineCateProductProvider_1.useLineCateProduct(), setShowBottomSheet = _b.setShowBottomSheet, selectProduct = _b.selectProduct;
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.btnBuy, onPress: function () {
            // setShowBottomSheet(true);
            selectProduct(product.iD_Cate, product.productId);
        } },
        react_1["default"].createElement(Feather_1["default"], { name: "plus", color: constants_1.COLORS.WHITE_COLOR, size: 20 })));
};
exports["default"] = ButtonBuy;
var styles = react_native_1.StyleSheet.create({
    btnBuy: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constants_1.COLORS.PRIMARY_COLOR,
        padding: 8,
        borderRadius: 50
    }
});
