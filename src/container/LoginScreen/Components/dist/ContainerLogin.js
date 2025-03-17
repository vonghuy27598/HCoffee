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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var constants_1 = require("../../../constants");
var AppText_1 = require("@components/Custom/AppText");
var react_native_2 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var native_1 = require("@react-navigation/native");
var index_1 = require("@common/index");
var AppDraggaleBottomSheet_1 = require("@components/Custom/AppDraggaleBottomSheet");
var react_redux_1 = require("react-redux");
var userAction_1 = require("@redux/action/userAction");
var ContainerLogin = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(false), focusInput = _a[0], setFocusInput = _a[1];
    var _b = react_1.useState(''), phoneNumber = _b[0], setPhoneNumber = _b[1];
    var textRef1 = react_1.useRef(null);
    var textRef2 = react_1.useRef(null);
    var textRef3 = react_1.useRef(null);
    var textRef4 = react_1.useRef(null);
    var textRef5 = react_1.useRef(null);
    var textRef6 = react_1.useRef(null);
    var _c = react_1.useState([]), textCode = _c[0], setTextCode = _c[1];
    var _d = react_1.useState(false), showBottomSheet = _d[0], setShowBottomSheet = _d[1];
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (!focusInput)
            react_native_1.Keyboard.dismiss();
    }, [focusInput]);
    react_1.useEffect(function () {
        setTextCode([]);
    }, [showBottomSheet]);
    var handleLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formatPhone;
        return __generator(this, function (_a) {
            if (index_1.Helper.isPhoneNumber(phoneNumber)) {
                formatPhone = phoneNumber.replace('0', '84');
                console.log('PHONE', formatPhone);
                dispatch(userAction_1.requestOTP(formatPhone));
                react_native_1.Keyboard.dismiss();
                setShowBottomSheet(true);
            }
            else {
                react_native_1.Alert.alert('Có lỗi', 'Số điện thoại không đúng dịnh dạng');
            }
            return [2 /*return*/];
        });
    }); };
    var updateTextCode = function (index, newValue) {
        setTextCode(function (preVal) {
            var newArr = __spreadArrays(preVal);
            newArr[index] = newValue;
            return newArr;
        });
        if (!index_1.Helper.isNullOrUndefined(newValue)) {
            checkInputText(index);
        }
    };
    var checkInputText = function (index) {
        var _a, _b, _c, _d, _e;
        switch (index) {
            case 0:
                (_a = textRef2.current) === null || _a === void 0 ? void 0 : _a.focus();
                break;
            case 1:
                (_b = textRef3.current) === null || _b === void 0 ? void 0 : _b.focus();
                break;
            case 2:
                (_c = textRef4.current) === null || _c === void 0 ? void 0 : _c.focus();
                break;
            case 3:
                (_d = textRef5.current) === null || _d === void 0 ? void 0 : _d.focus();
                break;
            case 4:
                (_e = textRef6.current) === null || _e === void 0 ? void 0 : _e.focus();
                break;
        }
    };
    react_1.useEffect(function () {
        console.log('TEXTCODE', textCode);
        var checkSize = textCode.filter(function (x) { return !index_1.Helper.isNullOrUndefined(x); }).length;
        if (checkSize === 6)
            checkVerifyMess(textCode.join(',').replaceAll(',', ''));
    }, [textCode]);
    var checkVerifyMess = function (code) { return __awaiter(void 0, void 0, void 0, function () {
        var formatPhone;
        return __generator(this, function (_a) {
            try {
                console.log('TEXT', code);
                formatPhone = phoneNumber.replace('0', '84');
                dispatch(userAction_1.sendOTP(formatPhone, code, navigation));
            }
            catch (error) {
                console.log('Invalid code.');
            }
            return [2 /*return*/];
        });
    }); };
    var checkDeleteText = function (nativeEvent, index) {
        var _a, _b, _c, _d, _e;
        if (nativeEvent.key === 'Backspace') {
            switch (index) {
                case 1:
                    (_a = textRef1.current) === null || _a === void 0 ? void 0 : _a.focus();
                    break;
                case 2:
                    (_b = textRef2.current) === null || _b === void 0 ? void 0 : _b.focus();
                    break;
                case 3:
                    (_c = textRef3.current) === null || _c === void 0 ? void 0 : _c.focus();
                    break;
                case 4:
                    (_d = textRef4.current) === null || _d === void 0 ? void 0 : _d.focus();
                    break;
                case 5:
                    (_e = textRef5.current) === null || _e === void 0 ? void 0 : _e.focus();
                    break;
            }
        }
    };
    var BodyVerifyScreen = function () {
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.bodyBottomSheet },
            react_1["default"].createElement(AppText_1["default"], { text: "Vui l\u00F2ng nh\u1EADp m\u00E3 x\u00E1c th\u1EF1c!", textFont: "bold", textSize: 16 }),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.contentVerify },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.verifyBox },
                    react_1["default"].createElement(react_native_1.TextInput, { ref: textRef1, numberOfLines: 1, maxLength: 1, inputMode: "numeric", value: textCode[0], style: styles_1.styles.textInputVerify, onChangeText: function (text) { return updateTextCode(0, text); }, autoFocus: showBottomSheet, onKeyPress: function (_a) {
                            var nativeEvent = _a.nativeEvent;
                            return checkDeleteText(nativeEvent, 0);
                        } })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.verifyBox },
                    react_1["default"].createElement(react_native_1.TextInput, { ref: textRef2, numberOfLines: 1, maxLength: 1, value: textCode[1], inputMode: "numeric", style: styles_1.styles.textInputVerify, onChangeText: function (text) { return updateTextCode(1, text); }, onKeyPress: function (_a) {
                            var nativeEvent = _a.nativeEvent;
                            return checkDeleteText(nativeEvent, 1);
                        } })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.verifyBox },
                    react_1["default"].createElement(react_native_1.TextInput, { ref: textRef3, numberOfLines: 1, maxLength: 1, value: textCode[2], inputMode: "numeric", style: styles_1.styles.textInputVerify, onChangeText: function (text) { return updateTextCode(2, text); }, onKeyPress: function (_a) {
                            var nativeEvent = _a.nativeEvent;
                            return checkDeleteText(nativeEvent, 2);
                        } })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.verifyBox },
                    react_1["default"].createElement(react_native_1.TextInput, { ref: textRef4, numberOfLines: 1, maxLength: 1, value: textCode[3], inputMode: "numeric", style: styles_1.styles.textInputVerify, onChangeText: function (text) { return updateTextCode(3, text); }, onKeyPress: function (_a) {
                            var nativeEvent = _a.nativeEvent;
                            return checkDeleteText(nativeEvent, 3);
                        } })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.verifyBox },
                    react_1["default"].createElement(react_native_1.TextInput, { ref: textRef5, numberOfLines: 1, maxLength: 1, value: textCode[4], inputMode: "numeric", style: styles_1.styles.textInputVerify, onChangeText: function (text) { return updateTextCode(4, text); }, onKeyPress: function (_a) {
                            var nativeEvent = _a.nativeEvent;
                            return checkDeleteText(nativeEvent, 4);
                        } })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.verifyBox },
                    react_1["default"].createElement(react_native_1.TextInput, { ref: textRef6, numberOfLines: 1, maxLength: 1, value: textCode[5], inputMode: "numeric", style: styles_1.styles.textInputVerify, onChangeText: function (text) { return updateTextCode(5, text); }, onKeyPress: function (_a) {
                            var nativeEvent = _a.nativeEvent;
                            return checkDeleteText(nativeEvent, 5);
                        } })))));
    };
    var HeaderVerifyScreen = function () {
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.headerBottomSheet },
            react_1["default"].createElement(AppText_1["default"], { text: "X\u00E1c th\u1EF1c OTP", textFont: "bold", textSize: 20 }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnToggleClose, onPress: function () { return setShowBottomSheet(false); } },
                react_1["default"].createElement(Ionicons_1["default"], { name: "close", size: 25 }))));
    };
    var bottom = react_1.useMemo(function () {
        return (react_1["default"].createElement(AppDraggaleBottomSheet_1["default"], { maxHeightBottomSheet: "100%", showBottomSheet: showBottomSheet, setShowBottomSheet: setShowBottomSheet, HeaderBottomSheetComponent: HeaderVerifyScreen(), BodyBottomSheetComponent: BodyVerifyScreen() }));
    }, [showBottomSheet]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.containerLogin },
        react_1["default"].createElement(react_native_2.TouchableNativeFeedback, { style: styles_1.styles.containerLogin, onPress: function () { return setFocusInput(false); } },
            react_1["default"].createElement(react_native_1.ImageBackground, { source: constants_1.IMAGES.BG_LOGIN, style: styles_1.styles.backgroundLogin, resizeMode: "stretch" },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewLogin },
                    react_1["default"].createElement(AppText_1["default"], { text: "CH\u00C0O B\u1EA0N", textFont: "bold", textSize: 25, textColor: constants_1.COLORS.WHITE_COLOR }),
                    react_1["default"].createElement(react_native_1.View, { style: [
                            styles_1.styles.viewTextInput,
                            focusInput && {
                                borderColor: constants_1.COLORS.PRIMARY_COLOR,
                                borderWidth: 1
                            },
                        ] },
                        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewCountry },
                            react_1["default"].createElement(AppText_1["default"], { text: "+84", textSize: 17 })),
                        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewTextBox },
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles_1.styles.textInput, placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i", numberOfLines: 1, maxLength: 10, onChangeText: function (value) { return setPhoneNumber(value); }, cursorColor: constants_1.COLORS.PRIMARY_COLOR, inputMode: "tel", onFocus: function () { return setFocusInput(true); } }))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                            styles_1.styles.btnLogin,
                            phoneNumber.length < 10 ? styles_1.styles.btnDisable : styles_1.styles.btnEnable,
                        ], disabled: phoneNumber.length < 10, onPress: function () { return handleLogin(); } },
                        react_1["default"].createElement(AppText_1["default"], { text: "\u0110\u0103ng nh\u1EADp", textFont: "bold", textColor: phoneNumber.length < 10
                                ? constants_1.COLORS.GRAY_e3e3e3_COLOR
                                : constants_1.COLORS.WHITE_COLOR }))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnCloseLogin, onPress: function () { return navigation.goBack(); } },
                    react_1["default"].createElement(Ionicons_1["default"], { name: "close", size: 20, color: constants_1.COLORS.WHITE_COLOR })))),
        bottom));
};
exports["default"] = ContainerLogin;
