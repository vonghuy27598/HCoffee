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
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var AppText_1 = require("@components/Custom/AppText");
var constants_1 = require("../../constants");
var HomeProvider_1 = require("@container/HomeScreen/Provider/HomeProvider");
var OrderProvider_1 = require("@container/OrderScreen/Provider/OrderProvider");
var permissions_1 = require("@common/permissions");
var geolocation_1 = require("@react-native-community/geolocation");
var react_redux_1 = require("react-redux");
var locationAction_1 = require("@redux/action/locationAction");
var index_1 = require("@common/index");
var AnimatedTouchableOpacity = react_native_1.Animated.createAnimatedComponent(react_native_1.TouchableOpacity);
var BoxLocation = function () {
    var _a = HomeProvider_1.useHome(), boxLocationAnim = _a.boxLocationAnim, iconAnim = _a.iconAnim, textLocationAnim = _a.textLocationAnim, textTitleLocationAnim = _a.textTitleLocationAnim, setShowBottomSheet = _a.setShowBottomSheet;
    var _b = OrderProvider_1.useOrder(), boxLocationAnimOrder = _b.boxLocationAnimOrder, iconAnimOrder = _b.iconAnimOrder, textLocationAnimOrder = _b.textLocationAnimOrder, textTitleLocationAnimOrder = _b.textTitleLocationAnimOrder, setShowBottomSheetOrder = _b.setShowBottomSheetOrder;
    var dispatch = react_redux_1.useDispatch();
    var locationCurrent = react_redux_1.useSelector(function (state) { return state.getLocationUserReducer.items; });
    var getLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, permissions_1.requestPermissionLocation()];
                case 1:
                    if (_a.sent()) {
                        geolocation_1["default"].getCurrentPosition(function (postion) {
                            console.log('onReady App', postion);
                            if (postion.coords) {
                                dispatch(locationAction_1.getLocationUserAction(postion.coords.latitude, postion.coords.longitude));
                            }
                        }, function (err) {
                            console.log('getCurrentPosition error', err);
                        }, {
                            timeout: 100000,
                            maximumAge: 100000,
                            enableHighAccuracy: true
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(AnimatedTouchableOpacity, { style: [
            styles_1.styles.containerBox,
            styles_1.styles.flexDirectionRow,
            boxLocationAnim,
            boxLocationAnimOrder,
        ], activeOpacity: 1, onPress: function () {
            getLocation();
        } },
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.areaLocation },
            react_1["default"].createElement(react_native_1.Animated.View, { style: [styles_1.styles.flexDirectionRow, styles_1.styles.titleLocation] },
                react_1["default"].createElement(react_native_1.Animated.Image, { source: constants_1.IMAGES.ICON_COFFEE, resizeMode: "stretch", style: [styles_1.styles.imgIconCoffee, iconAnim, iconAnimOrder] }),
                react_1["default"].createElement(AppText_1["default"], { text: "\u0110\u1ECBa ch\u1EC9 giao h\u00E0ng", animated: true, style: [textTitleLocationAnim, textTitleLocationAnimOrder] })),
            react_1["default"].createElement(AppText_1["default"], { text: !index_1.Helper.isNullOrUndefined(locationCurrent) &&
                    locationCurrent.length > 0
                    ? locationCurrent[0].address.label
                    : 'Giao hàng tận nơi', textFont: "bold", animated: true, style: [textLocationAnim, textLocationAnimOrder], numberOfLines: 1 })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirectionRow, styles_1.styles.btnGoCart], onPress: function () {
                return setShowBottomSheet
                    ? setShowBottomSheet(true)
                    : setShowBottomSheetOrder(true);
            } },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.boxQuantity },
                react_1["default"].createElement(AppText_1["default"], { text: "5", textColor: constants_1.COLORS.PRIMARY_COLOR, textSize: 13, textFont: "bold" })),
            react_1["default"].createElement(AppText_1["default"], { text: "255.000\u0111", textColor: constants_1.COLORS.WHITE_COLOR, textFont: "bold", style: styles_1.styles.totalPrice, textSize: 15 }))));
};
exports["default"] = BoxLocation;
