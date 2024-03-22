"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AppDraggaleBottomSheet_1 = require("@components/Custom/AppDraggaleBottomSheet");
var OptionBuyProduct_1 = require("@components/OptionBuyProduct");
var LineCateProductProvider_1 = require("@components/FeatureLineCateProduct/Provider/LineCateProductProvider");
var ShowBottomSheet = function () {
    // const [selectProduct, setSelectProduct] = useState<IProductType>();
    var _a;
    var _b = LineCateProductProvider_1.useLineCateProduct(), showBottomSheet = _b.showBottomSheet, setShowBottomSheet = _b.setShowBottomSheet, chooseProduct = _b.chooseProduct;
    var _c = react_1.useState({
        productId: 0,
        productName: '',
        size: '',
        totalPrice: 0,
        listTopping: [],
        quantity: 1,
        iD_Cate: 0,
        note: ''
    }), addSelectProduct = _c[0], setAddSelectProduct = _c[1];
    react_1.useEffect(function () {
        console.log('addSelectProduct', addSelectProduct);
    }, [addSelectProduct]);
    return (react_1["default"].createElement(AppDraggaleBottomSheet_1["default"], { showBottomSheet: showBottomSheet, setShowBottomSheet: setShowBottomSheet, HeaderBottomSheetComponent: OptionBuyProduct_1.HeaderOptionBuy((_a = chooseProduct === null || chooseProduct === void 0 ? void 0 : chooseProduct.productName) !== null && _a !== void 0 ? _a : ''), BodyBottomSheetComponent: OptionBuyProduct_1.BodyOptionBuy({
            showBottomSheet: showBottomSheet,
            chooseProduct: chooseProduct,
            addSelectProduct: addSelectProduct,
            setAddSelectProduct: setAddSelectProduct,
            updateItem: false
        }), FooterBottoomSheetComponent: OptionBuyProduct_1.FooterOptionBuy({
            showBottomSheet: showBottomSheet,
            chooseProduct: chooseProduct,
            addSelectProduct: addSelectProduct,
            setAddSelectProduct: setAddSelectProduct,
            setShowBottomSheet: setShowBottomSheet,
            updateItem: false
        }) }));
};
exports["default"] = ShowBottomSheet;
