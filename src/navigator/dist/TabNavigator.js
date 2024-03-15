"use strict";
exports.__esModule = true;
var HomeScreen_1 = require("@container/HomeScreen");
var OrderScreen_1 = require("@container/OrderScreen");
var PromotionScreen_1 = require("@container/PromotionScreen");
var StoreScreen_1 = require("@container/StoreScreen");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var react_1 = require("react");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var constants_1 = require("../constants");
var Tab = bottom_tabs_1.createBottomTabNavigator();
var TabNavigator = function () {
    return (react_1["default"].createElement(Tab.Navigator, { initialRouteName: "HomeTab", screenOptions: {
            tabBarActiveTintColor: constants_1.COLORS.PRIMARY_COLOR
        } },
        react_1["default"].createElement(Tab.Screen, { name: "HomeTab", component: HomeScreen_1["default"], options: {
                headerShown: false,
                tabBarLabel: 'Trang chủ',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialIcons_1["default"], { name: "home-filled", size: size, color: color }));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "OrderTab", component: OrderScreen_1["default"], options: {
                headerShown: false,
                tabBarLabel: 'Đặt hàng',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialIcons_1["default"], { name: "coffee", size: size, color: color }));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "StoreTab", component: StoreScreen_1["default"], options: {
                headerShown: false,
                tabBarLabel: 'Cửa hàng',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialIcons_1["default"], { name: "store", size: size, color: color }));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "PromotionTab", component: PromotionScreen_1["default"], options: {
                headerShown: false,
                tabBarLabel: 'Ưu đãi',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialIcons_1["default"], { name: "discount", size: size, color: color }));
                }
            } })));
};
exports["default"] = TabNavigator;
