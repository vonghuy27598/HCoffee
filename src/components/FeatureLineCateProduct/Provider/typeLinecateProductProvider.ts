import {ApolloError} from '@apollo/client';
import {NavigationProp} from '@react-navigation/native';
import {ICategoryType, ILineProductByCateType} from '@type/categoryType';
import {IProductType} from '@type/productType';
import {ISelectToppingType, IToppingType} from '@type/toppingType';

export interface IDataLineCateProductType {
  dataCategory: ICategoryType[];
  isLoadingCategory: false;
  handleChooseCategory: (itemIndex: number) => void;
  loadingProduct: boolean;
  errorProduct: ApolloError | undefined;
  dataProduct:
    | {
        [x: string]: ILineProductByCateType[];
      }
    | undefined;
  setPosition: (index: number, cateName: string) => void;
  distanceLineProductCate: number;
  setDistaceLineProductCate: React.Dispatch<React.SetStateAction<number>>;
  navigate: NavigationProp<ReactNavigation.RootParamList>;
  currentScreen: React.MutableRefObject<string>;
  setHeightBoxCate: React.Dispatch<React.SetStateAction<number>>;
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
  showBottomSheet: boolean;
  setShowBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setHeightLineCate: React.Dispatch<React.SetStateAction<number[] | undefined>>;
  heightLineCate: number[];
}
