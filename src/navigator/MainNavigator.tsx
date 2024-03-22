import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import TabNavigator from './TabNavigator';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {getLocationUserAction} from '@redux/action/locationAction';
import {PermissionApp} from '@common/index';
import {Alert} from 'react-native';
import {getCart} from '@redux/action/cartAction';
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  const dispatch = useDispatch<any>();
  const initApp = () => {
    try {
      dispatch(getCart());
      Geolocation.getCurrentPosition(
        async (postion: any) => {
          console.log('onReady App', postion);
          if (postion.coords) {
            await dispatch(
              getLocationUserAction(
                postion.coords.latitude,
                postion.coords.longitude,
              ),
            );
          }
          BootSplash.hide({fade: true});
        },
        (err: any) => {
          console.log('getCurrentPosition error', err);
        },
        {
          timeout: 100000,
          maximumAge: 100000,
          enableHighAccuracy: true,
        },
      );
      // PermissionApp.firstCheckPermissionLocation();
    } catch (error) {
      Alert.alert('Lỗi hệ thống', 'HCoffee gặp vấn đề khi khởi tạo ứng dụng');
      console.log('ERROR INIT APP', error);
    }
  };

  return (
    <NavigationContainer
      onReady={() => {
        console.log('onReady App');
        initApp();
      }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
