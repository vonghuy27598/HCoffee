"use strict";
exports.__esModule = true;
exports.useAppRoot = exports.AppProvider = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var AppContext = react_1.createContext({});
var AppProvider = function (_a) {
    var children = _a.children;
    var navigation = native_1.useNavigation();
    var dataProvider = {
        navigation: navigation
    };
    return (react_1["default"].createElement(AppContext.Provider, { value: dataProvider }, children));
};
exports.AppProvider = AppProvider;
var useAppRoot = function () {
    var context = react_1.useContext(AppContext);
    if (!context) {
        throw new Error('App Root context error');
    }
    return context;
};
exports.useAppRoot = useAppRoot;
