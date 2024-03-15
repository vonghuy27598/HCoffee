"use strict";
exports.__esModule = true;
exports.rootReducer = void 0;
var redux_1 = require("redux");
var categoryMenuReducer_1 = require("./reducer/categoryMenuReducer");
var bannerReducer_1 = require("./reducer/bannerReducer");
var categoryReducer_1 = require("./reducer/categoryReducer");
var cartReducer_1 = require("./reducer/cartReducer");
var locationReducer_1 = require("./reducer/locationReducer");
var appReducer = redux_1.combineReducers({
    getCategoryMenuReducer: categoryMenuReducer_1.getCategoryMenuReducer,
    getBannerHomeReducer: bannerReducer_1.getBannerHomeReducer,
    getCategoryReducer: categoryReducer_1.getCategoryReducer,
    setPositionCategory: categoryReducer_1.setPositionCategory,
    selectToppingReducer: cartReducer_1.selectToppingReducer,
    selectOptionBuyReducer: cartReducer_1.selectOptionBuyReducer,
    setCartReducer: cartReducer_1.setCartReducer,
    setHeaderCateName: categoryReducer_1.setHeaderCateName,
    getLocationUserReducer: locationReducer_1.getLocationUserReducer
});
var rootReducer = function (state, action) {
    // when a logout action is dispatched it will reset redux state
    switch (action.type) {
        case 'RESET_ALL':
            break;
        default:
            break;
    }
    return appReducer(state, action);
};
exports.rootReducer = rootReducer;
