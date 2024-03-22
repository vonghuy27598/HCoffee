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
exports.setCartReducer = exports.selectOptionBuyReducer = exports.selectToppingReducer = void 0;
var typeCartAction_1 = require("@redux/constants/typeCartAction");
var cartStore_1 = require("@redux/store/cartStore");
exports.selectToppingReducer = function (state, action) {
    if (state === void 0) { state = cartStore_1.selectToppingStore; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case typeCartAction_1.typeCartACtion.ACTION_SELECT_TOPPING:
            return __assign(__assign({}, state), { listSelectTopping: payload });
        default:
            return state;
    }
};
exports.selectOptionBuyReducer = function (state, action) {
    if (state === void 0) { state = cartStore_1.optionBuyProductStore; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case typeCartAction_1.typeCartACtion.ACTION_SELECT_OPTION_BUY:
            return __assign(__assign({}, state), payload);
        case typeCartAction_1.typeCartACtion.ACTION_SET_OPTION_BUY_PRODUCT:
            return __assign(__assign({}, state), { listTopping: payload });
        default:
            return state;
    }
};
exports.setCartReducer = function (state, action) {
    if (state === void 0) { state = cartStore_1.cartStore; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case typeCartAction_1.typeCartACtion.ACTION_SET_CART:
            return __assign(__assign({}, state), { idCart: payload.idCart, listProduct: payload.listProduct });
        default:
            return state;
    }
};
