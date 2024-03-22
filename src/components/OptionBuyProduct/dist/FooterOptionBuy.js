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
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var AppText_1 = require("@components/Custom/AppText");
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var constants_1 = require("../../constants");
var index_1 = require("@common/index");
var react_redux_1 = require("react-redux");
var cartAction_1 = require("@redux/action/cartAction");
var FooterOptionBuy = function (_a) {
    var showBottomSheet = _a.showBottomSheet, chooseProduct = _a.chooseProduct, addSelectProduct = _a.addSelectProduct, setAddSelectProduct = _a.setAddSelectProduct, setShowBottomSheet = _a.setShowBottomSheet, updateItem = _a.updateItem;
    var _b = react_1.useState(1), quantity = _b[0], setQuantity = _b[1];
    var _c = react_1.useState(0), totalPrice = _c[0], setTotalPrice = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var addToCart = function () {
        dispatch(cartAction_1.setCart(addSelectProduct));
        setShowBottomSheet(false);
    };
    var updateCart = function () {
        // console.log('UPDATE CART', addSelectProduct);
        dispatch(cartAction_1.updateCartAction(addSelectProduct));
        setShowBottomSheet(false);
    };
    // useEffect(() => {
    //   setTotalPrice(
    //     Helper.getPriceSize(
    //       Helper.getFirstSize(
    //         chooseProduct?.smallPrice ?? 0,
    //         chooseProduct?.mediumPrice ?? 0,
    //       ),
    //       chooseProduct,
    //     ),
    //   );
    // }, [chooseProduct]);
    // useEffect(() => {
    //   if (updateItem) {
    //     console.log('updateItem', addSelectProduct);
    //     setAddSelectProduct(addSelectProduct);
    //   }
    // }, [addSelectProduct]);
    // useEffect(() => {
    //   if (!Helper.isNullOrUndefined(chooseProduct)) {
    //     if (!updateItem) {
    //       setTotalPrice(
    //         Helper.getPriceSize(addSelectProduct.size, chooseProduct),
    //       );
    //     }
    //   }
    // }, [chooseProduct]);
    react_1.useEffect(function () {
        var _a, _b;
        if (showBottomSheet) {
            if (updateItem) {
                setTotalPrice(addSelectProduct.totalPrice);
                setQuantity(addSelectProduct.quantity);
            }
            else {
                setQuantity(1);
                setTotalPrice(index_1.Helper.getPriceSize(index_1.Helper.getFirstSize((_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.smallPrice) !== null && _a !== void 0 ? _a : 0, (_b = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.mediumPrice) !== null && _b !== void 0 ? _b : 0), chooseProduct));
            }
        }
    }, [showBottomSheet]);
    react_1.useEffect(function () {
        setAddSelectProduct(function (oldValue) {
            var _a, _b, _c;
            return (__assign(__assign({}, oldValue), { productId: (_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.productId) !== null && _a !== void 0 ? _a : 0, productName: (_b = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.productName) !== null && _b !== void 0 ? _b : '', iD_Cate: (_c = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.iD_Cate) !== null && _c !== void 0 ? _c : 0, quantity: quantity, totalPrice: (index_1.Helper.getPriceSize(oldValue.size, chooseProduct) +
                    index_1.Helper.getPriceCheckTopping(oldValue.listTopping)) *
                    quantity }));
        });
        setTotalPrice((index_1.Helper.getPriceSize(addSelectProduct.size, chooseProduct) +
            index_1.Helper.getPriceCheckTopping(addSelectProduct.listTopping)) *
            quantity);
    }, [quantity, addSelectProduct.totalPrice]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.containerFooter },
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewQuantity },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnQuantỉty, onPress: function () { return setQuantity(function (oldValue) { return oldValue + 1; }); } },
                react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "plus", size: 20, color: constants_1.COLORS.PRIMARY_COLOR })),
            react_1["default"].createElement(AppText_1["default"], { text: quantity === null || quantity === void 0 ? void 0 : quantity.toString() }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnQuantỉty, onPress: function () { return setQuantity(function (oldValue) { return oldValue - 1; }); }, disabled: quantity === 1 ? true : false },
                react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "minus", size: 20, color: constants_1.COLORS.PRIMARY_COLOR }))),
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewBtnBuy },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnBuy, onPress: function () {
                    updateItem ? updateCart() : addToCart();
                    // animatedHideOrShow('hide');
                } },
                react_1["default"].createElement(AppText_1["default"], { text: (updateItem ? 'Thay đổi' : 'Chọn') + " " + index_1.Helper.formatPrice(totalPrice), textFont: "bold", textColor: constants_1.COLORS.WHITE_COLOR, textSize: 16 })))));
};
exports["default"] = FooterOptionBuy;
