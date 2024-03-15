"use strict";
exports.__esModule = true;
exports.useOrder = exports.OrderProvider = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var index_1 = require("@common/index");
var OrderContext = react_1.createContext({});
var OrderProvider = function (_a) {
    var children = _a.children;
    var MIN_PADDING_HORIZONTAL = 20;
    var MAX_PADDING_HORIZONTAL = 40;
    var WIDTH_MAX_BOX_LOCATION = index_1.Dimensions.width - MIN_PADDING_HORIZONTAL;
    var WIDTH_MIN_BOX_LOCATION = index_1.Dimensions.width - MAX_PADDING_HORIZONTAL;
    var HEIGHT_BOX_LOCATION = 65;
    var animBoxLocation = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var scrollOrderRef = react_1.useRef(null);
    var translateYNumber = react_1.useRef();
    var lastCurrentY = react_1.useRef(0);
    var scrollDirection = react_1.useRef('');
    var animHeader = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var _b = react_1.useState('Danh mục'), headerCateName = _b[0], setHeaderCateName = _b[1];
    var diffClampTranslate = react_native_1.Animated.diffClamp(animHeader, 0, 60);
    // const diffClampOpacity = Animated.diffClamp(animHeader, 0, 60).interpolate({
    //   inputRange: [0, 60],
    //   outputRange: [60, 0],
    // });
    var dispatch = react_redux_1.useDispatch();
    var dataPosition = react_redux_1.useSelector(function (state) { return state.setPositionCategory; }).dataPosition;
    var cateName = react_redux_1.useSelector(function (state) { return state.setHeaderCateName; }).cateName;
    var translateY = diffClampTranslate.interpolate({
        inputRange: [0, 60],
        outputRange: [0, -60]
    });
    var opacity = diffClampTranslate.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0]
    });
    translateY.addListener(function (_a) {
        var value = _a.value;
        translateYNumber.current = value;
    });
    var boxLocationAnimOrder = {
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
    var iconAnimOrder = {
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
    var textTitleLocationAnimOrder = {
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
    var textLocationAnimOrder = {
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
    var scrollToChangeCateName = function (offSetY) {
        var _a;
        var getPositionScreen = dataPosition === null || dataPosition === void 0 ? void 0 : dataPosition.find(function (x) { return x.screenName === 'OrderTab'; });
        var getPostionItem = getPositionScreen === null || getPositionScreen === void 0 ? void 0 : getPositionScreen.listPosition.findLast(function (x) { return offSetY >= x.layout - 10; });
        if (!index_1.Helper.isNullOrUndefined(getPostionItem)) {
            // dispatch(setHeaderCateName(getPostionItem?.cateName ?? ''));
            setHeaderCateName((_a = getPostionItem === null || getPostionItem === void 0 ? void 0 : getPostionItem.cateName) !== null && _a !== void 0 ? _a : '');
            // headerCateNameRef.current = getPostionItem?.cateName ?? '';
        }
        else {
            // dispatch(setHeaderCateName('Danh mục'));
            setHeaderCateName('Danh mục');
            // headerCateNameRef.current = 'Danh mục';
        }
    };
    var handleScroll = react_native_1.Animated.event([
        {
            nativeEvent: {
                contentOffset: { y: animHeader }
            }
        },
    ], {
        useNativeDriver: true,
        listener: function (event) {
            var offsetY = event.nativeEvent.contentOffset.y;
            scrollToChangeCateName(offsetY);
            scrollDirection.current =
                offsetY - lastCurrentY.current > 0 ? 'down' : 'up';
            lastCurrentY.current = offsetY;
        }
    });
    var handleSnap = function (_a) {
        var nativeEvent = _a.nativeEvent;
        var offsetY = nativeEvent.contentOffset.y;
        var toValueAnim = scrollDirection.current === 'down' ? 1 : 0;
        if (!(translateYNumber.current === 0 || translateYNumber.current === -60)) {
            if (scrollOrderRef.current) {
                scrollOrderRef.current.scrollTo({
                    y: index_1.Helper.getCloser(translateYNumber.current, -60, 0) === -60
                        ? offsetY + 60 / 2
                        : offsetY - 60 / 2
                });
                toValueAnim =
                    index_1.Helper.getCloser(translateYNumber.current, -60, 0) === -60 ? 1 : 0; // scroll down setValue 1; scroll up setValue 0
            }
        }
        //BOX LOCATION ANIM
        react_native_1.Animated.timing(animBoxLocation, {
            toValue: toValueAnim,
            duration: 400,
            useNativeDriver: false
        }).start();
    };
    // anim header Order
    var headerAnimation = {
        transform: [
            {
                translateY: translateY
            },
        ],
        opacity: opacity
    };
    var data = {
        scrollOrderRef: scrollOrderRef,
        headerCateName: headerCateName,
        setHeaderCateName: setHeaderCateName,
        scrollToChangeCateName: scrollToChangeCateName,
        lastCurrentY: lastCurrentY,
        animHeader: animHeader,
        headerAnimation: headerAnimation,
        handleScroll: handleScroll,
        handleSnap: handleSnap,
        cateName: cateName,
        boxLocationAnimOrder: boxLocationAnimOrder,
        iconAnimOrder: iconAnimOrder,
        textLocationAnimOrder: textLocationAnimOrder,
        textTitleLocationAnimOrder: textTitleLocationAnimOrder
    };
    return react_1["default"].createElement(OrderContext.Provider, { value: data }, children);
};
exports.OrderProvider = OrderProvider;
var useOrder = function () {
    var context = react_1.useContext(OrderContext);
    if (context === undefined) {
        throw new Error('Order context error');
    }
    return context;
};
exports.useOrder = useOrder;
