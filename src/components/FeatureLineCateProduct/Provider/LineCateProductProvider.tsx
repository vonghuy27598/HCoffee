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
import {IStorePositionCategoryType} from '@type/categoryType';
import {ILayoutFlatlist} from '@type/layoutFlatlistType';
import {useOrder} from '@container/OrderScreen/Provider/OrderProvider';

const LineCateProductContext = createContext({});

const LineCateProductProvider = ({children}: {children: React.ReactNode}) => {
  const {scrollRefHome, distanceCategoryHome} = useHome();
  const {scrollOrderRef} = useOrder();
  // const [currentScreen, setCurrentScreen] = useState('');
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
  const dispatch = useDispatch<any>();

  const {dataCategory, isLoadingCategory} = useSelector(
    (state: RootState) => state.getCategoryReducer,
  );
  const {dataPosition} = useSelector(
    (state: RootState) => state.setPositionCategory,
  );
  const handleChooseCategory = (itemIndex: number) => {
    let offSetY = 0;
    const temp = dataPosition.filter(
      x => x.screenName === currentScreen.current,
    );
    for (let index = 0; index < itemIndex; index++) {
      offSetY += temp[0].listPosition[index].layout;
    }
    console.log(
      'SCROLL TOOO OFFSETY',
      offSetY,
      itemIndex,
      temp[0].listPosition,
    );
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
        y:
          distanceCategoryHome -
          68.4 + // height header
          heightBoxCate +
          20 + // 20 marginVertical
          distanceLineProductCate +
          offSetY,
        animated: true,
      });
    } else if (currentScreen.current === 'OrderTab') {
      scrollOrderRef.current?.scrollTo({
        y:
          heightBoxCate -
          68.4 + // height header
          20 + // 20 marginVertical
          distanceLineProductCate +
          offSetY,
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
  const setPosition = (index: number, layout: number) => {
    setArrPosition([...arrPosition, {index, layout: layout + 30}]); // 30 margin vertical
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
