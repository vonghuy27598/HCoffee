import {NavigationProp} from '@react-navigation/native';

export interface IAppRootProviderType {
  currentScreen: string;
  navigate: NavigationProp<ReactNavigation.RootParamList>;
}
