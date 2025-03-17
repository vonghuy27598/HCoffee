"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var styles_1 = require("./styles");
var colors_1 = require("../../../constants/colors");
var native_1 = require("@react-navigation/native");
var AppText_1 = require("@components/Custom/AppText");
var HeaderInFor = function () {
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.container, styles_1.styles.flexRowDicrection] },
        react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.headerLeft, styles_1.styles.flexRowDicrection] },
            react_1["default"].createElement(AppText_1["default"], { text: "Kh\u00E1c", textFont: "bold", textSize: 20 }),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.space })),
        react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.headerRight, styles_1.styles.flexRowDicrection] },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.iconTouch, { marginRight: 10 }] },
                react_1["default"].createElement(Ionicons_1["default"], { name: "ticket", size: 20, color: colors_1.PRIMARY_COLOR })),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.space }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.iconTouch, onPress: function () {
                    navigation.navigate('Notification');
                } },
                react_1["default"].createElement(Ionicons_1["default"], { name: "notifications-sharp", size: 20, color: colors_1.PRIMARY_COLOR })))));
};
exports["default"] = HeaderInFor;
