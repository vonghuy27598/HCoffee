"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.genarateReducer = void 0;
var typeGenarateAction_1 = require("@redux/constants/typeGenarateAction");
var genarateStore_1 = require("@redux/store/genarateStore");
exports.genarateReducer = function (state, action) {
    if (state === void 0) { state = genarateStore_1.genarateStore; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case typeGenarateAction_1.typeGenarateAction.ACTION_GENARATE_APP:
            return __assign(__assign({}, state), { isLogin: payload.isLogin, numberPhone: payload.numberPhone, deviceId: payload.deviceId });
        default:
            return state;
    }
};
