"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var AppText_1 = require("@components/Custom/AppText");
var constants_1 = require("../../constants");
var BodyPromotion = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.bodyContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.boxSearch },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.searchIcon },
                react_1["default"].createElement(Ionicons_1["default"], { name: "search", size: 20 }),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.searchText },
                    react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Nh\u1EADp m\u00E3 khuy\u1EBFn m\u00E3i", numberOfLines: 1, underlineColorAndroid: "transparent" }))),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1.styles.searchBtn },
                react_1["default"].createElement(AppText_1["default"], { text: "\u00C1p d\u1EE5ng", textColor: constants_1.COLORS.WHITE_COLOR }))),
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.contentContainer },
            react_1["default"].createElement(AppText_1["default"], { text: "S\u1EB5n s\u00E0ng s\u1EED d\u1EE5ng", textFont: "bold", textSize: 25 }),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.boxTicket] },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewImageTicket },
                    react_1["default"].createElement(react_native_1.Image, { source: constants_1.IMAGES.PROMOTION, resizeMode: "stretch", style: styles_1.styles.imageTicket })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.contentTicket },
                    react_1["default"].createElement(AppText_1["default"], { text: "Mua 1 t\u1EB7ng 1 Tr\u00E0 tr\u00E1i c\u00E2y + Freeship", textSize: 16, numberOfLines: 2 }),
                    react_1["default"].createElement(AppText_1["default"], { text: "H\u1EBFt h\u1EA1n ng\u00E0y 30/01/2025", textSize: 16 })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.lineBreak },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.dotBreakTop }),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.dotBreakBottom }))),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.boxTicket] },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewImageTicket },
                    react_1["default"].createElement(react_native_1.Image, { source: constants_1.IMAGES.PROMOTION, resizeMode: "stretch", style: styles_1.styles.imageTicket })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.contentTicket },
                    react_1["default"].createElement(AppText_1["default"], { text: "Mua 1 t\u1EB7ng 1 Tr\u00E0 tr\u00E1i c\u00E2y + Freeship", textSize: 16, numberOfLines: 2 }),
                    react_1["default"].createElement(AppText_1["default"], { text: "H\u1EBFt h\u1EA1n ng\u00E0y 30/01/2025", textSize: 16 })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.lineBreak })),
            react_1["default"].createElement(react_native_1.View, { style: [styles_1.styles.flexDirection, styles_1.styles.boxTicket] },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.viewImageTicket },
                    react_1["default"].createElement(react_native_1.Image, { source: constants_1.IMAGES.PROMOTION, resizeMode: "stretch", style: styles_1.styles.imageTicket })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.contentTicket },
                    react_1["default"].createElement(AppText_1["default"], { text: "Mua 1 t\u1EB7ng 1 Tr\u00E0 tr\u00E1i c\u00E2y + Freeship", textSize: 16, numberOfLines: 2 }),
                    react_1["default"].createElement(AppText_1["default"], { text: "H\u1EBFt h\u1EA1n ng\u00E0y 30/01/2025", textSize: 16 })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.lineBreak })))));
};
exports["default"] = BodyPromotion;
