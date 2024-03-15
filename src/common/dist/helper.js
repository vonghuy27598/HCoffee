"use strict";
exports.__esModule = true;
exports.getCloser = exports.formatWrapLineSpace = exports.formatPrice = exports.createAction = exports.checkLessThanOneSize = exports.checkZeroPrice = exports.isNullOrUndefined = void 0;
/* eslint-disable @typescript-eslint/no-inferrable-types */
exports.isNullOrUndefined = function (value) {
    if (value === null)
        return true;
    if (value === undefined)
        return true;
    if (value === '')
        return true;
    return false;
};
exports.checkZeroPrice = function (value) {
    if (value === null)
        return true;
    if (value === 0)
        return true;
    return false;
};
exports.checkLessThanOneSize = function (arrSize) {
    var filter = arrSize.filter(function (x) { return x > 0; });
    if (filter.length <= 1)
        return true;
    return false;
};
exports.createAction = function (type, payload) { return ({
    type: type,
    payload: payload
}); };
exports.formatPrice = function (price) {
    try {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + "\u0111";
    }
    catch (_a) {
        return "" + price;
    }
};
//#region format wrap text by line
var checkSecondSpace = function (text) {
    var textTrim = text.trim();
    //check text have more space
    var moreSpace = textTrim.indexOf(' ', textTrim.indexOf(' ') + 1);
    if (moreSpace > 0) {
        return true;
    }
    return false;
};
exports.formatWrapLineSpace = function (text, positionSpace) {
    var textTrim = text.trim();
    //check all position space
    var index = 0;
    var res = [];
    while ((index = textTrim.indexOf(' ', index + 1)) > 0) {
        res.push(index);
    }
    // get position space by custom
    var indexBySpace = res[positionSpace - 1];
    // check position
    if (indexBySpace > 0) {
        var firstText = textTrim.substr(0, indexBySpace);
        var secondText = textTrim.substr(indexBySpace + 1, textTrim.length);
        if (checkSecondSpace(secondText)) {
            var result = firstText + "\n" + exports.formatWrapLineSpace(secondText, positionSpace);
            return result;
        }
        return firstText + "\n" + secondText;
    }
    return textTrim;
};
//#endregion
exports.getCloser = function (value, checkOne, checkTwo) {
    return Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;
};
