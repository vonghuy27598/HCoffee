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
exports.getInforUser = exports.checkLogin = exports.loginByPhone = exports.sendOTP = exports.requestOTP = void 0;
var index_1 = require("@common/index");
var api_1 = require("@config/api");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var typeUserAction_1 = require("@redux/constants/typeUserAction");
var react_native_device_info_1 = require("react-native-device-info");
var constants_1 = require("../../constants");
var react_native_1 = require("react-native");
var cartAction_1 = require("./cartAction");
var typeGenarateAction_1 = require("@redux/constants/typeGenarateAction");
exports.requestOTP = function (numberPhone) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var deviceId, queryString, paramsAPI, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, react_native_device_info_1.getUniqueId()];
                case 1:
                    deviceId = _a.sent();
                    console.log('DEVICE ID', deviceId);
                    queryString = "DeviceId=" + deviceId + "&numberPhone=" + numberPhone;
                    paramsAPI = {
                        url: api_1.constantsURL.REQUEST_OTP,
                        request: {
                            method: 'POST',
                            queryString: queryString
                        }
                    };
                    return [4 /*yield*/, api_1.fetchAPI(paramsAPI)];
                case 2:
                    response = _a.sent();
                    if (!index_1.Helper.isNullOrUndefined(response)) {
                        dispatch(index_1.Helper.createAction(typeUserAction_1.typeUserAction.ACTION_REQUEST_OTP));
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log('ERROR requestOTP', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
exports.sendOTP = function (numberPhone, code, navigation) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var deviceId, body, paramsAPI, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, react_native_device_info_1.getUniqueId()];
                case 1:
                    deviceId = _a.sent();
                    body = {
                        DeviceId: deviceId,
                        PhoneNumber: numberPhone,
                        Code: code
                    };
                    paramsAPI = {
                        url: api_1.constantsURL.SEND_OTP,
                        request: {
                            method: 'POST',
                            body: JSON.stringify(body)
                        }
                    };
                    return [4 /*yield*/, api_1.fetchAPI(paramsAPI)];
                case 2:
                    response = _a.sent();
                    if (!index_1.Helper.isNullOrUndefined(response)) {
                        dispatch(index_1.Helper.createAction(typeUserAction_1.typeUserAction.ACTION_SEND_OTP));
                        if ((response === null || response === void 0 ? void 0 : response.resCode) === 1 && (response === null || response === void 0 ? void 0 : response.status) === 'Success') {
                            dispatch(exports.loginByPhone(numberPhone, navigation));
                        }
                        else {
                            react_native_1.Alert.alert('Có lỗi', 'Mã xác thực không chính xác');
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log('ERROR sendOTP', error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
exports.loginByPhone = function (phoneNumber, navigation) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var deviceId, getTokenNotify, body, paramsAPI, response, tokenUser, user, payload, _a, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 9, , 10]);
                    return [4 /*yield*/, react_native_device_info_1.getUniqueId()];
                case 1:
                    deviceId = _b.sent();
                    return [4 /*yield*/, async_storage_1["default"].getItem(constants_1.CONSTANTS_STORAGE.TOKEN_NOTIFY)];
                case 2:
                    getTokenNotify = _b.sent();
                    body = {
                        deviceId: deviceId,
                        phoneNumber: phoneNumber,
                        tokenNotify: getTokenNotify
                    };
                    paramsAPI = {
                        url: api_1.constantsURL.LOGIN_BY_PHONE,
                        request: {
                            method: 'POST',
                            body: JSON.stringify(body)
                        }
                    };
                    dispatch(index_1.Helper.createAction(typeUserAction_1.typeUserAction.ACTION_LOGIN_BYPHONE));
                    return [4 /*yield*/, api_1.fetchAPI(paramsAPI)];
                case 3:
                    response = _b.sent();
                    if (!!index_1.Helper.isNullOrUndefined(response)) return [3 /*break*/, 8];
                    dispatch(index_1.Helper.createAction(typeUserAction_1.typeUserAction.ACTION_SEND_OTP));
                    if (!((response === null || response === void 0 ? void 0 : response.resCode) === 1 && (response === null || response === void 0 ? void 0 : response.status) === 'Success')) return [3 /*break*/, 7];
                    tokenUser = 'Bearer ' + (response === null || response === void 0 ? void 0 : response.data);
                    user = {
                        numberPhone: phoneNumber.replace('84', '0'),
                        token: tokenUser
                    };
                    console.log('LOGIN SUCCESS', user);
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.IS_LOGIN, JSON.stringify(true))];
                case 4:
                    _b.sent();
                    //save token to AsyncStorage
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.SESSION_USER, JSON.stringify(user))];
                case 5:
                    //save token to AsyncStorage
                    _b.sent();
                    dispatch(index_1.Helper.createAction(typeUserAction_1.typeUserAction.ACTION_LOGIN_BYPHONE_SUCCESS));
                    _a = {
                        isLogin: true,
                        numberPhone: phoneNumber.replace('84', '0')
                    };
                    return [4 /*yield*/, react_native_device_info_1.getUniqueId()];
                case 6:
                    payload = (_a.deviceId = _b.sent(),
                        _a);
                    dispatch(index_1.Helper.createAction(typeGenarateAction_1.typeGenarateAction.ACTION_GENARATE_APP, payload));
                    dispatch(cartAction_1.getCart(true, phoneNumber.replace('84', '0')));
                    navigation.goBack();
                    // tiếp tục get thông tin user khi login thành công
                    dispatch(exports.getInforUser());
                    return [3 /*break*/, 8];
                case 7:
                    dispatch(index_1.Helper.createAction(typeUserAction_1.typeUserAction.ACTION_LOGIN_BYPHONE_FAIL));
                    _b.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    error_3 = _b.sent();
                    console.log('ERROR loginByPhone', error_3);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    }); };
};
exports.checkLogin = function () {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var isLogin, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, async_storage_1["default"].getItem(constants_1.CONSTANTS_STORAGE.IS_LOGIN)];
                case 1:
                    isLogin = _a.sent();
                    if (isLogin === 'LOGIN') {
                        dispatch(exports.getInforUser());
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log('ERROR checkLogin', error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.getInforUser = function () {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                //
            }
            catch (error) {
                console.log('ERROR checkLogin', error);
            }
            return [2 /*return*/];
        });
    }); };
};
