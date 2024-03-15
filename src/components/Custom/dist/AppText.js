"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var constants_1 = require("../../constants");
var fonts_1 = require("../../constants/fonts");
var AppText = function (props) {
    var appFont = 'regular';
    var defaultFont = function (font) {
        switch (font) {
            case 'bold':
                return fonts_1.fontFamily.FONT_OPENSANS_BOLD;
            case 'bold-italic':
                return fonts_1.fontFamily.FONT_OPENSANS_BOLDITALIC;
            case 'extra-bold':
                return fonts_1.fontFamily.FONT_OPENSANS_EXTRABOLD;
            case 'extra-bold-italic':
                return fonts_1.fontFamily.FONT_OPENSANS_EXTRABOLDITALIC;
            case 'italic':
                return fonts_1.fontFamily.FONT_OPENSANS_ITALIC;
            case 'light':
                return fonts_1.fontFamily.FONT_OPENSANS_LIGHT;
            case 'light-italic':
                return fonts_1.fontFamily.FONT_OPENSANS_LIGHTITALIC;
            case 'medium':
                return fonts_1.fontFamily.FONT_OPENSANS_MEDIUM;
            case 'medium-italic':
                return fonts_1.fontFamily.FONT_OPENSANS_MEDIUMITALIC;
            default:
                return fonts_1.fontFamily.FONT_OPENSANS_REGULAR;
        }
    };
    return !props.animated ? (react_1["default"].createElement(react_native_1.Text, { style: [
            {
                color: props.textColor ? props.textColor : constants_1.COLORS.TEXT_BLACK_COLOR,
                fontSize: props.textSize ? props.textSize : 14,
                includeFontPadding: false,
                fontFamily: defaultFont((props === null || props === void 0 ? void 0 : props.textFont) !== undefined ? props === null || props === void 0 ? void 0 : props.textFont : appFont),
                textAlign: (props === null || props === void 0 ? void 0 : props.textAlign) ? props.textAlign : 'justify'
            },
            props === null || props === void 0 ? void 0 : props.style,
        ], disabled: props === null || props === void 0 ? void 0 : props.disabled, key: props === null || props === void 0 ? void 0 : props.key, allowFontScaling: props === null || props === void 0 ? void 0 : props.allowFontScaling, numberOfLines: props === null || props === void 0 ? void 0 : props.numberOfLines, ellipsizeMode: props === null || props === void 0 ? void 0 : props.ellipsizeMode, onPress: props === null || props === void 0 ? void 0 : props.onPress, ref: props === null || props === void 0 ? void 0 : props.ref }, props === null || props === void 0 ? void 0 : props.text)) : (react_1["default"].createElement(react_native_1.Animated.Text, { style: [
            {
                color: props.textColor ? props.textColor : constants_1.COLORS.TEXT_BLACK_COLOR,
                fontSize: props.textSize ? props.textSize : 14,
                includeFontPadding: false,
                fontFamily: defaultFont((props === null || props === void 0 ? void 0 : props.textFont) !== undefined ? props === null || props === void 0 ? void 0 : props.textFont : appFont),
                textAlign: (props === null || props === void 0 ? void 0 : props.textAlign) ? props.textAlign : 'justify'
            },
            props === null || props === void 0 ? void 0 : props.style,
        ], disabled: props === null || props === void 0 ? void 0 : props.disabled, key: props === null || props === void 0 ? void 0 : props.key, allowFontScaling: props === null || props === void 0 ? void 0 : props.allowFontScaling, numberOfLines: props === null || props === void 0 ? void 0 : props.numberOfLines, ellipsizeMode: props === null || props === void 0 ? void 0 : props.ellipsizeMode, onPress: props === null || props === void 0 ? void 0 : props.onPress, ref: props === null || props === void 0 ? void 0 : props.refAnimated }, props === null || props === void 0 ? void 0 : props.text));
};
exports["default"] = AppText;
