"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var AppText_1 = require("@components/Custom/AppText");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var styles_1 = require("./styles");
var constants_1 = require("../../constants");
var HeaderPromotion = function (showBottomSheetCart, setShowBottomSheetCart) {
    return (react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.headerContainer] },
        react_1["default"].createElement(AppText_1["default"], { text: "Nh\u1EADp m\u00E3 khuy\u1EBFn m\u00E3i", textFont: "bold", textSize: 18 }),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setShowBottomSheetCart(false); }, style: styles_1.styles.btnClose },
            react_1["default"].createElement(Ionicons_1["default"], { name: "close", size: 25, color: constants_1.COLORS.TEXT_BLACK_COLOR }))));
};
exports["default"] = HeaderPromotion;
