"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteCart = exports.deleteProductCart = exports.updateCartAction = exports.getCart = exports.setCart = exports.selectOptionBuy = exports.selectTopping = void 0;
var helper_1 = require("@common/helper");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var typeCartAction_1 = require("@redux/constants/typeCartAction");
var react_native_1 = require("react-native");
var constants_1 = require("../../constants");
var index_1 = require("@common/index");
exports.selectTopping = function (data) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SELECT_TOPPING, data));
            return [2 /*return*/];
        });
    }); };
};
exports.selectOptionBuy = function (data) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SELECT_OPTION_BUY, data));
            return [2 /*return*/];
        });
    }); };
};
exports.setCart = function (data) {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var cart, checkProduct, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    cart = state().setCartReducer;
                    cart.idCart = Date.now();
                    checkProduct = cart.listProduct.findIndex(function (x) {
                        return x.productId === data.productId &&
                            x.size === data.size &&
                            helper_1.isArrayEquals(x.listTopping, data.listTopping);
                    });
                    if (!index_1.Helper.isNullOrUndefined(checkProduct) && checkProduct >= 0) {
                        cart.listProduct[checkProduct].totalPrice += data.totalPrice;
                        cart.listProduct[checkProduct].quantity += data.quantity;
                    }
                    else {
                        cart.listProduct.push(data);
                    }
                    // save cart to AsyncStorage
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART, JSON.stringify(cart))];
                case 1:
                    // save cart to AsyncStorage
                    _a.sent();
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, cart));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    react_native_1.Alert.alert('Uiiiii', 'Lỗi rồi');
                    console.log('ERROR ADD CART', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.getCart = function () {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var cart, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, async_storage_1["default"].getItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART)];
                case 1:
                    cart = _a.sent();
                    if (!index_1.Helper.isNullOrUndefined(cart)) {
                        dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, JSON.parse(cart !== null && cart !== void 0 ? cart : '')));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    react_native_1.Alert.alert('Uiiiii', 'Lỗi không lấy được giỏ hàng');
                    console.log('ERROR ADD CART', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.updateCartAction = function (data) {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var cart, findProduct, checkExistProduct, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    cart = state().setCartReducer;
                    cart.idCart = Date.now();
                    findProduct = cart.listProduct.findIndex(function (x) { return x.productId === data.productId; });
                    if (!index_1.Helper.isNullOrUndefined(findProduct) && findProduct >= 0) {
                        checkExistProduct = cart.listProduct.findIndex(function (x) {
                            return x.productId === data.productId &&
                                x.size === data.size &&
                                helper_1.isArrayEquals(x.listTopping, data.listTopping);
                        });
                        if (!index_1.Helper.isNullOrUndefined(checkExistProduct) &&
                            checkExistProduct >= 0) {
                            cart.listProduct[checkExistProduct].totalPrice += data.totalPrice;
                            cart.listProduct[checkExistProduct].quantity += data.quantity;
                            cart.listProduct.splice(findProduct, 1);
                        }
                        else {
                            cart.listProduct[findProduct] = data;
                        }
                    }
                    // save cart to AsyncStorage
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART, JSON.stringify(cart))];
                case 1:
                    // save cart to AsyncStorage
                    _a.sent();
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, cart));
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    react_native_1.Alert.alert('Uiiiii', 'Lỗi rồi');
                    console.log('ERROR UPDATE CART', error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.deleteProductCart = function (indexProductCart) {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var cart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cart = state().setCartReducer;
                    cart.idCart = Date.now();
                    cart.listProduct.splice(indexProductCart, 1);
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, cart));
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART, JSON.stringify(cart))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.deleteCart = function () {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var cart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cart = state().setCartReducer;
                    cart.idCart = Date.now();
                    cart.listProduct = [];
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, cart));
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART, JSON.stringify(cart))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
};
