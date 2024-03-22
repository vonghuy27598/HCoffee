import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {IOrderProviderType} from './typeOrderProvider';
import {Animated, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {Dimensions, Helper} from '@common/index';
import {setHeaderCateName} from '@redux/action/dist/categoryAction';

const OrderContext = createContext({});

const OrderProvider = ({children}: {children: React.ReactNode}) => {
  const MIN_PADDING_HORIZONTAL = 20;
  const MAX_PADDING_HORIZONTAL = 40;
  const WIDTH_MAX_BOX_LOCATION = Dimensions.width - MIN_PADDING_HORIZONTAL;
  const WIDTH_MIN_BOX_LOCATION = Dimensions.width - MAX_PADDING_HORIZONTAL;
  const HEIGHT_BOX_LOCATION = 65;
  const animBoxLocation = useRef(new Animated.Value(0)).current;
  const scrollOrderRef = useRef<ScrollView>(null);
  const translateYNumber = useRef();
  const lastCurrentY = useRef(0);
  const scrollDirection = useRef('');
  const animHeader = useRef(new Animated.Value(0)).current;
  const [headerCateName, setHeaderCateName] = useState('Danh mục');
  const diffClampTranslate = Animated.diffClamp(animHeader, 0, 60);
  const [showBottomSheetOrder, setShowBottomSheetOrder] = useState(false);
  // const diffClampOpacity = Animated.diffClamp(animHeader, 0, 60).interpolate({
  //   inputRange: [0, 60],
  //   outputRange: [60, 0],
  // });
  const dispatch = useDispatch<any>();
  const {dataPosition} = useSelector(
    (state: RootState) => state.setPositionCategory,
  );
  const {cateName} = useSelector((state: RootState) => state.setHeaderCateName);
  const translateY = diffClampTranslate.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -60],
  });
  const opacity = diffClampTranslate.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
  });
  translateY.addListener(({value}) => {
    translateYNumber.current = value;
  });
  const boxLocationAnimOrder = {
    width: animBoxLocation.interpolate({
      inputRange: [0, 1],
      outputRange: [WIDTH_MAX_BOX_LOCATION, WIDTH_MIN_BOX_LOCATION],
      extrapolate: 'clamp',
    }),
    height: animBoxLocation.interpolate({
      inputRange: [0, 1],
      outputRange: [HEIGHT_BOX_LOCATION, HEIGHT_BOX_LOCATION - 15],
      extrapolate: 'clamp',
    }),
    left: animBoxLocation.interpolate({
      inputRange: [0, 1],
      outputRange: [MIN_PADDING_HORIZONTAL / 2, MAX_PADDING_HORIZONTAL / 2],
      extrapolate: 'clamp',
    }),
  };
  const iconAnimOrder = {
    transform: [
      {
        translateY: animBoxLocation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 10],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animBoxLocation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 3],
          extrapolate: 'clamp',
        }),
      },
    ],
    width: animBoxLocation.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 30],
      extrapolate: 'clamp',
    }),
    height: animBoxLocation.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 30],
      extrapolate: 'clamp',
    }),
  };
  const textTitleLocationAnimOrder = {
    transform: [
      {
        translateY: animBoxLocation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 10],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animBoxLocation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 10],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animBoxLocation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const textLocationAnimOrder = {
    transform: [
      {
        translateY: animBoxLocation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -15],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animBoxLocation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 40],
          extrapolate: 'clamp',
        }),
      },
    ],
    width: animBoxLocation.interpolate({
      inputRange: [0, 1],
      outputRange: ['100%', '80%'],
      extrapolate: 'clamp',
    }),
  };
  const scrollToChangeCateName = (offSetY: number) => {
    const getPositionScreen = dataPosition?.find(
      x => x.screenName === 'OrderTab',
    );
    const getPostionItem = getPositionScreen?.listPosition.findLast(
      x => offSetY >= x.layout - 10,
    );
    if (!Helper.isNullOrUndefined(getPostionItem)) {
      // dispatch(setHeaderCateName(getPostionItem?.cateName ?? ''));
      setHeaderCateName(getPostionItem?.cateName ?? '');
      // headerCateNameRef.current = getPostionItem?.cateName ?? '';
    } else {
      // dispatch(setHeaderCateName('Danh mục'));
      setHeaderCateName('Danh mục');
      // headerCateNameRef.current = 'Danh mục';
    }
  };
  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: animHeader},
        },
      },
    ],
    {
      useNativeDriver: true,
      listener: (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        scrollToChangeCateName(offsetY);
        scrollDirection.current =
          offsetY - lastCurrentY.current > 0 ? 'down' : 'up';
        lastCurrentY.current = offsetY;
      },
    },
  );

  const handleSnap = ({nativeEvent}: any) => {
    const offsetY = nativeEvent.contentOffset.y;
    let toValueAnim = scrollDirection.current === 'down' ? 1 : 0;
    if (!(translateYNumber.current === 0 || translateYNumber.current === -60)) {
      if (scrollOrderRef.current) {
        scrollOrderRef.current.scrollTo({
          y:
            Helper.getCloser(translateYNumber.current, -60, 0) === -60
              ? offsetY + 60 / 2
              : offsetY - 60 / 2,
        });
        toValueAnim =
          Helper.getCloser(translateYNumber.current, -60, 0) === -60 ? 1 : 0; // scroll down setValue 1; scroll up setValue 0
      }
    }
    //BOX LOCATION ANIM
    Animated.timing(animBoxLocation, {
      toValue: toValueAnim,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };
  // anim header Order
  const headerAnimation = {
    transform: [
      {
        translateY: translateY,
      },
    ],
    opacity: opacity,
  };
  const data = {
    scrollOrderRef,
    headerCateName,
    setHeaderCateName,
    scrollToChangeCateName,
    lastCurrentY,
    animHeader,
    headerAnimation,
    handleScroll,
    handleSnap,
    cateName,
    boxLocationAnimOrder,
    iconAnimOrder,
    textLocationAnimOrder,
    textTitleLocationAnimOrder,
    showBottomSheetOrder,
    setShowBottomSheetOrder,
  } as IOrderProviderType;

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
};
const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('Order context error');
  }
  return context as IOrderProviderType;
};

export {OrderProvider, useOrder};
