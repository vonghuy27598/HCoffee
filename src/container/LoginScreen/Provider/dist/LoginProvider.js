"use strict";
exports.__esModule = true;
exports.useLogin = exports.LoginProvider = void 0;
var react_1 = require("react");
var LoginContext = react_1.createContext({});
var LoginProvider = function (_a) {
    var children = _a.children;
    var data = {};
    return react_1["default"].createElement(LoginContext.Provider, { value: data }, children);
};
exports.LoginProvider = LoginProvider;
var useLogin = function () {
    var context = react_1.useContext(LoginContext);
    if (!context) {
        throw new Error('Login context error');
    }
    return context;
};
exports.useLogin = useLogin;
