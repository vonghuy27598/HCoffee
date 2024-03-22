"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var AppText_1 = require("@components/Custom/AppText");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var constants_1 = require("../../constants");
var react_redux_1 = require("react-redux");
var cartAction_1 = require("@redux/action/cartAction");
var HeaderCart = function (showBottomSheetCart, setShowBottomSheetCart) {
    // const {setShowBottomSheet} = useHome();
    var disptach = react_redux_1.useDispatch();
    var handleDeleteCart = function () {
        react_native_1.Alert.alert('Xác nhận', 'Xóa toàn bộ sản phẩm đã chọn khỏi đơn hàng của bạn?', [
            {
                text: 'Xóa',
                onPress: function () {
                    disptach(cartAction_1.deleteCart());
                    setShowBottomSheetCart(false);
                }
            },
            {
                text: 'Hủy'
            },
        ]);
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.headerContainer] },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return handleDeleteCart(); } },
            react_1["default"].createElement(AppText_1["default"], { text: "X\u00F3a", textSize: 15 })),
        react_1["default"].createElement(AppText_1["default"], { text: "X\u00E1c nh\u1EADn \u0111\u01A1n h\u00E0ng", textFont: "bold", textSize: 18 }),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setShowBottomSheetCart(false); } },
            react_1["default"].createElement(Ionicons_1["default"], { name: "close", size: 25, color: constants_1.COLORS.TEXT_BLACK_COLOR }))));
};
exports["default"] = HeaderCart;
