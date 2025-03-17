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
exports.fetchAPI = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var async_storage_1 = require("@react-native-async-storage/async-storage");
var constants_1 = require("../../constants");
var index_1 = require("@common/index");
exports.fetchAPI = function (_a) {
    var url = _a.url, request = _a.request;
    return new Promise(function (resolve, reject) {
        async_storage_1["default"].multiGet([
            constants_1.CONSTANTS_STORAGE.ACCESS_TOKEN,
            constants_1.CONSTANTS_STORAGE.IS_LOGIN,
            constants_1.CONSTANTS_STORAGE.SESSION_USER,
        ], function (errors, result) { return __awaiter(void 0, void 0, void 0, function () {
            var headers, getUser, urlAPI, newRequest;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (errors) {
                            reject('Error');
                        }
                        headers = new Headers({
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        });
                        getUser = null;
                        //get user logged
                        if (JSON.parse(result[1][1])) {
                            getUser = JSON.parse((_b = (_a = result[2][1]) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '');
                        }
                        if (!index_1.Helper.isNullOrUndefined(getUser) &&
                            index_1.Helper.isNullOrUndefined(request === null || request === void 0 ? void 0 : request.checkCall) &&
                            (request === null || request === void 0 ? void 0 : request.checkCall) !== 'Other') {
                            headers.append('Authorization', getUser.token);
                        }
                        urlAPI = url;
                        newRequest = __assign(__assign({}, request), { headers: headers });
                        if (!index_1.Helper.isNullOrUndefined(request === null || request === void 0 ? void 0 : request.queryString)) {
                            urlAPI = urlAPI + "?" + (request === null || request === void 0 ? void 0 : request.queryString);
                        }
                        console.log('API REQUEST:', urlAPI);
                        console.log('API REQUEST Body', newRequest);
                        return [4 /*yield*/, fetch(urlAPI, newRequest)
                                .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                                var response;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, res.text()];
                                        case 1:
                                            response = _a.sent();
                                            if (index_1.Helper.isJSON(response) || index_1.Helper.isArray(response)) {
                                                response = JSON.parse(response);
                                            }
                                            console.log('API RESPONSE', response);
                                            console.log('API RESPONSE URL', url);
                                            resolve(response);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })["catch"](function (errors) {
                                console.log('ERROR REQUEST API', url, errors);
                                reject('ERROR REQUEST API');
                            })];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};
