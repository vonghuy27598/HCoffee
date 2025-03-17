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
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var native_stack_1 = require("@react-navigation/native-stack");
var react_native_bootsplash_1 = require("react-native-bootsplash");
var TabNavigator_1 = require("./TabNavigator");
var geolocation_1 = require("@react-native-community/geolocation");
var react_redux_1 = require("react-redux");
var locationAction_1 = require("@redux/action/locationAction");
var index_1 = require("@common/index");
var react_native_1 = require("react-native");
var messaging_1 = require("@react-native-firebase/messaging");
var react_native_2 = require("@notifee/react-native");
var NotificationScreen_1 = require("@container/NotificationScreen");
var LoginScreen_1 = require("@container/LoginScreen");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var constants_1 = require("../constants");
var genarateAction_1 = require("@redux/action/genarateAction");
var Stack = native_stack_1.createNativeStackNavigator();
var MainNavigator = function () {
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        var unsubscribe = messaging_1["default"]().onMessage(function (remoteMessage) { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                react_native_1.Alert.alert('Hcoffe thông báo', JSON.stringify((_a = remoteMessage.notification) === null || _a === void 0 ? void 0 : _a.body));
                return [2 /*return*/];
            });
        }); });
        return unsubscribe;
    }, []);
    var initApp = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                dispatch(genarateAction_1.genarateApp());
                onAppBootstrap();
                geolocation_1["default"].getCurrentPosition(function (postion) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('onReady App', postion);
                                if (!postion.coords) return [3 /*break*/, 2];
                                return [4 /*yield*/, dispatch(locationAction_1.getLocationUserAction(postion.coords.latitude, postion.coords.longitude))];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [4 /*yield*/, index_1.PermissionApp.firstCheckPermissionNotification()];
                            case 3:
                                _a.sent();
                                react_native_bootsplash_1["default"].hide({ fade: true });
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    console.log('getCurrentPosition error', err);
                }, {
                    timeout: 100000,
                    maximumAge: 100000,
                    enableHighAccuracy: true
                });
                // PermissionApp.firstCheckPermissionLocation();
            }
            catch (error) {
                react_native_1.Alert.alert('Lỗi hệ thống', 'HCoffee gặp vấn đề khi khởi tạo ứng dụng');
                console.log('ERROR INIT APP', error);
            }
            return [2 /*return*/];
        });
    }); };
    var onAppBootstrap = function () { return __awaiter(void 0, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Register the device with FCM
                return [4 /*yield*/, messaging_1["default"]().registerDeviceForRemoteMessages()];
                case 1:
                    // Register the device with FCM
                    _a.sent();
                    return [4 /*yield*/, messaging_1["default"]().getToken()];
                case 2:
                    token = _a.sent();
                    console.log('TOKEN NOTIFICATION', token);
                    // Check login user
                    // Save token
                    return [4 /*yield*/, async_storage_1["default"].setItem(constants_1.CONSTANTS_STORAGE.TOKEN_NOTIFY, token)];
                case 3:
                    // Check login user
                    // Save token
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var onMessageReceived = function (message) {
        var _a, _b;
        react_native_2["default"].displayNotification({
            title: (_a = message.notification) === null || _a === void 0 ? void 0 : _a.title,
            body: (_b = message.notification) === null || _b === void 0 ? void 0 : _b.body
        });
        console.log('onMessageReceived', message.notification);
    };
    messaging_1["default"]().onMessage(onMessageReceived);
    messaging_1["default"]().setBackgroundMessageHandler(onMessageReceived);
    return (react_1["default"].createElement(native_1.NavigationContainer, { onReady: function () {
            console.log('onReady App');
            initApp();
        } },
        react_1["default"].createElement(Stack.Navigator, { initialRouteName: "Home", screenOptions: { headerShown: false } },
            react_1["default"].createElement(Stack.Screen, { name: "Home", component: TabNavigator_1["default"] }),
            react_1["default"].createElement(Stack.Screen, { name: "Notification", component: NotificationScreen_1["default"] }),
            react_1["default"].createElement(Stack.Screen, { name: "Login", component: LoginScreen_1["default"], options: {
                    animationTypeForReplace: 'push',
                    animation: 'slide_from_bottom'
                } }))));
};
exports["default"] = MainNavigator;
