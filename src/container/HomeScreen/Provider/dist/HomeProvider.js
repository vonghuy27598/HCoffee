"use strict";
exports.__esModule = true;
exports.useHome = exports.HomeProvider = void 0;
/* eslint-disable no-unsafe-optional-chaining */
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var categoryMenuAction_1 = require("@redux/action/categoryMenuAction");
var bannerHomeAction_1 = require("@redux/action/bannerHomeAction");
var categoryAction_1 = require("@redux/action/categoryAction");
var index_1 = require("@common/index");
var HomeContext = react_1.createContext({});
var HomeProvider = function (_a) {
    var children = _a.children;
    var MIN_PADDING_HORIZONTAL = 20;
    var MAX_PADDING_HORIZONTAL = 40;
    var WIDTH_MAX_BOX_LOCATION = index_1.Dimensions.width - MIN_PADDING_HORIZONTAL;
    var WIDTH_MIN_BOX_LOCATION = index_1.Dimensions.width - MAX_PADDING_HORIZONTAL;
    var HEIGHT_BOX_LOCATION = 65;
    var animHeader = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var animHeaderBG = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var animBoxLocation = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var scrollRefHome = react_1.useRef(null);
    var scrollDirection = react_1.useRef('');
    var lastOffsetY = react_1.useRef(0);
    var _b = react_1.useState(false), showBottomSheet = _b[0], setShowBottomSheet = _b[1];
    var _c = react_1.useState(0), distanceCategoryHome = _c[0], setDistanceCategoryHome = _c[1];
    var dynamicHeaderAnimation = {
        backgroundColor: animHeaderBG.interpolate({
            inputRange: [0, 80],
            outputRange: ['#f1c9bd', '#fff'],
            extrapolate: 'clamp'
        }),
        shadowColor: animHeaderBG.interpolate({
            inputRange: [0, 80],
            outputRange: ['#f1c9bd', '#000'],
            extrapolate: 'clamp'
        })
    };
    var searchBoxAnim = {
        width: animHeader.interpolate({
            inputRange: [0, 50],
            outputRange: [200, 0],
            extrapolate: 'clamp'
        }),
        opacity: animHeader.interpolate({
            inputRange: [0, 50],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    };
    var searchInputAnim = {
        width: animHeader.interpolate({
            inputRange: [0, 35],
            outputRange: [200, 0],
            extrapolate: 'clamp'
        }),
        opacity: animHeader.interpolate({
            inputRange: [0, 35],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    };
    var boxLocationAnim = {
        width: animBoxLocation.interpolate({
            inputRange: [0, 1],
            outputRange: [WIDTH_MAX_BOX_LOCATION, WIDTH_MIN_BOX_LOCATION],
            extrapolate: 'clamp'
        }),
        height: animBoxLocation.interpolate({
            inputRange: [0, 1],
            outputRange: [HEIGHT_BOX_LOCATION, HEIGHT_BOX_LOCATION - 15],
            extrapolate: 'clamp'
        }),
        left: animBoxLocation.interpolate({
            inputRange: [0, 1],
            outputRange: [MIN_PADDING_HORIZONTAL / 2, MAX_PADDING_HORIZONTAL / 2],
            extrapolate: 'clamp'
        })
    };
    var iconAnim = {
        transform: [
            {
                translateY: animBoxLocation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                    extrapolate: 'clamp'
                })
            },
            {
                translateX: animBoxLocation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 3],
                    extrapolate: 'clamp'
                })
            },
        ],
        width: animBoxLocation.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 30],
            extrapolate: 'clamp'
        }),
        height: animBoxLocation.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 30],
            extrapolate: 'clamp'
        })
    };
    var textTitleLocationAnim = {
        transform: [
            {
                translateY: animBoxLocation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                    extrapolate: 'clamp'
                })
            },
            {
                translateX: animBoxLocation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                    extrapolate: 'clamp'
                })
            },
        ],
        opacity: animBoxLocation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    };
    var textLocationAnim = {
        transform: [
            {
                translateY: animBoxLocation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -15],
                    extrapolate: 'clamp'
                })
            },
            {
                translateX: animBoxLocation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 40],
                    extrapolate: 'clamp'
                })
            },
        ],
        width: animBoxLocation.interpolate({
            inputRange: [0, 1],
            outputRange: ['100%', '80%'],
            extrapolate: 'clamp'
        })
    };
    var dispatch = react_redux_1.useDispatch();
    var _d = react_redux_1.useSelector(function (state) { return state.getCategoryMenuReducer; }), dataMenu = _d.dataMenu, isLoadingMenu = _d.isLoadingMenu;
    var _e = react_redux_1.useSelector(function (state) { return state.getBannerHomeReducer; }), arrayImage = _e.arrayImage, isLoadingBanner = _e.isLoadingBanner;
    var _f = react_redux_1.useSelector(function (state) { return state.getCategoryReducer; }), dataCategory = _f.dataCategory, isLoadingCategory = _f.isLoadingCategory;
    var handleScroll = function (offsetY) {
        scrollDirection.current = offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
        lastOffsetY.current = offsetY;
        animHeaderBG.setValue(offsetY);
        animHeader.setValue(offsetY);
    };
    var handleEndDragScroll = function (offsetY) {
        var _a, _b;
        if (scrollDirection.current === 'down' && offsetY < 50) {
            (_a = scrollRefHome.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ y: 50, animated: true });
        }
        else if (scrollDirection.current === 'up' && offsetY < 50) {
            (_b = scrollRefHome.current) === null || _b === void 0 ? void 0 : _b.scrollTo({ y: 0, animated: true });
        }
    };
    var handleEndScroll = function () {
        console.log('handleEndScroll', scrollDirection.current);
        react_native_1.Animated.timing(animBoxLocation, {
            toValue: scrollDirection.current === 'down' ? 1 : 0,
            duration: 400,
            useNativeDriver: false
        }).start();
    };
    react_1.useEffect(function () {
        dispatch(categoryMenuAction_1.getCategoryMenu());
        dispatch(bannerHomeAction_1.getBannerHome());
        dispatch(categoryAction_1.getAllCategory());
    }, []);
    var dataProvider = {
        animHeader: animHeader,
        animHeaderBG: animHeaderBG,
        scrollRefHome: scrollRefHome,
        scrollDirection: scrollDirection,
        lastOffsetY: lastOffsetY,
        distanceCategoryHome: distanceCategoryHome,
        setDistanceCategoryHome: setDistanceCategoryHome,
        dynamicHeaderAnimation: dynamicHeaderAnimation,
        searchBoxAnim: searchBoxAnim,
        searchInputAnim: searchInputAnim,
        dataMenu: dataMenu,
        isLoadingMenu: isLoadingMenu,
        arrayImage: arrayImage,
        isLoadingBanner: isLoadingBanner,
        dataCategory: dataCategory,
        isLoadingCategory: isLoadingCategory,
        handleScroll: handleScroll,
        handleEndScroll: handleEndScroll,
        handleEndDragScroll: handleEndDragScroll,
        boxLocationAnim: boxLocationAnim,
        iconAnim: iconAnim,
        textLocationAnim: textLocationAnim,
        textTitleLocationAnim: textTitleLocationAnim,
        showBottomSheet: showBottomSheet,
        setShowBottomSheet: setShowBottomSheet
    };
    return (react_1["default"].createElement(HomeContext.Provider, { value: dataProvider }, children));
};
exports.HomeProvider = HomeProvider;
var useHome = function () {
    var context = react_1.useContext(HomeContext);
    if (!context) {
        throw new Error('Home context error');
    }
    return context;
};
exports.useHome = useHome;
