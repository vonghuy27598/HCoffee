"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useLineCateProduct = exports.LineCateProductProvider = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var client_1 = require("@apollo/client");
var serviceLineProductByCate_1 = require("@graphQL/services/serviceLineProductByCate");
var categoryAction_1 = require("@redux/action/categoryAction");
var HomeProvider_1 = require("@container/HomeScreen/Provider/HomeProvider");
var native_1 = require("@react-navigation/native");
var OrderProvider_1 = require("@container/OrderScreen/Provider/OrderProvider");
var serviceGetAllTopping_1 = require("@graphQL/services/serviceGetAllTopping");
var LineCateProductContext = react_1.createContext({});
var LineCateProductProvider = function (_a) {
    var children = _a.children;
    var _b = HomeProvider_1.useHome(), scrollRefHome = _b.scrollRefHome, distanceCategoryHome = _b.distanceCategoryHome;
    var scrollOrderRef = OrderProvider_1.useOrder().scrollOrderRef;
    var _c = react_1.useState(false), showBottomSheet = _c[0], setShowBottomSheet = _c[1];
    var _d = react_1.useState(), chooseProduct = _d[0], setChooseProduct = _d[1];
    // const [checkSize, setCheckSize] = useState(
    //   !Helper.checkZeroPrice(chooseProduct?.smallPrice ?? 0)
    //     ? 'smallPrice'
    //     : 'mediumPrice',
    // );
    // const [quantity, setQuantity] = useState<number>(1);
    // const [totalPrice, setTotalPrice] = useState<number>(0);
    var navigate = native_1.useNavigation();
    var indexCurrentScreen = navigate.getState().index;
    var currentScreen = react_1.useRef('');
    var isFocused = native_1.useIsFocused();
    var _e = react_1.useState([]), arrPosition = _e[0], setArrPosition = _e[1];
    if (isFocused) {
        currentScreen.current = navigate.getState().routeNames[indexCurrentScreen];
    }
    var _f = react_1.useState(0), distanceLineProductCate = _f[0], setDistaceLineProductCate = _f[1];
    var _g = react_1.useState(0), heightBoxCate = _g[0], setHeightBoxCate = _g[1];
    var _h = react_1.useState(), heightLineCate = _h[0], setHeightLineCate = _h[1];
    var dispatch = react_redux_1.useDispatch();
    var _j = react_redux_1.useSelector(function (state) { return state.getCategoryReducer; }), dataCategory = _j.dataCategory, isLoadingCategory = _j.isLoadingCategory;
    var dataPosition = react_redux_1.useSelector(function (state) { return state.setPositionCategory; }).dataPosition;
    // const dataSelectBuy = useSelector(
    //   (state: RootState) => state.selectOptionBuyReducer,
    // );
    // const {listSelectTopping} = useSelector(
    //   (state: RootState) => state.selectToppingReducer,
    // );
    // const getPriceSize = (size: string) => {
    //   if (size === 'smallPrice') {
    //     return chooseProduct?.smallPrice ?? 0;
    //   } else if (size === 'mediumPrice') {
    //     return chooseProduct?.mediumPrice ?? 0;
    //   }
    //   return chooseProduct?.bigPrice ?? 0;
    // };
    // const getPriceCheckTopping = (listToppingChecked: ISelectToppingType[]) => {
    //   let sumPriceTopping = 0;
    //   listToppingChecked
    //     .filter(x => x.checked)
    //     .forEach(x => (sumPriceTopping += x.price));
    //   return sumPriceTopping;
    // };
    // useEffect(() => {
    //   if (
    //     !Helper.isNullOrUndefined(chooseProduct) &&
    //     !Helper.isNullOrUndefined(listSelectTopping)
    //   ) {
    //     setTotalPrice(
    //       getPriceSize(checkSize) * quantity +
    //         getPriceCheckTopping(listSelectTopping),
    //     );
    //     const data: IStoreOptionBuyProductType = {
    //       productId: chooseProduct?.productId ?? 0,
    //       productName: chooseProduct?.productName ?? '',
    //       quantity: quantity,
    //       size: checkSize,
    //       listTopping: listSelectTopping.filter(x => x.checked),
    //       totalPrice: totalPrice,
    //       note: '',
    //     };
    //     dispatch(selectOptionBuy(data));
    //   }
    // }, [listSelectTopping, checkSize, quantity, totalPrice]);
    // const setSelectTopping = (listSelect: ISelectToppingType[]) => {
    //   setTotalPrice(
    //     getPriceSize(checkSize) * quantity +
    //       getPriceCheckTopping(listSelectTopping),
    //   );
    //   dispatch(selectTopping(listSelect));
    // };
    var handleChooseCategory = function (itemIndex) {
        var _a;
        var temp = dataPosition.find(function (x) { return x.screenName === currentScreen.current; });
        var offSetY = (_a = temp === null || temp === void 0 ? void 0 : temp.listPosition[itemIndex].layout) !== null && _a !== void 0 ? _a : 0; // set default offsetY = first position line cate
        scrollToCategory(offSetY);
    };
    var scrollToCategory = function (offSetY) {
        var _a, _b;
        if (currentScreen.current === 'HomeTab') {
            console.log('SCROLL TOOO', distanceCategoryHome, heightBoxCate, distanceLineProductCate, offSetY);
            (_a = scrollRefHome.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                y: offSetY,
                animated: true
            });
        }
        else if (currentScreen.current === 'OrderTab') {
            (_b = scrollOrderRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
                y: offSetY,
                animated: true
            });
        }
    };
    var _k = client_1.useQuery(serviceLineProductByCate_1.getProductByCate.query, {
        onCompleted: function (data) {
            console.log('DATA QUERY GET PRODUCT BY CATE', data === null || data === void 0 ? void 0 : data.getProductByCate, serviceLineProductByCate_1.getProductByCate.query);
        },
        onError: function (error) {
            console.log('GET LINE PRODUCT BY CATE FAILED', error);
        }
    }), loadingProduct = _k.loading, errorProduct = _k.error, dataProduct = _k.data;
    client_1.useQuery(serviceGetAllTopping_1.getAllTopping.query, {
        onCompleted: function (data) {
            console.log('DATA QUERY GET ALL TOPPING', data, serviceGetAllTopping_1.getAllTopping.query);
        },
        onError: function (error) {
            console.log('QUERY GET ALL TOPPING FAILED', error);
        }
    });
    var selectProduct = function (idCateName, idProduct) {
        var _a, _b;
        var getProduct = (_b = (_a = dataProduct === null || dataProduct === void 0 ? void 0 : dataProduct.getProductByCate) === null || _a === void 0 ? void 0 : _a.find(function (x) { return x.categoryId === idCateName; })) === null || _b === void 0 ? void 0 : _b.listProduct.find(function (x) { return x.productId === idProduct; });
        setShowBottomSheet(true);
        setChooseProduct(getProduct);
        // getTopping(getProduct?.iD_TypeTopping ?? [], getProduct);
    };
    // const addToCart = () => {
    //   dispatch(setCart(dataSelectBuy));
    //   setShowBottomSheet(false);
    // };
    // const getTopping = async (
    //   listIdTopping: number[],
    //   product: IProductType | undefined,
    // ) => {
    //   const listTemp = dataToppingQL?.allListTopping.filter(item =>
    //     listIdTopping.includes(item.toppingId),
    //   );
    //   setListTopping(listTemp ?? []);
    //   const listSelect = listTemp?.map((val: IToppingType) => {
    //     return {...val, checked: false};
    //   }) as ISelectToppingType[];
    //   refreshBottomSheet(listSelect, product);
    //   setSelectTopping(listSelect);
    // };
    react_1.useEffect(function () {
        if (arrPosition.length > 0 && arrPosition.length === dataCategory.length) {
            dispatch(categoryAction_1.setPositionCategory({
                screenName: currentScreen.current,
                listPosition: arrPosition
            }));
        }
    }, [arrPosition]);
    var setPosition = function (index, cateName) {
        var logicDistancePosition = 0;
        if (currentScreen.current === 'HomeTab') {
            logicDistancePosition +=
                distanceCategoryHome -
                    68.4 + // height header
                    +heightBoxCate +
                    20 + // 20 marginVertical
                    distanceLineProductCate; // marginVertical of line cate
        }
        else if (currentScreen.current === 'OrderTab') {
            logicDistancePosition +=
                // 0 -
                // 68.4 + // height header
                heightBoxCate +
                    20 + // 20 marginVertical
                    distanceLineProductCate; // marginVertical of line cate
        }
        var layoutCate = 0;
        for (var i = 0; i <= index - 1; i++) {
            layoutCate += heightLineCate[i] + 30; // vị trí line cate đầu tiên sẽ bằng với giá trị tính loginDistacePostion, các vị trí tiếp theo sẽ + height của line trước đó
        }
        setArrPosition(__spreadArrays(arrPosition, [
            { index: index, layout: logicDistancePosition + layoutCate, cateName: cateName },
        ])); // 30 // marginVertical of line cate
    };
    var dataProvider = {
        dataCategory: dataCategory,
        dataProduct: dataProduct,
        errorProduct: errorProduct,
        handleChooseCategory: handleChooseCategory,
        isLoadingCategory: isLoadingCategory,
        loadingProduct: loadingProduct,
        setPosition: setPosition,
        distanceLineProductCate: distanceLineProductCate,
        setDistaceLineProductCate: setDistaceLineProductCate,
        navigate: navigate,
        currentScreen: currentScreen,
        setHeightBoxCate: setHeightBoxCate,
        selectProduct: selectProduct,
        chooseProduct: chooseProduct,
        // checkSize,
        // setCheckSize,
        // listTopping,
        // setListTopping,
        // getTopping,
        // setSelectTopping,
        // listSelectTopping,
        // quantity,
        // setQuantity,
        // totalPrice,
        // setTotalPrice,
        // addToCart,
        showBottomSheet: showBottomSheet,
        setShowBottomSheet: setShowBottomSheet,
        setHeightLineCate: setHeightLineCate,
        heightLineCate: heightLineCate
    };
    return (react_1["default"].createElement(LineCateProductContext.Provider, { value: dataProvider }, children));
};
exports.LineCateProductProvider = LineCateProductProvider;
var useLineCateProduct = function () {
    var context = react_1.useContext(LineCateProductContext);
    if (!context) {
        throw new Error('LineCateProduct context error');
    }
    return context;
};
exports.useLineCateProduct = useLineCateProduct;
