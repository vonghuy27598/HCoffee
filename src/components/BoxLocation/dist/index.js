"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var AppText_1 = require("@components/Custom/AppText");
var constants_1 = require("../../constants");
var HomeProvider_1 = require("@container/HomeScreen/Provider/HomeProvider");
var OrderProvider_1 = require("@container/OrderScreen/Provider/OrderProvider");
var BoxLocation = function () {
    var _a = HomeProvider_1.useHome(), boxLocationAnim = _a.boxLocationAnim, iconAnim = _a.iconAnim, textLocationAnim = _a.textLocationAnim, textTitleLocationAnim = _a.textTitleLocationAnim;
    var _b = OrderProvider_1.useOrder(), boxLocationAnimOrder = _b.boxLocationAnimOrder, iconAnimOrder = _b.iconAnimOrder, textLocationAnimOrder = _b.textLocationAnimOrder, textTitleLocationAnimOrder = _b.textTitleLocationAnimOrder;
    return (react_1["default"].createElement(react_native_1.Animated.View, { style: [
            styles_1.styles.containerBox,
            styles_1.styles.flexDirectionRow,
            boxLocationAnim,
            boxLocationAnimOrder,
        ] },
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.areaLocation },
            react_1["default"].createElement(react_native_1.Animated.View, { style: [styles_1.styles.flexDirectionRow, styles_1.styles.titleLocation] },
                react_1["default"].createElement(react_native_1.Animated.Image, { source: constants_1.IMAGES.ICON_COFFEE, resizeMode: "stretch", style: [styles_1.styles.imgIconCoffee, iconAnim, iconAnimOrder] }),
                react_1["default"].createElement(AppText_1["default"], { text: "\u0110\u1ECBa ch\u1EC9 giao h\u00E0ng", animated: true, style: [textTitleLocationAnim, textTitleLocationAnimOrder] })),
            react_1["default"].createElement(AppText_1["default"], { text: "\u0110\u01B0\u1EDDng B\u00ECnh Tr\u1ECB \u0110\u00F4ng, Ph\u01B0\u1EDDng B\u00ECnh Tr\u1ECB \u0110\u00F4ng, Qu\u1EADn B\u00ECnh T\u00E2n", textFont: "bold", animated: true, style: [textLocationAnim, textLocationAnimOrder], numberOfLines: 1 })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirectionRow, styles_1.styles.btnGoCart] },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.boxQuantity },
                react_1["default"].createElement(AppText_1["default"], { text: "5", textColor: constants_1.COLORS.PRIMARY_COLOR, textSize: 13, textFont: "bold" })),
            react_1["default"].createElement(AppText_1["default"], { text: "255.000\u0111", textColor: constants_1.COLORS.WHITE_COLOR, textFont: "bold", style: styles_1.styles.totalPrice, textSize: 15 }))));
};
exports["default"] = BoxLocation;
