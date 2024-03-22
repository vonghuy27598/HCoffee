"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var AppText_1 = require("@components/Custom/AppText");
var constants_1 = require("../../constants");
var index_1 = require("@common/index");
var react_redux_1 = require("react-redux");
var FooterCart = function (showBottomSheetCart, setShowBottomSheetCart) {
    var _a = react_1.useState([]), listProduct = _a[0], setListProduct = _a[1];
    var listProductCart = react_redux_1.useSelector(function (state) { return state.setCartReducer.listProduct; });
    react_1.useEffect(function () {
        if (!index_1.Helper.isNullOrUndefined(listProductCart) &&
            listProductCart.length > 0) {
            setListProduct(listProductCart);
        }
        else {
            setListProduct([]);
        }
    }, [listProductCart.length, showBottomSheetCart]);
    var totalPriceBeforeShip = function () {
        var total = 0;
        listProduct.map(function (x) { return (total += x.totalPrice); });
        return total;
    };
    var quantityProduct = function () {
        var total = 0;
        listProduct.map(function (x) { return (total += x.quantity); });
        return total;
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.footerContainer] },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(AppText_1["default"], { text: "Giao h\u00E0ng: " + quantityProduct() + " s\u1EA3n ph\u1EA9m", textColor: constants_1.COLORS.WHITE_COLOR, style: styles_1.styles.txtItem }),
            react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice(totalPriceBeforeShip() + 18000), textFont: "bold", textColor: constants_1.COLORS.WHITE_COLOR, style: styles_1.styles.txtItem })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnBuy },
            react_1["default"].createElement(AppText_1["default"], { text: "\u0110\u1EB7t h\u00E0ng", textColor: constants_1.COLORS.PRIMARY_COLOR, style: styles_1.styles.txtItem }))));
};
exports["default"] = FooterCart;
