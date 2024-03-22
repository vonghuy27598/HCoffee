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
exports.requestPermissionLocation = exports.firstCheckPermissionLocation = void 0;
var react_native_1 = require("react-native");
var permissions = require("react-native-permissions");
var storage_1 = require("../constants/storage");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var checkRequestLocation = react_native_1.Platform.OS === 'ios'
    ? permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
var setLocalStorageLocation = function (localStorage) { return __awaiter(void 0, void 0, void 0, function () {
    var storageLocation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                storageLocation = {
                    android: {
                        PERMISSIONS_ANDROID_ACCESS_BACKGROUND_LOCATION: react_native_1.Platform.OS === 'android' &&
                            localStorage[permissions.PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION],
                        PERMISSIONS_ANDROID_ACCESS_FINE_LOCATION: react_native_1.Platform.OS === 'android' &&
                            localStorage[permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
                    },
                    ios: {
                        PERMISSIONS_IOS_LOCATION_ALWAYS: react_native_1.Platform.OS === 'ios' &&
                            localStorage[permissions.PERMISSIONS.IOS.LOCATION_ALWAYS],
                        PERMISSIONS_IOS_LOCATION_WHEN_IN_USE: react_native_1.Platform.OS === 'ios' &&
                            localStorage[permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
                    }
                };
                console.log('checkPermission', storageLocation);
                return [4 /*yield*/, async_storage_1["default"].setItem(storage_1.PERMISSIONS_LOCATION_APP, JSON.stringify(storageLocation))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var checkBlockedPermissionLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, statusPermission;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _b = (_a = console).log;
                _c = ['checkBlockedPermissionLocation request'];
                return [4 /*yield*/, permissions.check(checkRequestLocation)];
            case 1:
                _b.apply(_a, _c.concat([_d.sent()]));
                return [4 /*yield*/, permissions.check(checkRequestLocation)];
            case 2:
                statusPermission = _d.sent();
                return [2 /*return*/, react_native_1.Platform.OS === 'android'
                        ? statusPermission === 'blocked'
                        : statusPermission === 'blocked'];
        }
    });
}); };
exports.firstCheckPermissionLocation = function () {
    permissions.check(checkRequestLocation).then(function (statuses) {
        console.log('firstCheckPermissionLocation', statuses);
        // const inUse =
        //   Platform.OS === 'android'
        //     ? statuse === 'granted'
        //     : statuses === 'granted';
        // const allTime =
        //   Platform.OS === 'android'
        //     ? statuses[
        //         permissions.PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
        //       ] === 'granted'
        //     : statuses[permissions.PERMISSIONS.IOS.LOCATION_ALWAYS] === 'granted';
        // setLocalStorageLocation(statuses);
        // if (inUse && allTime) {
        //   return;
        // }
    });
};
// const getCurrentPosition = () => {
//   const dispatch = useDispatch<any>();
//   Geolocation.getCurrentPosition(
//     (postion: any) => {
//       console.log('onReady App', postion);
//       if (postion.coords) {
//         dispatch(
//           getLocationUserAction(
//             postion.coords.latitude,
//             postion.coords.longitude,
//           ),
//         );
//       }
//     },
//     (err: any) => {
//       console.log('getCurrentPosition error', err);
//     },
//     () => null,
//   );
// };
exports.requestPermissionLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
    var status;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, permissions.request(checkRequestLocation)];
            case 1:
                status = _a.sent();
                if (status === 'blocked') {
                    react_native_1.Alert.alert('Quyền truy cập bị chặn', 'Vui lòng mở quyền truy cập vị trí hiện tại', [
                        {
                            text: 'Đồng ý',
                            onPress: function () {
                                permissions.openSettings();
                            }
                        },
                        {
                            text: 'Hủy'
                        },
                    ]);
                    return [2 /*return*/, false];
                }
                else if (status === 'granted') {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
        }
    });
}); };
// export const requestPermission = () => {};
