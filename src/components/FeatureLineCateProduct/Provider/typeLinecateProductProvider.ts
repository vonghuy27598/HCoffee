import {ApolloError} from '@apollo/client';
import {NavigationProp} from '@react-navigation/native';
import {ICategoryType, ILineProductByCateType} from '@type/categoryType';

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
  setPosition: (index: number, layout: number) => void;
  distanceLineProductCate: number;
  setDistaceLineProductCate: React.Dispatch<React.SetStateAction<number>>;
  navigate: NavigationProp<ReactNavigation.RootParamList>;
  currentScreen: React.MutableRefObject<string>;
  setHeightBoxCate: React.Dispatch<React.SetStateAction<number>>;
}
