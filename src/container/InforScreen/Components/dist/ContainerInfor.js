"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var AppText_1 = require("@components/Custom/AppText");
var styles_1 = require("./styles");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var constants_1 = require("../../../constants");
var native_1 = require("@react-navigation/native");
var react_redux_1 = require("react-redux");
var ContainerInfor = function () {
    var navigation = native_1.useNavigation();
    var isLogin = react_redux_1.useSelector(function (state) { return state.genarateReducer; }).isLogin;
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.containerInfor },
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles_1.styles.scrollView },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewInfor },
                react_1["default"].createElement(AppText_1["default"], { text: "Ti\u1EC7n \u00EDch", textFont: "bold", style: styles_1.styles.textTitle }),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.flexDirection },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                            styles_1.styles.halfViewBox,
                            { backgroundColor: constants_1.COLORS.BLUE_5f86d7_COLOR },
                        ] },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "edit-note", size: 30, color: constants_1.COLORS.WHITE_COLOR }),
                        react_1["default"].createElement(AppText_1["default"], { text: "L\u00EDch s\u1EED \u0111\u01A1n h\u00E0ng", textColor: constants_1.COLORS.WHITE_COLOR, textFont: "bold" })),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                            styles_1.styles.halfViewBox,
                            { backgroundColor: constants_1.COLORS.PRIMARY_COLOR },
                        ] },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "file-present", size: 30, color: constants_1.COLORS.WHITE_COLOR }),
                        react_1["default"].createElement(AppText_1["default"], { text: "\u0110i\u1EC1u kho\u1EA3n", textColor: constants_1.COLORS.WHITE_COLOR, textFont: "bold" })))),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.viewInfor, styles_1.styles.boxView] },
                react_1["default"].createElement(AppText_1["default"], { text: "H\u1ED7 tr\u1EE3", textFont: "bold", style: styles_1.styles.textTitle }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.fullViewBox] },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.leftView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "star-border", size: 18 }),
                        react_1["default"].createElement(AppText_1["default"], { text: "\u0110\u00E1nh gi\u00E1 \u0111\u01A1n h\u00E0ng", style: styles_1.styles.textFull })),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.rightView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "chevron-right", size: 16 }))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.fullViewBox] },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.leftView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "chat-bubble-outline", size: 18 }),
                        react_1["default"].createElement(AppText_1["default"], { text: "Li\u00EAn h\u1EC7 g\u00F3p \u00FD", style: styles_1.styles.textFull })),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.rightView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "chevron-right", size: 16 }))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.fullViewBox] },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.leftView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "collections-bookmark", size: 18 }),
                        react_1["default"].createElement(AppText_1["default"], { text: "H\u01B0\u1EDBng d\u1EABn xu\u1EA5t h\u00F3a \u0111\u01A1n GTGT", style: styles_1.styles.textFull })),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.rightView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "chevron-right", size: 16 })))),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.viewInfor, styles_1.styles.boxView] },
                react_1["default"].createElement(AppText_1["default"], { text: "T\u00E0i kho\u1EA3n", textFont: "bold", style: styles_1.styles.textTitle }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.fullViewBox] },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.leftView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "account-box", size: 18 }),
                        react_1["default"].createElement(AppText_1["default"], { text: "Th\u00F4ng tin c\u00E1 nh\u00E2n", style: styles_1.styles.textFull })),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.rightView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "chevron-right", size: 16 }))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.fullViewBox] },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.leftView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "menu", size: 18 }),
                        react_1["default"].createElement(AppText_1["default"], { text: "C\u00E0i \u0111\u1EB7t", style: styles_1.styles.textFull })),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.rightView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "chevron-right", size: 16 }))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.fullViewBox], onPress: function () { return navigation.navigate('Login'); } },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.leftView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "login", size: 18 }),
                        react_1["default"].createElement(AppText_1["default"], { text: isLogin ? 'Đăng xuất' : 'Đăng nhập', style: styles_1.styles.textFull })),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.rightView },
                        react_1["default"].createElement(MaterialIcons_1["default"], { name: "chevron-right", size: 16 })))))));
};
exports["default"] = ContainerInfor;
