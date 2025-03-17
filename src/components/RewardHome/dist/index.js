"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var styles_1 = require("./styles");
var AppText_1 = require("../Custom/AppText");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_native_3 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_redux_1 = require("react-redux");
var RewardHome = function () {
    var navigation = native_1.useNavigation();
    var _a = react_redux_1.useSelector(function (state) { return state.genarateReducer; }), isLogin = _a.isLogin, numberPhone = _a.numberPhone;
    return (react_1["default"].createElement(react_native_2.View, { style: styles_1.styles.container },
        react_1["default"].createElement(react_native_3.ImageBackground, { source: {
                uri: 'https://img.pikbest.com/element_our/20220830/bg/f88d6762988bd.png!w700wp'
            }, resizeMode: "cover", style: styles_1.styles.bgContainer },
            react_1["default"].createElement(react_native_2.View, { style: styles_1.styles.traparentContainer },
                react_1["default"].createElement(AppText_1["default"], { style: styles_1.styles.titleTextReward, text: isLogin ? "Ch\u00E0o b\u1EA1n " + numberPhone : 'Đăng nhập' }),
                react_1["default"].createElement(AppText_1["default"], { style: styles_1.styles.textReward, text: "S\u1EED d\u1EE5ng app \u0111\u1EC3 t\u00EDch \u0111i\u1EC3m v\u00E0 \u0111\u1ED5i nh\u1EEFng \u01B0u \u0111\u00E3i ch\u1EC9 d\u00E0nh ri\u00EAng cho th\u00E0nh\r\n        vi\u00EAn b\u1EA1n nh\u00E9!" }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.touchLoginReward, onPress: function () {
                        !isLogin ? navigation.navigate('Login') : null;
                    } },
                    react_1["default"].createElement(AppText_1["default"], { text: !isLogin ? 'Đăng nhập' : 'Kiểm tra điểm', style: styles_1.styles.textTouchLogin })),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.touchSeenReward },
                    react_1["default"].createElement(AppText_1["default"], { text: "H-Coffee Reward" }),
                    react_1["default"].createElement(Ionicons_1["default"], { name: "chevron-forward-sharp", size: 25 }))))));
};
exports["default"] = RewardHome;
