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
exports.getListOrder = exports.addOrder = void 0;
var index_1 = require("@common/index");
var api_1 = require("@config/api");
var fetchAPI_1 = require("@config/api/fetchAPI");
var typeOrderAction_1 = require("@redux/constants/typeOrderAction");
var react_native_1 = require("react-native");
var cartAction_1 = require("./cartAction");
// DEFAULT STATUS ORDER
var STATUS_ORDER_PENDING = 101; // DEFAULT ADD CART
var STATUS_ORDER_DELIVERY = 102;
var STATUS_ORDER_SUCCESS = 103;
var STATUS_ORDER_ERROR = -1;
exports.addOrder = function (setShowBottomSheetCart) {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var cart, _a, isLogin, numberPhone, deviceId, listProductOrder, formBodyRequest, paramAPI, res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cart = state().setCartReducer;
                    _a = state().genarateReducer, isLogin = _a.isLogin, numberPhone = _a.numberPhone, deviceId = _a.deviceId;
                    if (!isLogin) return [3 /*break*/, 2];
                    listProductOrder = cart.listProduct.map(function (x) {
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
                        noteOrder: '',
                        statusCodeOrder: STATUS_ORDER_PENDING,
                        orderDetail: [
                            {
                                totalPriceOrder: cart.totalPriceCart,
                                totalQuantityOrder: cart.totalQuantityCart,
                                totalPriceShip: cart.totalPriceShipCart,
                                listProductChooses: listProductOrder
                            },
                        ]
                    };
                    paramAPI = {
                        url: api_1.constantsURL.ADD_ORDER,
                        request: {
                            method: 'POST',
                            body: JSON.stringify(formBodyRequest)
                        }
                    };
                    return [4 /*yield*/, fetchAPI_1.fetchAPI(paramAPI)];
                case 1:
                    res = (_b.sent());
                    if (!index_1.Helper.isNullOrUndefined(res) && res.resCode === 1) {
                        dispatch(index_1.Helper.createAction(typeOrderAction_1.typeOrderAction.ACTION_ADD_ORDER));
                        dispatch(cartAction_1.deleteCart());
                        console.log('ORDER SUCCESS');
                        react_native_1.Alert.alert('Cảm ơn quý khách!', 'Đơn hàng hiện đã được gửi đến HCoffee!');
                        setShowBottomSheetCart(false);
                    }
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
};
exports.getListOrder = function (pageIndex) {
    return function (dispatch, state) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, deviceId, isLogin, numberPhone, paramAPI;
        return __generator(this, function (_b) {
            _a = state().genarateReducer, deviceId = _a.deviceId, isLogin = _a.isLogin, numberPhone = _a.numberPhone;
            if (isLogin) {
                paramAPI = {
                    url: api_1.constantsURL.GET_ORDER,
                    request: {
                        method: 'GET'
                    }
                };
            }
            console.log('');
            return [2 /*return*/];
        });
    }); };
};
