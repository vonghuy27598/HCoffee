"use strict";
exports.__esModule = true;
exports.getCloser = exports.formatWrapLineSpace = exports.formatSize = exports.getPriceCheckTopping = exports.getPriceSize = exports.formatPrice = exports.createAction = exports.isObjectEqual = exports.isArrayEquals = exports.getFirstSize = exports.checkLessThanOneSize = exports.checkZeroPrice = exports.isNullOrUndefined = void 0;
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
exports.getFirstSize = function (smallPrice, mediumPrice) {
    if (smallPrice > 0) {
        return 'smallPrice';
    }
    else if (mediumPrice > 0) {
        return 'mediumPrice';
    }
    return 'bigPrice';
};
exports.isArrayEquals = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every(function (obj1, index) {
        var obj2 = arr2[index];
        return exports.isObjectEqual(obj1, obj2);
    });
};
exports.isObjectEqual = function (obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    return keys1.every(function (key) { return obj1[key] === obj2[key]; });
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
exports.getPriceSize = function (size, selectProduct) {
    var _a, _b, _c;
    if (size === 'smallPrice') {
        return (_a = selectProduct === null || selectProduct === void 0 ? void 0 : selectProduct.smallPrice) !== null && _a !== void 0 ? _a : 0;
    }
    else if (size === 'mediumPrice') {
        return (_b = selectProduct === null || selectProduct === void 0 ? void 0 : selectProduct.mediumPrice) !== null && _b !== void 0 ? _b : 0;
    }
    return (_c = selectProduct === null || selectProduct === void 0 ? void 0 : selectProduct.bigPrice) !== null && _c !== void 0 ? _c : 0;
};
exports.getPriceCheckTopping = function (listToppingChecked) {
    var sumPriceTopping = 0;
    listToppingChecked
        .filter(function (x) { return x.checked; })
        .forEach(function (x) { return (sumPriceTopping += x.price); });
    return sumPriceTopping;
};
exports.formatSize = function (typeSize) {
    switch (typeSize) {
        case 'smallPrice':
            return 'Nhỏ';
        case 'mediumPrice':
            return 'Vừa';
        case 'bigPrice':
            return 'Lớn';
        default:
            return 'Vừa';
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
