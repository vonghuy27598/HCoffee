"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var AppText_1 = require("@components/Custom/AppText");
var constants_1 = require("../../constants");
var index_1 = require("@common/index");
var react_redux_1 = require("react-redux");
var orderAction_1 = require("@redux/action/orderAction");
var native_1 = require("@react-navigation/native");
var FooterCart = function (showBottomSheetCart, setShowBottomSheetCart) {
    var dispatch = react_redux_1.useDispatch();
    var cart = react_redux_1.useSelector(function (state) { return state.setCartReducer; });
    var isLogin = react_redux_1.useSelector(function (state) { return state.genarateReducer; }).isLogin;
    var navigation = native_1.useNavigation();
    var handleOrder = function () {
        if (isLogin) {
            dispatch(orderAction_1.addOrder(setShowBottomSheetCart));
        }
        else {
            react_native_1.Alert.alert('Đăng nhập', 'Quý khách vui lòng đăng nhập trước khi đặt hàng', [
                {
                    text: 'Đồng ý',
                    onPress: function () {
                        setShowBottomSheetCart(false);
                        navigation.navigate('Login');
                    }
                },
                {
                    text: 'Hủy'
                },
            ]);
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.footerContainer] },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(AppText_1["default"], { text: "Giao h\u00E0ng: " + cart.totalQuantityCart + " s\u1EA3n ph\u1EA9m", textColor: constants_1.COLORS.WHITE_COLOR, style: styles_1.styles.txtItem }),
            react_1["default"].createElement(AppText_1["default"], { text: index_1.Helper.formatPrice(cart.totalPriceCart + cart.totalPriceShipCart), textFont: "bold", textColor: constants_1.COLORS.WHITE_COLOR, style: styles_1.styles.txtItem })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.btnBuy, onPress: function () { return handleOrder(); } },
            react_1["default"].createElement(AppText_1["default"], { text: "\u0110\u1EB7t h\u00E0ng", textColor: constants_1.COLORS.PRIMARY_COLOR, style: styles_1.styles.txtItem }))));
};
exports["default"] = FooterCart;
