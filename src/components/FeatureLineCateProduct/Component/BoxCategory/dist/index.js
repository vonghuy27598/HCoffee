"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var RenderCategory_1 = require("./RenderCategory");
var styles_1 = require("./styles");
var AppText_1 = require("@components/Custom/AppText");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var constants_1 = require("../../../../constants");
var LineCateProductProvider_1 = require("@components/FeatureLineCateProduct/Provider/LineCateProductProvider");
var BoxCategory = function () {
    var _a = LineCateProductProvider_1.useLineCateProduct(), dataCategory = _a.dataCategory, isLoadingCategory = _a.isLoadingCategory, currentScreen = _a.currentScreen, setDistaceLineProductCate = _a.setDistaceLineProductCate, setHeightBoxCate = _a.setHeightBoxCate;
    return react_1.useMemo(function () {
        return (!isLoadingCategory &&
            dataCategory && (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.container, onLayout: function (e) {
                setHeightBoxCate(e.nativeEvent.layout.height);
                setDistaceLineProductCate(e.nativeEvent.layout.y); // 30 margin
            } },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.headCate },
                react_1["default"].createElement(AppText_1["default"], { text: "H-COFFEE WELCOME", textFont: "bold", textSize: 18 }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.boxHeart },
                    react_1["default"].createElement(Ionicons_1["default"], { name: "heart-outline", size: 25, color: constants_1.COLORS.PRIMARY_COLOR }))),
            react_1["default"].createElement(react_native_1.FlatList, { onLayout: function (e) {
                    console.log('VIX', e.nativeEvent.layout.height);
                }, data: dataCategory, keyExtractor: function (_, index) { return "category_item" + index; }, renderItem: function (_a) {
                    var item = _a.item, index = _a.index;
                    return (react_1["default"].createElement(RenderCategory_1["default"], { index: index, item: item }));
                }, showsHorizontalScrollIndicator: false, horizontal: true, contentContainerStyle: styles_1.styles.contentContainerList }))));
    }, [dataCategory, isLoadingCategory, currentScreen]);
};
exports["default"] = BoxCategory;
