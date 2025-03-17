"use strict";
exports.__esModule = true;
exports.styles = void 0;
var index_1 = require("@common/index");
var react_native_1 = require("react-native");
var constants_1 = require("../../..//constants");
exports.styles = react_native_1.StyleSheet.create({
    containerInfor: {
        width: index_1.Dimensions.width,
        height: index_1.Dimensions.height,
        paddingTop: 70
    },
    scrollView: {
        paddingHorizontal: 20
    },
    viewInfor: {
        paddingVertical: 20
    },
    boxView: {
        borderRadius: 10
    },
    textTitle: {
        fontSize: 18,
        marginBottom: 10
    },
    flexDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    halfViewBox: {
        width: '48%',
        paddingHorizontal: 15,
        paddingVertical: 30,
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        borderRadius: 10
    },
    fullViewBox: {
        width: '100%',
        padding: 15,
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        borderBottomWidth: 1,
        borderBottomColor: constants_1.COLORS.GRAY_e3e3e3_COLOR
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textFull: {
        marginLeft: 10,
        fontSize: 15
    },
    rightView: {}
});
