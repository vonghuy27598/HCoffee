"use strict";
exports.__esModule = true;
exports.styles = void 0;
var index_1 = require("@common/index");
var react_native_1 = require("react-native");
var constants_1 = require("../../../constants");
exports.styles = react_native_1.StyleSheet.create({
    containerLogin: {
        width: index_1.Dimensions.width,
        height: index_1.Dimensions.height
    },
    backgroundLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewLogin: {
        width: index_1.Dimensions.width * 0.9,
        height: index_1.Dimensions.width * 0.9,
        alignItems: 'center'
    },
    viewTextInput: {
        width: '100%',
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        flexDirection: 'row',
        borderRadius: 15,
        paddingVertical: 15,
        borderWidth: 1,
        marginVertical: 20
    },
    viewCountry: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: constants_1.COLORS.GRAY_e3e3e3_COLOR
    },
    viewTextBox: {
        width: '80%',
        paddingLeft: 15
    },
    textInput: {
        width: '90%',
        padding: 0,
        fontSize: 17
    },
    btnLogin: {
        width: '100%',
        marginTop: 15,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15
    },
    btnEnable: {
        backgroundColor: constants_1.COLORS.PRIMARY_COLOR
    },
    btnDisable: {
        backgroundColor: constants_1.COLORS.GRAY_COLOR
    },
    btnCloseLogin: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 20,
        right: 20
    },
    headerBottomSheet: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnToggleClose: {
        position: 'absolute',
        top: 15,
        right: 20
    },
    bodyBottomSheet: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    contentVerify: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    verifyBox: {
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    textInputVerify: {
        padding: 0,
        textAlign: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 0.5
    }
});
