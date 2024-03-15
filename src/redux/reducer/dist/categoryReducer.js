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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.setHeaderCateName = exports.setPositionCategory = exports.getCategoryReducer = void 0;
var typeCategoryAction_1 = require("@redux/constants/typeCategoryAction");
var categoryStore_1 = require("@redux/store/categoryStore");
exports.getCategoryReducer = function (state, action) {
    if (state === void 0) { state = categoryStore_1.categoryStore; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case typeCategoryAction_1.typeCategoryAction.ACTION_GET_CATEGORY:
            return __assign(__assign({}, state), { dataCategory: payload, isLoadingCategory: false });
        default:
            return state;
    }
};
exports.setPositionCategory = function (state, action) {
    if (state === void 0) { state = categoryStore_1.positionCategory; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case typeCategoryAction_1.typeCategoryAction.ACTION_SET_POSITION_CATEGORY:
            return __assign(__assign({}, state), { dataPosition: __spreadArrays(state.dataPosition, [
                    { screenName: payload.screenName, listPosition: payload.listPosition },
                ]) });
        default:
            return state;
    }
};
exports.setHeaderCateName = function (state, action) {
    if (state === void 0) { state = categoryStore_1.getHeaderCateName; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case typeCategoryAction_1.typeCategoryAction.ACTION_SET_HEADER_CATE_CATEGORY:
            return __assign(__assign({}, state), { cateName: payload });
        default:
            return state;
    }
};
