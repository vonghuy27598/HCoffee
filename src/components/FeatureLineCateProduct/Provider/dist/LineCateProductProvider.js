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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useLineCateProduct = exports.LineCateProductProvider = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var client_1 = require("@apollo/client");
var serviceLineProductByCate_1 = require("@graphQL/services/serviceLineProductByCate");
var categoryAction_1 = require("@redux/action/categoryAction");
var HomeProvider_1 = require("@container/HomeScreen/Provider/HomeProvider");
var native_1 = require("@react-navigation/native");
var OrderProvider_1 = require("@container/OrderScreen/Provider/OrderProvider");
var serviceGetAllTopping_1 = require("@graphQL/services/serviceGetAllTopping");
var cartAction_1 = require("@redux/action/cartAction");
var index_1 = require("@common/index");
var LineCateProductContext = react_1.createContext({});
var LineCateProductProvider = function (_a) {
    var _b;
    var children = _a.children;
    var _c = HomeProvider_1.useHome(), scrollRefHome = _c.scrollRefHome, distanceCategoryHome = _c.distanceCategoryHome;
    var scrollOrderRef = OrderProvider_1.useOrder().scrollOrderRef;
    var _d = react_1.useState(false), showBottomSheet = _d[0], setShowBottomSheet = _d[1];
    var _e = react_1.useState(), chooseProduct = _e[0], setChooseProduct = _e[1];
    var _f = react_1.useState([]), listTopping = _f[0], setListTopping = _f[1];
    var _g = react_1.useState(!index_1.Helper.checkZeroPrice((_b = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.smallPrice) !== null && _b !== void 0 ? _b : 0)
        ? 'smallPrice'
        : 'mediumPrice'), checkSize = _g[0], setCheckSize = _g[1];
    var _h = react_1.useState(1), quantity = _h[0], setQuantity = _h[1];
    var _j = react_1.useState(0), totalPrice = _j[0], setTotalPrice = _j[1];
    var navigate = native_1.useNavigation();
    var indexCurrentScreen = navigate.getState().index;
    var currentScreen = react_1.useRef('');
    var isFocused = native_1.useIsFocused();
    var _k = react_1.useState([]), arrPosition = _k[0], setArrPosition = _k[1];
    if (isFocused) {
        currentScreen.current = navigate.getState().routeNames[indexCurrentScreen];
    }
    var _l = react_1.useState(0), distanceLineProductCate = _l[0], setDistaceLineProductCate = _l[1];
    var _m = react_1.useState(0), heightBoxCate = _m[0], setHeightBoxCate = _m[1];
    var _o = react_1.useState(), heightLineCate = _o[0], setHeightLineCate = _o[1];
    var dispatch = react_redux_1.useDispatch();
    var _p = react_redux_1.useSelector(function (state) { return state.getCategoryReducer; }), dataCategory = _p.dataCategory, isLoadingCategory = _p.isLoadingCategory;
    var dataPosition = react_redux_1.useSelector(function (state) { return state.setPositionCategory; }).dataPosition;
    var dataSelectBuy = react_redux_1.useSelector(function (state) { return state.selectOptionBuyReducer; });
    var listSelectTopping = react_redux_1.useSelector(function (state) { return state.selectToppingReducer; }).listSelectTopping;
    var refreshBottomSheet = function (listSelect, product) {
        var _a, _b, _c, _d, _e;
        var checkDefaultSize = '';
        var checkDefaultTotalPrice = 0;
        if (!index_1.Helper.checkZeroPrice((_a = product === null || product === void 0 ? void 0 : product.smallPrice) !== null && _a !== void 0 ? _a : 0)) {
            checkDefaultSize = 'smallPrice';
            checkDefaultTotalPrice = (_b = product === null || product === void 0 ? void 0 : product.smallPrice) !== null && _b !== void 0 ? _b : 0;
        }
        else if (!index_1.Helper.checkZeroPrice((_c = product === null || product === void 0 ? void 0 : product.mediumPrice) !== null && _c !== void 0 ? _c : 0)) {
            checkDefaultSize = 'mediumPrice';
            checkDefaultTotalPrice = (_d = product === null || product === void 0 ? void 0 : product.mediumPrice) !== null && _d !== void 0 ? _d : 0;
        }
        else {
            checkDefaultSize = 'bigPrice';
            checkDefaultTotalPrice = (_e = product === null || product === void 0 ? void 0 : product.bigPrice) !== null && _e !== void 0 ? _e : 0;
        }
        setCheckSize(checkDefaultSize);
        setTotalPrice(checkDefaultTotalPrice);
        setQuantity(1);
        setSelectTopping(listSelect);
    };
    var getPriceSize = function (size) {
        var _a, _b, _c;
        if (size === 'smallPrice') {
            return (_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.smallPrice) !== null && _a !== void 0 ? _a : 0;
        }
        else if (size === 'mediumPrice') {
            return (_b = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.mediumPrice) !== null && _b !== void 0 ? _b : 0;
        }
        return (_c = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.bigPrice) !== null && _c !== void 0 ? _c : 0;
    };
    var getPriceCheckTopping = function (listToppingChecked) {
        var sumPriceTopping = 0;
        listToppingChecked
            .filter(function (x) { return x.checked; })
            .forEach(function (x) { return (sumPriceTopping += x.price); });
        return sumPriceTopping;
    };
    react_1.useEffect(function () {
        var _a, _b;
        if (!index_1.Helper.isNullOrUndefined(chooseProduct) &&
            !index_1.Helper.isNullOrUndefined(listSelectTopping)) {
            setTotalPrice(getPriceSize(checkSize) * quantity +
                getPriceCheckTopping(listSelectTopping));
            var data = {
                productId: (_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.productId) !== null && _a !== void 0 ? _a : 0,
                productName: (_b = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.productName) !== null && _b !== void 0 ? _b : '',
                quantity: quantity,
                size: checkSize,
                listTopping: listSelectTopping.filter(function (x) { return x.checked; }),
                totalPrice: totalPrice,
                note: ''
            };
            dispatch(cartAction_1.selectOptionBuy(data));
        }
    }, [listSelectTopping, checkSize, quantity, totalPrice]);
    var setSelectTopping = function (listSelect) {
        setTotalPrice(getPriceSize(checkSize) * quantity +
            getPriceCheckTopping(listSelectTopping));
        dispatch(cartAction_1.selectTopping(listSelect));
    };
    var handleChooseCategory = function (itemIndex) {
        var _a;
        var temp = dataPosition.find(function (x) { return x.screenName === currentScreen.current; });
        var offSetY = (_a = temp === null || temp === void 0 ? void 0 : temp.listPosition[itemIndex].layout) !== null && _a !== void 0 ? _a : 0; // set default offsetY = first position line cate
        scrollToCategory(offSetY);
    };
    var scrollToCategory = function (offSetY) {
        var _a, _b;
        if (currentScreen.current === 'HomeTab') {
            console.log('SCROLL TOOO', distanceCategoryHome, heightBoxCate, distanceLineProductCate, offSetY);
            (_a = scrollRefHome.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                y: offSetY,
                animated: true
            });
        }
        else if (currentScreen.current === 'OrderTab') {
            (_b = scrollOrderRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
                y: offSetY,
                animated: true
            });
        }
    };
    var _q = client_1.useQuery(serviceLineProductByCate_1.getProductByCate.query, {
        onCompleted: function (data) {
            console.log('DATA QUERY GET PRODUCT BY CATE', data === null || data === void 0 ? void 0 : data.getProductByCate, serviceLineProductByCate_1.getProductByCate.query);
        },
        onError: function (error) {
            console.log('GET LINE PRODUCT BY CATE FAILED', error);
        }
    }), loadingProduct = _q.loading, errorProduct = _q.error, dataProduct = _q.data;
    var _r = client_1.useQuery(serviceGetAllTopping_1.getAllTopping.query, {
        onCompleted: function (data) {
            console.log('DATA QUERY GET ALL TOPPING', data, serviceGetAllTopping_1.getAllTopping.query);
        },
        onError: function (error) {
            console.log('QUERY GET ALL TOPPING FAILED', error);
        }
    }), loadingTopping = _r.loading, errorTopping = _r.error, dataToppingQL = _r.data;
    var selectProduct = function (idCateName, idProduct) {
        var _a, _b, _c;
        var getProduct = (_b = (_a = dataProduct === null || dataProduct === void 0 ? void 0 : dataProduct.getProductByCate) === null || _a === void 0 ? void 0 : _a.find(function (x) { return x.categoryId === idCateName; })) === null || _b === void 0 ? void 0 : _b.listProduct.find(function (x) { return x.productId === idProduct; });
        setChooseProduct(getProduct);
        getTopping((_c = getProduct === null || getProduct === void 0 ? void 0 : getProduct.iD_TypeTopping) !== null && _c !== void 0 ? _c : [], getProduct);
    };
    var addToCart = function () {
        dispatch(cartAction_1.setCart(dataSelectBuy));
        setShowBottomSheet(false);
    };
    var getTopping = function (listIdTopping, product) { return __awaiter(void 0, void 0, void 0, function () {
        var listTemp, listSelect;
        return __generator(this, function (_a) {
            listTemp = dataToppingQL === null || dataToppingQL === void 0 ? void 0 : dataToppingQL.allListTopping.filter(function (item) {
                return listIdTopping.includes(item.toppingId);
            });
            setListTopping(listTemp !== null && listTemp !== void 0 ? listTemp : []);
            listSelect = listTemp === null || listTemp === void 0 ? void 0 : listTemp.map(function (val) {
                return __assign(__assign({}, val), { checked: false });
            });
            refreshBottomSheet(listSelect, product);
            setSelectTopping(listSelect);
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        if (arrPosition.length > 0 && arrPosition.length === dataCategory.length) {
            dispatch(categoryAction_1.setPositionCategory({
                screenName: currentScreen.current,
                listPosition: arrPosition
            }));
        }
    }, [arrPosition]);
    var setPosition = function (index, cateName) {
        var logicDistancePosition = 0;
        if (currentScreen.current === 'HomeTab') {
            logicDistancePosition +=
                distanceCategoryHome -
                    68.4 + // height header
                    +heightBoxCate +
                    20 + // 20 marginVertical
                    distanceLineProductCate; // marginVertical of line cate
        }
        else if (currentScreen.current === 'OrderTab') {
            logicDistancePosition +=
                // 0 -
                // 68.4 + // height header
                heightBoxCate +
                    20 + // 20 marginVertical
                    distanceLineProductCate; // marginVertical of line cate
        }
        var layoutCate = 0;
        for (var i = 0; i <= index - 1; i++) {
            layoutCate += heightLineCate[i] + 30; // vị trí line cate đầu tiên sẽ bằng với giá trị tính loginDistacePostion, các vị trí tiếp theo sẽ + height của line trước đó
        }
        setArrPosition(__spreadArrays(arrPosition, [
            { index: index, layout: logicDistancePosition + layoutCate, cateName: cateName },
        ])); // 30 // marginVertical of line cate
    };
    var dataProvider = {
        dataCategory: dataCategory,
        dataProduct: dataProduct,
        errorProduct: errorProduct,
        handleChooseCategory: handleChooseCategory,
        isLoadingCategory: isLoadingCategory,
        loadingProduct: loadingProduct,
        setPosition: setPosition,
        distanceLineProductCate: distanceLineProductCate,
        setDistaceLineProductCate: setDistaceLineProductCate,
        navigate: navigate,
        currentScreen: currentScreen,
        setHeightBoxCate: setHeightBoxCate,
        selectProduct: selectProduct,
        chooseProduct: chooseProduct,
        checkSize: checkSize,
        setCheckSize: setCheckSize,
        listTopping: listTopping,
        setListTopping: setListTopping,
        getTopping: getTopping,
        setSelectTopping: setSelectTopping,
        listSelectTopping: listSelectTopping,
        quantity: quantity,
        setQuantity: setQuantity,
        totalPrice: totalPrice,
        setTotalPrice: setTotalPrice,
        addToCart: addToCart,
        showBottomSheet: showBottomSheet,
        setShowBottomSheet: setShowBottomSheet,
        setHeightLineCate: setHeightLineCate,
        heightLineCate: heightLineCate
    };
    return (react_1["default"].createElement(LineCateProductContext.Provider, { value: dataProvider }, children));
};
exports.LineCateProductProvider = LineCateProductProvider;
var useLineCateProduct = function () {
    var context = react_1.useContext(LineCateProductContext);
    if (!context) {
        throw new Error('LineCateProduct context error');
    }
    return context;
};
exports.useLineCateProduct = useLineCateProduct;
