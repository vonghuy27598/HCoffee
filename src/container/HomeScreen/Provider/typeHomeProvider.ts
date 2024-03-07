import {ApolloError} from '@apollo/client';
import {NavigationProp} from '@react-navigation/native';
import {IStoreCartType} from '@type/cartType';
import {ICategoryMenu} from '@type/categoryMenuType';
import {ICategoryType, ILineProductByCateType} from '@type/categoryType';
import {ILayoutFlatlist} from '@type/layoutFlatlistType';
import {IProductType} from '@type/productType';
import {ISelectToppingType, IToppingType} from '@type/toppingType';
import {Animated, ScrollView} from 'react-native';

export interface IDataHomeProvider {
  animHeader: Animated.Value;
  animHeaderBG: Animated.Value;
  scrollRefHome: React.RefObject<ScrollView>;
  scrollDirection: React.MutableRefObject<string>;
  lastOffsetY: React.MutableRefObject<number>;
  showBottomSheet: boolean;
  setShowBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  distanceCategoryHome: number;
  setDistanceCategoryHome: React.Dispatch<React.SetStateAction<number>>;
  dynamicHeaderAnimation: {
    backgroundColor: Animated.AnimatedInterpolation<string | number>;
    shadowColor: Animated.AnimatedInterpolation<string | number>;
  };
  searchBoxAnim: {
    width: Animated.AnimatedInterpolation<string | number>;
    opacity: Animated.AnimatedInterpolation<string | number>;
  };
  searchInputAnim: {
    width: Animated.AnimatedInterpolation<string | number>;
    opacity: Animated.AnimatedInterpolation<string | number>;
  };
  dispatch: any;
  dataMenu: ICategoryMenu[];
  isLoadingMenu: boolean;
  arrayImage: string[];
  isLoadingBanner: boolean;
  dataCategory: ICategoryType[];
  isLoadingCategory: boolean;
  loadingProduct: boolean;
  errorProduct: ApolloError | undefined;
  dataProduct:
    | {
        [x: string]: ILineProductByCateType[];
      }
    | undefined;
  selectProduct: (idCateName: number, idProduct: number) => void;
  chooseProduct: IProductType | undefined;
  checkSize: string;
  setCheckSize: React.Dispatch<React.SetStateAction<string>>;
  listTopping: IToppingType[];
  setListTopping: React.Dispatch<React.SetStateAction<IToppingType[]>>;
  getTopping: (listIdTopping: number[]) => Promise<void>;
  setSelectTopping: (listSelect: ISelectToppingType[]) => void;
  listSelectTopping: ISelectToppingType[];
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  addToCart: () => void;
}
