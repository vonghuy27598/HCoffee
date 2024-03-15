"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var RenderLineCate_1 = require("./RenderLineCate");
var LineCateProductProvider_1 = require("@components/FeatureLineCateProduct/Provider/LineCateProductProvider");
var LineProductByCate = function () {
    var _a = LineCateProductProvider_1.useLineCateProduct(), loadingProduct = _a.loadingProduct, errorProduct = _a.errorProduct, dataProduct = _a.dataProduct, currentScreen = _a.currentScreen;
    if (errorProduct)
        console.log('GET LINE PRODUCT ERROR', errorProduct);
    return react_1.useMemo(function () {
        return (react_1["default"].createElement(react_native_1.View, null, !loadingProduct && (react_1["default"].createElement(react_native_1.View, { style: { marginBottom: 60 }, onLayout: function (e) {
                console.log('HUY III', e.nativeEvent.layout);
            } },
            react_1["default"].createElement(react_native_1.FlatList, { data: dataProduct === null || dataProduct === void 0 ? void 0 : dataProduct.getProductByCate, scrollEnabled: false, renderItem: function (_a) {
                    var index = _a.index, item = _a.item;
                    return (react_1["default"].createElement(RenderLineCate_1["default"], { index: index, item: item, currentScreen: currentScreen }));
                }, keyExtractor: function (_, index) { return "listLineProductCate-" + index; } })))));
    }, [loadingProduct, errorProduct, dataProduct]);
};
exports["default"] = LineProductByCate;
