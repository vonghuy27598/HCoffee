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
import {useQuery} from '@apollo/client';
import {getProductByCate} from '@graphQL/services/serviceLineProductByCate';
import {useNavigation} from '@react-navigation/native';
import {IProductType} from '@type/productType';
import {Helper} from '@common/index';
import {ISelectToppingType, IToppingType} from '@type/toppingType';
import {
  selectOptionBuy,
  selectTopping,
  setCart,
} from '@redux/action/cartAction';
import {IStoreOptionBuyProductType} from '@type/cartType';
import {getAllTopping} from '@graphQL/services/serviceGetAllTopping';

const HomeContext = createContext({});

const HomeProvider = ({children}: {children: React.ReactNode}) => {
  const animHeader = useRef(new Animated.Value(0)).current;
  const animHeaderBG = useRef(new Animated.Value(0)).current;
  const scrollRefHome = useRef<ScrollView>(null);
  const scrollDirection = useRef('');
  const lastOffsetY = useRef(0);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [distanceCategoryHome, setDistanceCategoryHome] = useState<number>(0);
  const [chooseProduct, setChooseProduct] = useState<IProductType>();
  const [listTopping, setListTopping] = useState<IToppingType[]>([]);
  const [checkSize, setCheckSize] = useState(
    !Helper.checkZeroPrice(chooseProduct?.smallPrice ?? 0)
      ? 'smallPrice'
      : 'mediumPrice',
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
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
  const {listSelectTopping} = useSelector(
    (state: RootState) => state.selectToppingReducer,
  );
  const dataSelectBuy = useSelector(
    (state: RootState) => state.selectOptionBuyReducer,
  );
  useEffect(() => {
    dispatch(getCategoryMenu());
    dispatch(getBannerHome());
    dispatch(getAllCategory());
  }, []);
  const refreshBottomSheet = (
    listSelect: ISelectToppingType[],
    product: IProductType | undefined,
  ) => {
    let checkDefaultSize = '';
    let checkDefaultTotalPrice = 0;
    if (!Helper.checkZeroPrice(product?.smallPrice ?? 0)) {
      checkDefaultSize = 'smallPrice';
      checkDefaultTotalPrice = product?.smallPrice ?? 0;
    } else if (!Helper.checkZeroPrice(product?.mediumPrice ?? 0)) {
      checkDefaultSize = 'mediumPrice';
      checkDefaultTotalPrice = product?.mediumPrice ?? 0;
    } else {
      checkDefaultSize = 'bigPrice';
      checkDefaultTotalPrice = product?.bigPrice ?? 0;
    }
    setCheckSize(checkDefaultSize);
    setTotalPrice(checkDefaultTotalPrice);
    setQuantity(1);
    setSelectTopping(listSelect);
  };
  const getPriceSize = (size: string) => {
    if (size === 'smallPrice') {
      return chooseProduct?.smallPrice ?? 0;
    } else if (size === 'mediumPrice') {
      return chooseProduct?.mediumPrice ?? 0;
    }
    return chooseProduct?.bigPrice ?? 0;
  };
  const getPriceCheckTopping = (listToppingChecked: ISelectToppingType[]) => {
    let sumPriceTopping = 0;
    listToppingChecked
      .filter(x => x.checked)
      .forEach(x => (sumPriceTopping += x.price));

    return sumPriceTopping;
  };
  useEffect(() => {
    if (
      !Helper.isNullOrUndefined(chooseProduct) &&
      !Helper.isNullOrUndefined(listSelectTopping)
    ) {
      setTotalPrice(
        getPriceSize(checkSize) * quantity +
          getPriceCheckTopping(listSelectTopping),
      );
      const data: IStoreOptionBuyProductType = {
        productId: chooseProduct?.productId ?? 0,
        productName: chooseProduct?.productName ?? '',
        quantity: quantity,
        size: checkSize,
        listTopping: listSelectTopping.filter(x => x.checked),
        totalPrice: totalPrice,
        note: '',
      };
      dispatch(selectOptionBuy(data));
    }
  }, [listSelectTopping, checkSize, quantity, totalPrice]);

  const setSelectTopping = (listSelect: ISelectToppingType[]) => {
    setTotalPrice(
      getPriceSize(checkSize) * quantity +
        getPriceCheckTopping(listSelectTopping),
    );
    dispatch(selectTopping(listSelect));
  };
  const {
    loading: loadingProduct,
    error: errorProduct,
    data: dataProduct,
  } = useQuery<typeof getProductByCate.response>(getProductByCate.query, {
    onCompleted(data) {
      console.log(
        'DATA QUERY GET PRODUCT BY CATE',
        data?.getProductByCate,
        getProductByCate.query,
      );
    },
    onError(error) {
      console.log('GET LINE PRODUCT BY CATE FAILED', error);
    },
  });
  const {
    loading: loadingTopping,
    error: errorTopping,
    data: dataToppingQL,
  } = useQuery<typeof getAllTopping.response>(getAllTopping.query, {
    onCompleted(data) {
      console.log('DATA QUERY GET ALL TOPPING', data, getAllTopping.query);
    },
    onError(error) {
      console.log('QUERY GET ALL TOPPING FAILED', error);
    },
  });

  const selectProduct = (idCateName: number, idProduct: number) => {
    const getProduct = dataProduct?.getProductByCate
      ?.find(x => x.categoryId === idCateName)
      ?.listProduct.find(x => x.productId === idProduct);
    setChooseProduct(getProduct);
    getTopping(getProduct?.iD_TypeTopping ?? [], getProduct);
  };

  const addToCart = () => {
    dispatch(setCart(dataSelectBuy));
    setShowBottomSheet(false);
  };

  const getTopping = async (
    listIdTopping: number[],
    product: IProductType | undefined,
  ) => {
    const listTemp = dataToppingQL?.allListTopping.filter(item =>
      listIdTopping.includes(item.toppingId),
    );
    setListTopping(listTemp ?? []);
    const listSelect = listTemp?.map((val: IToppingType) => {
      return {...val, checked: false};
    }) as ISelectToppingType[];
    refreshBottomSheet(listSelect, product);
    setSelectTopping(listSelect);
  };
  const dataProvider = {
    animHeader,
    animHeaderBG,
    scrollRefHome,
    scrollDirection,
    lastOffsetY,
    showBottomSheet,
    setShowBottomSheet,
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
    dataProduct,
    errorProduct,
    loadingProduct,
    selectProduct,
    chooseProduct,
    checkSize,
    setCheckSize,
    listTopping,
    getTopping,
    setSelectTopping,
    listSelectTopping,
    quantity,
    setQuantity,
    totalPrice,
    setTotalPrice,
    addToCart,
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
