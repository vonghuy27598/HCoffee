"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var native_stack_1 = require("@react-navigation/native-stack");
var react_native_bootsplash_1 = require("react-native-bootsplash");
var TabNavigator_1 = require("./TabNavigator");
var geolocation_1 = require("@react-native-community/geolocation");
var react_redux_1 = require("react-redux");
var locationAction_1 = require("@redux/action/locationAction");
var Stack = native_stack_1.createNativeStackNavigator();
var MainNavigator = function () {
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement(native_1.NavigationContainer, { onReady: function () {
            console.log('onReady App');
            geolocation_1["default"].getCurrentPosition(function (postion) {
                console.log('onReady App', postion);
                if (postion.coords) {
                    dispatch(locationAction_1.getLocationUserAction(postion.coords.latitude, postion.coords.longitude));
                }
            });
            react_native_bootsplash_1["default"].hide({ fade: true });
        } },
        react_1["default"].createElement(Stack.Navigator, { initialRouteName: "Home", screenOptions: { headerShown: false } },
            react_1["default"].createElement(Stack.Screen, { name: "Home", component: TabNavigator_1["default"] }))));
};
exports["default"] = MainNavigator;
