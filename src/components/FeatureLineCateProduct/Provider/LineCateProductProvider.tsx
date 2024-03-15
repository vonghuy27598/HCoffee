/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {IDataLineCateProductType} from './typeLinecateProductProvider';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {useQuery} from '@apollo/client';
import {getProductByCate} from '@graphQL/services/serviceLineProductByCate';
import {setPositionCategory} from '@redux/action/categoryAction';
import {useHome} from '@container/HomeScreen/Provider/HomeProvider';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ILayoutFlatlist} from '@type/layoutFlatlistType';
import {useOrder} from '@container/OrderScreen/Provider/OrderProvider';
import {getAllTopping} from '@graphQL/services/serviceGetAllTopping';
import {IProductType} from '@type/productType';
import {
  selectOptionBuy,
  selectTopping,
  setCart,
} from '@redux/action/cartAction';
import {ISelectToppingType, IToppingType} from '@type/toppingType';
import {Helper} from '@common/index';
import {IStoreOptionBuyProductType} from '@type/cartType';

const LineCateProductContext = createContext({});

const LineCateProductProvider = ({children}: {children: React.ReactNode}) => {
  const {scrollRefHome, distanceCategoryHome} = useHome();
  const {scrollOrderRef} = useOrder();
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [chooseProduct, setChooseProduct] = useState<IProductType>();
  const [listTopping, setListTopping] = useState<IToppingType[]>([]);
  const [checkSize, setCheckSize] = useState(
    !Helper.checkZeroPrice(chooseProduct?.smallPrice ?? 0)
      ? 'smallPrice'
      : 'mediumPrice',
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const navigate = useNavigation();
  const indexCurrentScreen = navigate.getState().index;
  const currentScreen = useRef('');
  const isFocused = useIsFocused();
  const [arrPosition, setArrPosition] = useState<ILayoutFlatlist[]>([]);
  if (isFocused) {
    currentScreen.current = navigate.getState().routeNames[indexCurrentScreen];
  }
  const [distanceLineProductCate, setDistaceLineProductCate] =
    useState<number>(0);
  const [heightBoxCate, setHeightBoxCate] = useState<number>(0);
  const [heightLineCate, setHeightLineCate] = useState<number[]>();
  const dispatch = useDispatch<any>();

  const {dataCategory, isLoadingCategory} = useSelector(
    (state: RootState) => state.getCategoryReducer,
  );
  const {dataPosition} = useSelector(
    (state: RootState) => state.setPositionCategory,
  );
  const dataSelectBuy = useSelector(
    (state: RootState) => state.selectOptionBuyReducer,
  );
  const {listSelectTopping} = useSelector(
    (state: RootState) => state.selectToppingReducer,
  );
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
  const handleChooseCategory = (itemIndex: number) => {
    const temp = dataPosition.find(x => x.screenName === currentScreen.current);
    let offSetY = temp?.listPosition[itemIndex].layout ?? 0; // set default offsetY = first position line cate
    scrollToCategory(offSetY);
  };
  const scrollToCategory = (offSetY: number) => {
    if (currentScreen.current === 'HomeTab') {
      console.log(
        'SCROLL TOOO',
        distanceCategoryHome,
        heightBoxCate,
        distanceLineProductCate,
        offSetY,
      );

      scrollRefHome.current?.scrollTo({
        y: offSetY,
        animated: true,
      });
    } else if (currentScreen.current === 'OrderTab') {
      scrollOrderRef.current?.scrollTo({
        y: offSetY,
        animated: true,
      });
    }
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
  useEffect(() => {
    if (arrPosition.length > 0 && arrPosition.length === dataCategory.length) {
      dispatch(
        setPositionCategory({
          screenName: currentScreen.current,
          listPosition: arrPosition,
        }),
      );
    }
  }, [arrPosition]);

  const setPosition = (index: number, cateName: string) => {
    let logicDistancePosition = 0;
    if (currentScreen.current === 'HomeTab') {
      logicDistancePosition +=
        distanceCategoryHome -
        68.4 + // height header
        +heightBoxCate +
        20 + // 20 marginVertical
        distanceLineProductCate; // marginVertical of line cate
    } else if (currentScreen.current === 'OrderTab') {
      logicDistancePosition +=
        // 0 -
        // 68.4 + // height header
        heightBoxCate +
        20 + // 20 marginVertical
        distanceLineProductCate; // marginVertical of line cate
    }

    let layoutCate = 0;
    for (let i = 0; i <= index - 1; i++) {
      layoutCate += heightLineCate![i] + 30; // vị trí line cate đầu tiên sẽ bằng với giá trị tính loginDistacePostion, các vị trí tiếp theo sẽ + height của line trước đó
    }
    setArrPosition([
      ...arrPosition,
      {index, layout: logicDistancePosition + layoutCate, cateName},
    ]); // 30 // marginVertical of line cate
  };
  const dataProvider = {
    dataCategory,
    dataProduct,
    errorProduct,
    handleChooseCategory,
    isLoadingCategory,
    loadingProduct,
    setPosition,
    distanceLineProductCate,
    setDistaceLineProductCate,
    navigate,
    currentScreen,
    setHeightBoxCate,
    selectProduct,
    chooseProduct,
    checkSize,
    setCheckSize,
    listTopping,
    setListTopping,
    getTopping,
    setSelectTopping,
    listSelectTopping,
    quantity,
    setQuantity,
    totalPrice,
    setTotalPrice,
    addToCart,
    showBottomSheet,
    setShowBottomSheet,
    setHeightLineCate,
    heightLineCate,
  } as IDataLineCateProductType;

  return (
    <LineCateProductContext.Provider value={dataProvider}>
      {children}
    </LineCateProductContext.Provider>
  );
};

const useLineCateProduct = () => {
  const context = useContext(LineCateProductContext);
  if (!context) {
    throw new Error('LineCateProduct context error');
  }

  return context as IDataLineCateProductType;
};

export {LineCateProductProvider, useLineCateProduct};
