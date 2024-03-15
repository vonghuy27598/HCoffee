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
exports.getLocationUserReducer = void 0;
var typeLocationAction_1 = require("@redux/constants/typeLocationAction");
var locationStore_1 = require("@redux/store/locationStore");
exports.getLocationUserReducer = function (state, action) {
    if (state === void 0) { state = locationStore_1.locationUserStore; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case typeLocationAction_1.typeLocationAction.ACTION_GET_CURRENT_LOCATION:
            return __assign(__assign({}, state), { items: payload.items });
        default:
            return state;
    }
};
