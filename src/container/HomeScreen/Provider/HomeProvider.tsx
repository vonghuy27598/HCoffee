/* eslint-disable no-unsafe-optional-chaining */
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Animated, ScrollView} from 'react-native';
import {IDataHomeProvider} from './typeHomeProvider';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {getCategoryMenu} from '@redux/action/categoryMenuAction';
import {getBannerHome} from '@redux/action/bannerHomeAction';
import {getAllCategory} from '@redux/action/categoryAction';
import {Dimensions} from '@common/index';

const HomeContext = createContext({});

const HomeProvider = ({children}: {children: React.ReactNode}) => {
  const MIN_PADDING_HORIZONTAL = 20;
  const MAX_PADDING_HORIZONTAL = 40;
  const WIDTH_MAX_BOX_LOCATION = Dimensions.width - MIN_PADDING_HORIZONTAL;
  const WIDTH_MIN_BOX_LOCATION = Dimensions.width - MAX_PADDING_HORIZONTAL;
  const HEIGHT_BOX_LOCATION = 65;
  const animHeader = useRef(new Animated.Value(0)).current;
  const animHeaderBG = useRef(new Animated.Value(0)).current;
  const animBoxLocation = useRef(new Animated.Value(0)).current;
  const scrollRefHome = useRef<ScrollView>(null);
  const scrollDirection = useRef('');
  const lastOffsetY = useRef(0);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [distanceCategoryHome, setDistanceCategoryHome] = useState<number>(0);
  const dynamicHeaderAnimation = {
    backgroundColor: animHeaderBG.interpolate({
      inputRange: [0, 80],
      outputRange: ['#f1c9bd', '#fff'],
      extrapolate: 'clamp',
    }),
    shadowColor: animHeaderBG.interpolate({
      inputRange: [0, 80],
      outputRange: ['#f1c9bd', '#000'],
      extrapolate: 'clamp',
    }),
  };
  const searchBoxAnim = {
    width: animHeader.interpolate({
      inputRange: [0, 50],
      outputRange: [200, 0],
      extrapolate: 'clamp',
    }),
    opacity: animHeader.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const searchInputAnim = {
    width: animHeader.interpolate({
      inputRange: [0, 35],
      outputRange: [200, 0],
      extrapolate: 'clamp',
    }),
    opacity: animHeader.interpolate({
      inputRange: [0, 35],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const boxLocationAnim = {
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
  const iconAnim = {
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
  const textTitleLocationAnim = {
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
  const textLocationAnim = {
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
  const dispatch = useDispatch<any>();
  const {dataMenu, isLoadingMenu} = useSelector(
    (state: RootState) => state.getCategoryMenuReducer,
  );
  const {arrayImage, isLoadingBanner} = useSelector(
    (state: RootState) => state.getBannerHomeReducer,
  );
  const {dataCategory, isLoadingCategory} = useSelector(
    (state: RootState) => state.getCategoryReducer,
  );
  const handleScroll = (offsetY: number) => {
    scrollDirection.current = offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
    lastOffsetY.current = offsetY;
    animHeaderBG.setValue(offsetY);
    animHeader.setValue(offsetY);
  };
  const handleEndDragScroll = (offsetY: number) => {
    if (scrollDirection.current === 'down' && offsetY < 50) {
      scrollRefHome.current?.scrollTo({y: 50, animated: true});
    } else if (scrollDirection.current === 'up' && offsetY < 50) {
      scrollRefHome.current?.scrollTo({y: 0, animated: true});
    }
  };
  const handleEndScroll = () => {
    console.log('handleEndScroll', scrollDirection.current);
    Animated.timing(animBoxLocation, {
      toValue: scrollDirection.current === 'down' ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    dispatch(getCategoryMenu());
    dispatch(getBannerHome());
    dispatch(getAllCategory());
  }, []);
  const dataProvider = {
    animHeader,
    animHeaderBG,
    scrollRefHome,
    scrollDirection,
    lastOffsetY,
    distanceCategoryHome,
    setDistanceCategoryHome,
    dynamicHeaderAnimation,
    searchBoxAnim,
    searchInputAnim,
    dataMenu,
    isLoadingMenu,
    arrayImage,
    isLoadingBanner,
    dataCategory,
    isLoadingCategory,
    handleScroll,
    handleEndScroll,
    handleEndDragScroll,
    boxLocationAnim,
    iconAnim,
    textLocationAnim,
    textTitleLocationAnim,
    showBottomSheet,
    setShowBottomSheet,
  } as IDataHomeProvider;
  return (
    <HomeContext.Provider value={dataProvider}>{children}</HomeContext.Provider>
  );
};

const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('Home context error');
  }

  return context as IDataHomeProvider;
};

export {HomeProvider, useHome};
