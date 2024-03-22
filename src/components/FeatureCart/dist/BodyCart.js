"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var AppText_1 = require("@components/Custom/AppText");
var constants_1 = require("../../constants");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_redux_1 = require("react-redux");
var index_1 = require("@common/index");
var AppDraggaleBottomSheet_1 = require("@components/Custom/AppDraggaleBottomSheet");
var OptionBuyProduct_1 = require("@components/OptionBuyProduct");
var react_native_swipe_list_view_1 = require("react-native-swipe-list-view");
var client_1 = require("@apollo/client");
var serviceLineProductByCate_1 = require("@graphQL/services/serviceLineProductByCate");
var cartAction_1 = require("@redux/action/cartAction");
var BodyCart = function (showBottomSheetCart, setShowBottomSheetCart) {
    var _a;
    var locationUser = react_redux_1.useSelector(function (state) { return state.getLocationUserReducer.items; });
    var listProductCart = react_redux_1.useSelector(function (state) { return state.setCartReducer.listProduct; });
    var _b = react_1.useState(false), showBottomSheet = _b[0], setShowBottomSheet = _b[1];
    var _c = react_1.useState(), chooseProduct = _c[0], setChooseProduct = _c[1];
    var _d = react_1.useState({
        productId: 0,
        productName: '',
        size: '',
        totalPrice: 0,
        listTopping: [],
        quantity: 1,
        iD_Cate: 0,
        note: ''
    }), addSelectProduct = _d[0], setAddSelectProduct = _d[1];
    var _e = react_1.useState([]), listProduct = _e[0], setListProduct = _e[1];
    var dispatch = react_redux_1.useDispatch();
    var client = client_1.useApolloClient();
    react_1.useEffect(function () {
        if (!index_1.Helper.isNullOrUndefined(listProductCart) &&
            listProductCart.length > 0) {
            setListProduct(listProductCart);
        }
        else {
            setListProduct([]);
        }
    }, [listProductCart.length, showBottomSheetCart]);
    var renderProduct = function (data) {
        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [[styles_1.styles.flexDirection, styles_1.styles.viewItem, styles_1.styles.aboveRow]], onPress: function () {
                updateItemProduct(data.index);
            }, key: "itemProduct-" + data.index, activeOpacity: 1 },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.leftItem },
                react_1["default"].createElement(AppText_1["default"], { text: data.item.quantity + " x " + data.item.productName, textFont: "bold" }),
                react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatSize(data.item.size) }),
                !index_1.Helper.isNullOrUndefined(data.item.listTopping) &&
                    data.item.listTopping.length > 0 &&
                    data.item.listTopping.map(function (val, index) {
                        return (react_1["default"].createElement(react_native_1.View, { key: "topping-" + index },
                            react_1["default"].createElement(AppText_1["default"], { text: val.toppingName })));
                    })),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.rightItem },
                react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice(data.item.totalPrice) }))));
    };
    var renderHandleProduct = function (data, rowMap) {
        return (react_1["default"].createElement(react_native_1.View, { key: "hidden-" + data.index, style: styles_1.styles.rowBack },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.btnHidden, styles_1.styles.btnUpdate], onPress: function () {
                    updateItemProduct(data.index);
                } },
                react_1["default"].createElement(Ionicons_1["default"], { name: "pencil", size: 20, color: constants_1.COLORS.WHITE_COLOR }),
                react_1["default"].createElement(AppText_1["default"], { text: "S\u1EEDa", textFont: "bold", textColor: constants_1.COLORS.WHITE_COLOR })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.btnHidden, styles_1.styles.btnDelete], onPress: function () { return deleteItemProduct(rowMap, data.index); } },
                react_1["default"].createElement(Ionicons_1["default"], { name: "trash-bin", size: 20, color: constants_1.COLORS.WHITE_COLOR }),
                react_1["default"].createElement(AppText_1["default"], { text: "X\u00F3a", textFont: "bold", textColor: constants_1.COLORS.WHITE_COLOR }))));
    };
    var updateItemProduct = function (indexItem) {
        var _a;
        var getProduct = client.readQuery({
            query: serviceLineProductByCate_1.getProductByCate.query
        });
        setShowBottomSheet(true);
        setChooseProduct((_a = getProduct === null || getProduct === void 0 ? void 0 : getProduct.getProductByCate.find(function (x) { return x.categoryId === listProduct[indexItem].iD_Cate; })) === null || _a === void 0 ? void 0 : _a.listProduct.find(function (x) { return x.productId === listProduct[indexItem].productId; }));
        setAddSelectProduct(listProduct[indexItem]);
    };
    var deleteItemProduct = function (rowMap, indexItem) {
        var newData = __spreadArrays(listProduct);
        var prevIndex = listProduct.findIndex(function (value, index) { return index === indexItem; });
        newData.splice(prevIndex, 1);
        dispatch(cartAction_1.deleteProductCart(prevIndex));
        setListProduct(newData);
        if (rowMap[indexItem]) {
            rowMap[indexItem].closeRow();
        }
    };
    var totalPriceBeforeShip = function () {
        var total = 0;
        listProduct.map(function (x) { return (total += x.totalPrice); });
        return total;
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.bodyContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewBody },
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.viewTitle] },
                react_1["default"].createElement(AppText_1["default"], { text: "Giao h\u00E0ng t\u1EADn n\u01A1i", textFont: "bold", style: styles_1.styles.txtTitle }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnPlus },
                    react_1["default"].createElement(AppText_1["default"], { text: "Thay \u0111\u1ED5i", textFont: "bold", textColor: constants_1.COLORS.PRIMARY_COLOR }))),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.viewLocation] },
                react_1["default"].createElement(react_native_1.View, { style: { paddingRight: 15, flex: 1 } },
                    react_1["default"].createElement(AppText_1["default"], { text: !index_1.Helper.isNullOrUndefined(locationUser) &&
                            locationUser.length > 0
                            ? locationUser[0].address.street
                            : 'Vui lòng thêm địa chỉ', textFont: "bold", style: styles_1.styles.txtItem }),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.spacingTxtAddress }),
                    react_1["default"].createElement(AppText_1["default"], { text: !index_1.Helper.isNullOrUndefined(locationUser) &&
                            locationUser.length > 0
                            ? locationUser[0].address.label
                            : 'HCoffee sẽ giao hàng tận nơi', style: styles_1.styles.txtItem, numberOfLines: 2 })),
                react_1["default"].createElement(Ionicons_1["default"], { name: "chevron-forward", size: 20 })),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.boxInput },
                react_1["default"].createElement(react_native_1.TextInput, { underlineColorAndroid: "transparent", placeholder: "Th\u00EAm h\u01B0\u1EDBng d\u1EABn giao h\u00E0ng", style: styles_1.styles.txtItem })),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.flexDirection },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.infoUser },
                    react_1["default"].createElement(AppText_1["default"], { text: "H\u1ECD t\u00EAn kh\u00E1ch h\u00E0ng", style: styles_1.styles.txtItem }),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.spacingTxtInfo }),
                    react_1["default"].createElement(AppText_1["default"], { text: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", style: styles_1.styles.txtItem })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.spacingInfoUser }),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.infoUser },
                    react_1["default"].createElement(AppText_1["default"], { text: "H\u1ECD t\u00EAn kh\u00E1ch h\u00E0ng", style: styles_1.styles.txtItem }),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.spacingTxtInfo }),
                    react_1["default"].createElement(AppText_1["default"], { text: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", style: styles_1.styles.txtItem })))),
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewBody },
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.viewTitle] },
                react_1["default"].createElement(AppText_1["default"], { text: "S\u1EA3n ph\u1EA9m \u0111\u00E3 ch\u1ECDn", textFont: "bold", style: styles_1.styles.txtTitle }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnPlus },
                    react_1["default"].createElement(AppText_1["default"], { text: "+ Th\u00EAm", textFont: "bold", textColor: constants_1.COLORS.PRIMARY_COLOR }))),
            !index_1.Helper.isNullOrUndefined(listProduct) && listProduct.length > 0 && (react_1["default"].createElement(react_native_swipe_list_view_1.SwipeListView, { scrollEnabled: false, data: listProduct, renderItem: renderProduct, renderHiddenItem: renderHandleProduct, disableRightSwipe: true, stopRightSwipe: -150, rightOpenValue: -150, previewRowKey: '0' }))),
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewBody },
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.viewTitle] },
                react_1["default"].createElement(AppText_1["default"], { text: "T\u1ED5ng c\u1ED9ng", textFont: "bold", style: styles_1.styles.txtTitle })),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.viewItem] },
                react_1["default"].createElement(AppText_1["default"], { text: "Th\u00E0nh ti\u1EC1n", style: styles_1.styles.txtItem }),
                react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice(totalPriceBeforeShip()), style: styles_1.styles.txtItem })),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.viewItem] },
                react_1["default"].createElement(AppText_1["default"], { text: "Ph\u00ED giao h\u00E0ng", style: styles_1.styles.txtItem }),
                react_1["default"].createElement(AppText_1["default"], { text: "18.000\u0111", style: styles_1.styles.txtItem })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.viewItem] },
                react_1["default"].createElement(AppText_1["default"], { text: "Ch\u1ECDn khuy\u1EBFn m\u00E3i", style: styles_1.styles.txtItem }),
                react_1["default"].createElement(Ionicons_1["default"], { name: "chevron-forward", size: 20 })),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.viewItem] },
                react_1["default"].createElement(AppText_1["default"], { text: "S\u1ED1 ti\u1EC1n thanh to\u00E1n", textFont: "bold", style: styles_1.styles.txtItem }),
                react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice(totalPriceBeforeShip() + 18000), textFont: "bold", style: styles_1.styles.txtItem }))),
        react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.viewBody, { paddingBottom: 30 }] },
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.viewTitle] },
                react_1["default"].createElement(AppText_1["default"], { text: "Thanh to\u00E1n", textFont: "bold", style: styles_1.styles.txtTitle })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1.styles.flexDirection, styles_1.styles.viewItem] },
                react_1["default"].createElement(AppText_1["default"], { text: "Ch\u1ECDn ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n", style: styles_1.styles.txtItem }),
                react_1["default"].createElement(Ionicons_1["default"], { name: "chevron-forward", size: 20 }))),
        react_1["default"].createElement(AppDraggaleBottomSheet_1["default"], { showBottomSheet: showBottomSheet, setShowBottomSheet: setShowBottomSheet, HeaderBottomSheetComponent: OptionBuyProduct_1.HeaderOptionBuy((_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.productName) !== null && _a !== void 0 ? _a : ''), BodyBottomSheetComponent: OptionBuyProduct_1.BodyOptionBuy({
                showBottomSheet: showBottomSheet,
                chooseProduct: chooseProduct,
                addSelectProduct: addSelectProduct,
                setAddSelectProduct: setAddSelectProduct,
                updateItem: true
            }), FooterBottoomSheetComponent: OptionBuyProduct_1.FooterOptionBuy({
                showBottomSheet: showBottomSheet,
                addSelectProduct: addSelectProduct,
                chooseProduct: chooseProduct,
                setAddSelectProduct: setAddSelectProduct,
                setShowBottomSheet: setShowBottomSheet,
                updateItem: true
            }) })));
};
exports["default"] = BodyCart;
