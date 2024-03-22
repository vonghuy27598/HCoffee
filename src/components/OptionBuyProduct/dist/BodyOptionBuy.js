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
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var AppText_1 = require("@components/Custom/AppText");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var styles_1 = require("./styles");
var index_1 = require("@common/index");
var constants_1 = require("../../constants");
var react_native_2 = require("react-native");
var client_1 = require("@apollo/client");
var serviceGetAllTopping_1 = require("@graphQL/services/serviceGetAllTopping");
var BodyOptionBuy = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var showBottomSheet = _a.showBottomSheet, chooseProduct = _a.chooseProduct, addSelectProduct = _a.addSelectProduct, setAddSelectProduct = _a.setAddSelectProduct, updateItem = _a.updateItem;
    var _q = react_1.useState(index_1.Helper.getFirstSize((_b = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.smallPrice) !== null && _b !== void 0 ? _b : 0, (_c = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.mediumPrice) !== null && _c !== void 0 ? _c : 0)), checkSize = _q[0], setCheckSize = _q[1];
    var _r = react_1.useState([]), listTopping = _r[0], setListTopping = _r[1];
    var _s = react_1.useState([]), selectTopping = _s[0], setSelectTopping = _s[1];
    var client = client_1.useApolloClient();
    var dataToppingQL = client.readQuery({
        query: serviceGetAllTopping_1.getAllTopping.query
    });
    var getTopping = function (listIdTopping, product) { return __awaiter(void 0, void 0, void 0, function () {
        var listTemp, listSelectB_1, listSelect;
        return __generator(this, function (_a) {
            listTemp = dataToppingQL === null || dataToppingQL === void 0 ? void 0 : dataToppingQL.allListTopping.filter(function (item) {
                return listIdTopping.includes(item.toppingId);
            });
            if (updateItem) {
                listSelectB_1 = [];
                listTemp === null || listTemp === void 0 ? void 0 : listTemp.forEach(function (val, index) {
                    var findIndexTopping = addSelectProduct.listTopping.findIndex(function (x) { return x.toppingId === val.toppingId; });
                    if (findIndexTopping >= 0) {
                        listSelectB_1.push(__assign(__assign({}, val), { checked: true }));
                    }
                    else {
                        listSelectB_1.push(__assign(__assign({}, val), { checked: false }));
                    }
                });
                setListTopping(listSelectB_1);
                setSelectTopping(listSelectB_1.filter(function (x) { return x.checked; }));
            }
            else {
                listSelect = listTemp === null || listTemp === void 0 ? void 0 : listTemp.map(function (val) {
                    return __assign(__assign({}, val), { checked: false });
                });
                setListTopping(listSelect);
                setSelectTopping([]);
            }
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        var _a, _b;
        if (!updateItem) {
            // getTopping(chooseProduct?.iD_TypeTopping ?? [], chooseProduct);
            setCheckSize(index_1.Helper.getFirstSize((_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.smallPrice) !== null && _a !== void 0 ? _a : 0, (_b = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.mediumPrice) !== null && _b !== void 0 ? _b : 0));
            setAddSelectProduct(function (oldValue) { return (__assign(__assign({}, oldValue), { size: checkSize })); });
        }
    }, [chooseProduct]);
    react_1.useEffect(function () {
        var _a;
        if (showBottomSheet) {
            if (!index_1.Helper.isNullOrUndefined(chooseProduct)) {
                getTopping((_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.iD_TypeTopping) !== null && _a !== void 0 ? _a : [], chooseProduct);
                if (updateItem) {
                    setCheckSize(addSelectProduct.size);
                }
            }
        }
    }, [showBottomSheet]);
    react_1.useEffect(function () {
        if (!index_1.Helper.isNullOrUndefined(chooseProduct) &&
            !index_1.Helper.isNullOrUndefined(listTopping)) {
            setAddSelectProduct(function (oldValue) {
                var _a, _b, _c;
                return (__assign(__assign({}, oldValue), { productId: (_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.productId) !== null && _a !== void 0 ? _a : 0, productName: (_b = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.productName) !== null && _b !== void 0 ? _b : '', iD_Cate: (_c = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.iD_Cate) !== null && _c !== void 0 ? _c : 0, size: checkSize, totalPrice: (index_1.Helper.getPriceSize(checkSize, chooseProduct) +
                        index_1.Helper.getPriceCheckTopping(listTopping)) *
                        oldValue.quantity, listTopping: selectTopping }));
            });
        }
    }, [checkSize, selectTopping]);
    return (react_1["default"].createElement(react_native_2.ScrollView, { scrollEnabled: true, style: { flex: 1 } },
        !index_1.Helper.checkLessThanOneSize([
            (_d = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.bigPrice) !== null && _d !== void 0 ? _d : 0,
            (_e = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.mediumPrice) !== null && _e !== void 0 ? _e : 0,
            (_f = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.smallPrice) !== null && _f !== void 0 ? _f : 0,
        ]) && (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.containerSize },
            react_1["default"].createElement(AppText_1["default"], { text: "Size", textFont: "bold", textSize: 15 }),
            !index_1.Helper.checkZeroPrice((_g = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.bigPrice) !== null && _g !== void 0 ? _g : 0) && (react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, style: styles_1.styles.areaTopping, onPress: function () { return setCheckSize('bigPrice'); } },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.boxRadioSize },
                    react_1["default"].createElement(react_native_paper_1.RadioButton, { value: "bigPrice", onPress: function () { return setCheckSize('bigPrice'); }, status: checkSize === 'bigPrice' ? 'checked' : 'unchecked', color: constants_1.COLORS.PRIMARY_COLOR }),
                    react_1["default"].createElement(AppText_1["default"], { text: "L\u1EDBn" })),
                react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice((_h = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.bigPrice) !== null && _h !== void 0 ? _h : 0) }))),
            !index_1.Helper.checkZeroPrice((_j = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.mediumPrice) !== null && _j !== void 0 ? _j : 0) && (react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, style: styles_1.styles.areaTopping, onPress: function () { return setCheckSize('mediumPrice'); } },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.boxRadioSize },
                    react_1["default"].createElement(react_native_paper_1.RadioButton, { value: "mediumPrice", onPress: function () { return setCheckSize('mediumPrice'); }, status: checkSize === 'mediumPrice' ? 'checked' : 'unchecked', color: constants_1.COLORS.PRIMARY_COLOR }),
                    react_1["default"].createElement(AppText_1["default"], { text: "V\u1EEBa" })),
                react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice((_k = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.mediumPrice) !== null && _k !== void 0 ? _k : 0) }))),
            !index_1.Helper.checkZeroPrice((_l = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.smallPrice) !== null && _l !== void 0 ? _l : 0) && (react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, style: styles_1.styles.areaTopping, onPress: function () { return setCheckSize('smallPrice'); } },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.boxRadioSize },
                    react_1["default"].createElement(react_native_paper_1.RadioButton, { value: "smallPrice", onPress: function () { return setCheckSize('smallPrice'); }, status: checkSize === 'smallPrice' ? 'checked' : 'unchecked', color: constants_1.COLORS.PRIMARY_COLOR }),
                    react_1["default"].createElement(AppText_1["default"], { text: "Nh\u1ECF" })),
                react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice((_m = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.smallPrice) !== null && _m !== void 0 ? _m : 0) }))))),
        ((_o = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.iD_TypeTopping.length) !== null && _o !== void 0 ? _o : 0) > 0 && (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.containerTopping },
            react_1["default"].createElement(AppText_1["default"], { text: "Topping", textFont: "bold", textSize: 15 }),
            ((_p = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.iD_TypeTopping.length) !== null && _p !== void 0 ? _p : 0) > 0 && (react_1["default"].createElement(AppText_1["default"], { text: "Ch\u1ECDn t\u1ED1i \u0111a 2 lo\u1EA1i", textColor: constants_1.COLORS.GRAY_COLOR })), listTopping === null || listTopping === void 0 ? void 0 :
            listTopping.map(function (val, index) {
                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.areaTopping, key: "listTopping-" + index, activeOpacity: 1, onPress: function () {
                        var indexFind = listTopping.findIndex(function (x) { return x.toppingId === val.toppingId; });
                        if (listTopping.filter(function (x) { return x.checked === true; }).length < 2) {
                            listTopping[indexFind].checked =
                                !listTopping[indexFind].checked;
                            setSelectTopping(listTopping.filter(function (x) { return x.checked; }));
                            setListTopping(listTopping);
                        }
                        else {
                            if (val.checked) {
                                listTopping[indexFind].checked =
                                    !listTopping[indexFind].checked;
                                setSelectTopping(listTopping.filter(function (x) { return x.checked; }));
                                setListTopping(listTopping);
                            }
                            else {
                                react_native_1.Alert.alert('Thông báo', 'Chọn tối đa 2 loại');
                            }
                        }
                        console.log('CHECK', listTopping.filter(function (x) { return x.checked === true; }).length, val.checked);
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.boxRadioSize },
                        react_1["default"].createElement(react_native_paper_1.Checkbox, { status: val.checked ? 'checked' : 'unchecked', color: constants_1.COLORS.PRIMARY_COLOR }),
                        react_1["default"].createElement(AppText_1["default"], { text: val.toppingName })),
                    react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice(val.price) })));
            })))));
};
exports["default"] = BodyOptionBuy;
