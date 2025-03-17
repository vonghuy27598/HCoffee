"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var styles_1 = require("./styles");
var colors_1 = require("../../../constants/colors");
var HomeProvider_1 = require("@container/HomeScreen/Provider/HomeProvider");
var FocusAwareStatusBar_1 = require("@components/FocusAwareStatusBar");
var native_1 = require("@react-navigation/native");
var AnimatedTextInput = react_native_1.Animated.createAnimatedComponent(react_native_1.TextInput);
var AnimatedTouchableOpacity = react_native_1.Animated.createAnimatedComponent(react_native_1.TextInput);
var HeaderHome = function () {
    var _a = HomeProvider_1.useHome(), dynamicHeaderAnimation = _a.dynamicHeaderAnimation, searchBoxAnim = _a.searchBoxAnim, searchInputAnim = _a.searchInputAnim;
    var navigation = native_1.useNavigation();
    return react_1.useMemo(function () {
        return (react_1["default"].createElement(react_native_1.Animated.View, { style: [
                styles_1.styles.container,
                styles_1.styles.flexRowDicrection,
                dynamicHeaderAnimation,
            ] },
            react_1["default"].createElement(FocusAwareStatusBar_1["default"], { backgroundColor: dynamicHeaderAnimation.backgroundColor, barStyle: 'dark-content' }),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.headerLeft, styles_1.styles.flexRowDicrection] },
                react_1["default"].createElement(react_native_1.Image, { source: {
                        uri: 'https://png.pngtree.com/png-clipart/20230524/original/pngtree-milk-tea-cute-icon-cartoon-png-image_9168753.png'
                    }, resizeMode: "contain", width: 30, height: 30, style: { marginRight: 5 } }),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.space }),
                react_1["default"].createElement(AnimatedTouchableOpacity, { style: [styles_1.styles.iconTouch, { position: 'absolute', left: 45 }] },
                    react_1["default"].createElement(Ionicons_1["default"], { name: "search", size: 20, color: colors_1.PRIMARY_COLOR })),
                react_1["default"].createElement(react_native_1.Animated.View, { style: [styles_1.styles.flexRowDicrection, styles_1.styles.boxSearch, searchBoxAnim] },
                    react_1["default"].createElement(Ionicons_1["default"], { name: "search", size: 20, style: { alignSelf: 'center', top: 0 }, color: colors_1.PRIMARY_COLOR }),
                    react_1["default"].createElement(AnimatedTextInput, { placeholder: "T\u00ECm th\u1EE9c u\u1ED1ng y\u00EAu th\u00EDch", maxLength: 50, numberOfLines: 1, style: [searchInputAnim] }))),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.headerRight, styles_1.styles.flexRowDicrection] },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.iconTouch, { marginRight: 10 }] },
                    react_1["default"].createElement(Ionicons_1["default"], { name: "ticket", size: 20, color: colors_1.PRIMARY_COLOR })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.space }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.iconTouch, onPress: function () {
                        navigation.navigate('Notification');
                    } },
                    react_1["default"].createElement(Ionicons_1["default"], { name: "notifications-sharp", size: 20, color: colors_1.PRIMARY_COLOR })))));
    }, [dynamicHeaderAnimation, searchBoxAnim, searchInputAnim]);
};
exports["default"] = HeaderHome;
