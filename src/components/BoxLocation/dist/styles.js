"use strict";
exports.__esModule = true;
exports.styles = void 0;
var index_1 = require("@common/index");
var react_native_1 = require("react-native");
var constants_1 = require("../../constants");
var MIN_PADDING_HORIZONTAL = 20;
var MAX_PADDING_HORIZONTAL = 60;
var WIDTH_MAX_BOX_LOCATION = index_1.Dimensions.width - MIN_PADDING_HORIZONTAL;
var WIDTH_MIN_BOX_LOCATION = index_1.Dimensions.width - MAX_PADDING_HORIZONTAL;
var HEIGHT_BOX_LOCATION = 65;
exports.styles = react_native_1.StyleSheet.create({
    flexDirectionRow: {
        flexDirection: 'row'
    },
    containerBox: {
        position: 'absolute',
        bottom: 15,
        left: MIN_PADDING_HORIZONTAL / 2,
        right: 0,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        width: WIDTH_MAX_BOX_LOCATION,
        height: HEIGHT_BOX_LOCATION,
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        borderRadius: 20,
        // shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.62,
        elevation: 8
    },
    areaLocation: { flex: 2, alignContent: 'space-between' },
    titleLocation: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imgIconCoffee: {
        width: 30,
        height: 30,
        marginRight: 5
    },
    btnGoCart: {
        flex: 1,
        backgroundColor: constants_1.COLORS.PRIMARY_COLOR,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    boxQuantity: {
        backgroundColor: constants_1.COLORS.WHITE_COLOR,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    totalPrice: {
        justifyContent: 'flex-start'
    }
});
