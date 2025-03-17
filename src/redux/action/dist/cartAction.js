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
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var helper_1 = require("@common/helper");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var typeCartAction_1 = require("@redux/constants/typeCartAction");
var react_native_1 = require("react-native");
var constants_1 = require("../../constants");
var index_1 = require("@common/index");
var api_1 = require("@config/api");
var rest_1 = require("@graphQL/rest");
var serviceGetAllTopping_1 = require("@graphQL/services/serviceGetAllTopping");
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
        var cart, _a, isLogin, numberPhone, deviceId, firstCart, checkProduct, listProduct, formBodyRequest, paramAPI, res, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    cart = state().setCartReducer;
                    _a = state().genarateReducer, isLogin = _a.isLogin, numberPhone = _a.numberPhone, deviceId = _a.deviceId;
                    cart.totalPriceShipCart = 18000; // update soon
                    return [4 /*yield*/, async_storage_1["default"].getItem(constants_1.CONSTANTS_STORAGE.FIRST_CART)];
                case 1:
                    firstCart = _b.sent();
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
                    cart.address = state().getLocationUserReducer.items[0].address.label;
                    cart.phoneNumber = numberPhone;
                    cart.totalPriceCart = index_1.Helper.sumArrayKey(cart.listProduct, 'totalPrice');
                    cart.totalQuantityCart = index_1.Helper.sumArrayKey(cart.listProduct, 'quantity');
                    if (!isLogin) return [3 /*break*/, 4];
                    listProduct = cart.listProduct.map(function (x) {
                        return {
                            productId: x.productId,
                            productName: x.productName,
                            categoryId: x.iD_Cate,
                            listToppingId: x.listTopping.map(function (x) { return x.toppingId; }),
                            size: x.size,
                            quantity: x.quantity,
                            totalPrice: x.totalPrice,
                            noteProduct: x.note
                        };
                    });
                    formBodyRequest = {
                        phoneNumber: numberPhone,
                        address: cart.address,
                        deviceId: deviceId,
                        cartDetail: [
                            {
                                totalPriceCart: cart.totalPriceCart,
                                totalQuantityCart: cart.totalQuantityCart,
                                totalPriceShipCart: cart.totalPriceShipCart,
                                listProductInCart: listProduct
                            },
                        ]
                    };
                    paramAPI = {
                        url: JSON.parse(firstCart)
                            ? api_1.constantsURL.ADD_CART
                            : api_1.constantsURL.UPDATE_CART,
                        request: {
                            method: JSON.parse(firstCart) ? 'POST' : 'PUT',
                            queryString: "numberPhone=" + numberPhone,
                            body: JSON.stringify(formBodyRequest)
                        }
                    };
                    console.log('FIRSTTTT', firstCart);
                    return [4 /*yield*/, api_1.fetchAPI(paramAPI)];
                case 2:
                    res = (_b.sent());
                    if (!(!index_1.Helper.isNullOrUndefined(res) && res.resCode === 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.FIRST_CART, JSON.stringify(false))];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, cart));
                    // save cart to AsyncStorage
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART, JSON.stringify(cart))];
                case 5:
                    // save cart to AsyncStorage
                    _b.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    react_native_1.Alert.alert('Uiiiii', 'Lỗi rồi');
                    console.log('ERROR ADD CART', error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
};
exports.getCart = function (isLogin, numberPhone) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var cart, paramAPI, res, data, dataToppingQL_1, getListProduct, getCart_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 11, , 12]);
                    return [4 /*yield*/, async_storage_1["default"].getItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART)];
                case 1:
                    cart = _a.sent();
                    if (!isLogin) return [3 /*break*/, 8];
                    paramAPI = {
                        url: api_1.constantsURL.GET_CART_BY_PHONE,
                        request: {
                            method: 'GET',
                            queryString: "phoneNumber=" + numberPhone
                        }
                    };
                    return [4 /*yield*/, api_1.fetchAPI(paramAPI)];
                case 2:
                    res = (_a.sent());
                    if (!(!index_1.Helper.isNullOrUndefined(res) && (res === null || res === void 0 ? void 0 : res.resCode) === 1)) return [3 /*break*/, 5];
                    if (!!index_1.Helper.isNullOrUndefined(res.data)) return [3 /*break*/, 4];
                    data = res.data;
                    dataToppingQL_1 = rest_1.client.readQuery({
                        query: serviceGetAllTopping_1.getAllTopping.query
                    });
                    getListProduct = data === null || data === void 0 ? void 0 : data.cartDetail[0].listProductInCart.map(function (x) {
                        return {
                            productId: x.productId,
                            productName: x.productName,
                            size: x.size,
                            quantity: x.quantity,
                            totalPrice: x.totalPrice,
                            iD_Cate: x.categoryId,
                            note: x.noteProduct,
                            listTopping: dataToppingQL_1 === null || dataToppingQL_1 === void 0 ? void 0 : dataToppingQL_1.allListTopping.filter(function (item) {
                                return x.listToppingId.includes(item.toppingId);
                            })
                        };
                    });
                    getCart_1 = {
                        idCart: data === null || data === void 0 ? void 0 : data.cartId,
                        address: data === null || data === void 0 ? void 0 : data.address,
                        phoneNumber: data === null || data === void 0 ? void 0 : data.phoneNumber,
                        totalPriceCart: data === null || data === void 0 ? void 0 : data.cartDetail[0].totalPriceCart,
                        totalPriceShipCart: data === null || data === void 0 ? void 0 : data.cartDetail[0].totalPriceShipCart,
                        totalQuantityCart: data === null || data === void 0 ? void 0 : data.cartDetail[0].totalQuantityCart,
                        listProduct: getListProduct
                    };
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, getCart_1));
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.FIRST_CART, JSON.stringify(false))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5:
                    if (!index_1.Helper.isNullOrUndefined(cart)) {
                        dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, JSON.parse(cart !== null && cart !== void 0 ? cart : '')));
                    }
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.FIRST_CART, JSON.stringify(true))];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [3 /*break*/, 10];
                case 8:
                    if (!index_1.Helper.isNullOrUndefined(cart)) {
                        dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, JSON.parse(cart !== null && cart !== void 0 ? cart : '')));
                    }
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.FIRST_CART, JSON.stringify(true))];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    error_2 = _a.sent();
                    react_native_1.Alert.alert('Uiiiii', 'Lỗi không lấy được giỏ hàng');
                    console.log('ERROR GET CART', error_2);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    }); };
};
exports.updateCartAction = function (data, selectIndex) {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var cart, _a, isLogin, numberPhone, deviceId, findProduct, checkExistProduct, listProduct, formBodyRequest, paramAPI, res, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    cart = state().setCartReducer;
                    _a = state().genarateReducer, isLogin = _a.isLogin, numberPhone = _a.numberPhone, deviceId = _a.deviceId;
                    findProduct = cart.listProduct.findIndex(function (_, i) { return i === selectIndex; });
                    if (!index_1.Helper.isNullOrUndefined(findProduct) && findProduct >= 0) {
                        checkExistProduct = cart.listProduct.findIndex(function (x) {
                            return x.productId === data.productId &&
                                x.size === data.size &&
                                helper_1.isArrayEquals(x.listTopping, data.listTopping);
                        });
                        if (!index_1.Helper.isNullOrUndefined(checkExistProduct) &&
                            checkExistProduct >= 0 &&
                            findProduct !== checkExistProduct) {
                            cart.listProduct[checkExistProduct].totalPrice += data.totalPrice;
                            cart.listProduct[checkExistProduct].quantity += data.quantity;
                            if (checkExistProduct !== selectIndex) {
                                cart.listProduct.splice(findProduct, 1);
                            }
                        }
                        else {
                            cart.listProduct[findProduct] = data;
                        }
                    }
                    cart.address = state().getLocationUserReducer.items[0].address.label;
                    cart.phoneNumber = numberPhone;
                    cart.totalPriceCart = index_1.Helper.sumArrayKey(cart.listProduct, 'totalPrice');
                    cart.totalQuantityCart = index_1.Helper.sumArrayKey(cart.listProduct, 'quantity');
                    if (!isLogin) return [3 /*break*/, 2];
                    listProduct = cart.listProduct.map(function (x) {
                        return {
                            productId: x.productId,
                            productName: x.productName,
                            categoryId: x.iD_Cate,
                            listToppingId: x.listTopping.map(function (x) { return x.toppingId; }),
                            size: x.size,
                            quantity: x.quantity,
                            totalPrice: x.totalPrice,
                            noteProduct: x.note
                        };
                    });
                    formBodyRequest = {
                        phoneNumber: numberPhone,
                        address: cart.address,
                        deviceId: deviceId,
                        cartDetail: [
                            {
                                totalPriceCart: cart.totalPriceCart,
                                totalQuantityCart: cart.totalQuantityCart,
                                totalPriceShipCart: cart.totalPriceShipCart,
                                listProductInCart: listProduct
                            },
                        ]
                    };
                    paramAPI = {
                        url: api_1.constantsURL.UPDATE_CART,
                        request: {
                            method: 'PUT',
                            queryString: "numberPhone=" + numberPhone,
                            body: JSON.stringify(formBodyRequest)
                        }
                    };
                    return [4 /*yield*/, api_1.fetchAPI(paramAPI)];
                case 1:
                    res = (_b.sent());
                    if (!index_1.Helper.isNullOrUndefined(res) && res.resCode === 1) {
                        console.log('UPDATE CART SUCCESS');
                    }
                    _b.label = 2;
                case 2: 
                // save cart to AsyncStorage
                return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART, JSON.stringify(cart))];
                case 3:
                    // save cart to AsyncStorage
                    _b.sent();
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, cart));
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _b.sent();
                    react_native_1.Alert.alert('Uiiiii', 'Lỗi rồi');
                    console.log('ERROR UPDATE CART', error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
};
exports.deleteProductCart = function (indexProductCart) {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var cart, _a, isLogin, numberPhone, deviceId, listProduct, formBodyRequest, paramAPI, res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cart = state().setCartReducer;
                    _a = state().genarateReducer, isLogin = _a.isLogin, numberPhone = _a.numberPhone, deviceId = _a.deviceId;
                    cart.listProduct.splice(indexProductCart, 1);
                    cart.totalPriceCart = index_1.Helper.sumArrayKey(cart.listProduct, 'totalPrice');
                    cart.totalQuantityCart = index_1.Helper.sumArrayKey(cart.listProduct, 'quantity');
                    cart.totalPriceShipCart =
                        cart.totalQuantityCart === 0 ? 0 : cart.totalPriceShipCart;
                    if (!isLogin) return [3 /*break*/, 2];
                    listProduct = cart.listProduct.map(function (x) {
                        return {
                            productId: x.productId,
                            productName: x.productName,
                            categoryId: x.iD_Cate,
                            listToppingId: x.listTopping.map(function (x) { return x.toppingId; }),
                            size: x.size,
                            quantity: x.quantity,
                            totalPrice: x.totalPrice,
                            noteProduct: x.note
                        };
                    });
                    formBodyRequest = {
                        phoneNumber: numberPhone,
                        address: cart.address,
                        deviceId: deviceId,
                        cartDetail: [
                            {
                                totalPriceCart: cart.totalPriceCart,
                                totalQuantityCart: cart.totalQuantityCart,
                                totalPriceShipCart: cart.totalPriceShipCart,
                                listProductInCart: listProduct
                            },
                        ]
                    };
                    paramAPI = {
                        url: api_1.constantsURL.UPDATE_CART,
                        request: {
                            method: 'PUT',
                            queryString: "numberPhone=" + numberPhone,
                            body: JSON.stringify(formBodyRequest)
                        }
                    };
                    return [4 /*yield*/, api_1.fetchAPI(paramAPI)];
                case 1:
                    res = (_b.sent());
                    if (!index_1.Helper.isNullOrUndefined(res) && res.resCode === 1) {
                        console.log('DELETE PRODUCT IN CART SUCCESS');
                    }
                    _b.label = 2;
                case 2:
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, cart));
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART, JSON.stringify(cart))];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.deleteCart = function () {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var cart, _a, isLogin, numberPhone, deviceId, paramAPI, res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cart = state().setCartReducer;
                    _a = state().genarateReducer, isLogin = _a.isLogin, numberPhone = _a.numberPhone, deviceId = _a.deviceId;
                    cart.idCart = Date.now();
                    cart.totalPriceCart = 0;
                    cart.totalPriceShipCart = 0;
                    cart.totalQuantityCart = 0;
                    cart.listProduct = [];
                    if (!isLogin) return [3 /*break*/, 2];
                    paramAPI = {
                        url: api_1.constantsURL.DELETE_CART,
                        request: {
                            method: 'DELETE',
                            queryString: "numberPhone=" + numberPhone
                        }
                    };
                    return [4 /*yield*/, api_1.fetchAPI(paramAPI)];
                case 1:
                    res = (_b.sent());
                    if (!index_1.Helper.isNullOrUndefined(res) && res.resCode === 1) {
                        console.log('DELETE CART SUCCESS');
                    }
                    _b.label = 2;
                case 2:
                    dispatch(helper_1.createAction(typeCartAction_1.typeCartACtion.ACTION_SET_CART, cart));
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.STORAGE_CART, JSON.stringify(cart))];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
};
