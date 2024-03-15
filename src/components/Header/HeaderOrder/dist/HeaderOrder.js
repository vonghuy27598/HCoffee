"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var constants_1 = require("../../../constants");
var FocusAwareStatusBar_1 = require("@components/FocusAwareStatusBar");
var AppText_1 = require("@components/Custom/AppText");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var OrderProvider_1 = require("@container/OrderScreen/Provider/OrderProvider");
var HeaderOrder = function () {
    var _a = OrderProvider_1.useOrder(), headerAnimation = _a.headerAnimation, headerCateName = _a.headerCateName;
    return react_1.useMemo(function () {
        return (react_1["default"].createElement(react_native_1.Animated.View, { style: [styles_1.styles.container, styles_1.styles.flexRowDicrection, headerAnimation] },
            react_1["default"].createElement(FocusAwareStatusBar_1["default"], { backgroundColor: constants_1.COLORS.WHITE_COLOR, barStyle: 'dark-content' }),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.headerLeft, styles_1.styles.flexRowDicrection] },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnCate },
                    react_1["default"].createElement(react_native_1.Image, { source: constants_1.IMAGES.ICON_CATE_HEADER, resizeMode: "contain", style: styles_1.styles.iconCate }),
                    react_1["default"].createElement(AppText_1["default"], { text: headerCateName, style: styles_1.styles.txtCate, textFont: "bold", textSize: 16 }),
                    react_1["default"].createElement(MaterialIcons_1["default"], { name: "keyboard-arrow-down", size: 20 }))),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.headerRight, styles_1.styles.flexRowDicrection] },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnIcon },
                    react_1["default"].createElement(MaterialIcons_1["default"], { name: "search", size: 30, color: constants_1.COLORS.PRIMARY_COLOR })),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnIcon },
                    react_1["default"].createElement(MaterialIcons_1["default"], { name: "favorite-border", size: 30, color: constants_1.COLORS.PRIMARY_COLOR })))));
    }, [headerCateName]);
};
exports["default"] = HeaderOrder;
