import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import TabNavigator from './TabNavigator';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {getLocationUserAction} from '@redux/action/locationAction';
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  const dispatch = useDispatch();
  return (
    <NavigationContainer
      onReady={() => {
        console.log('onReady App');
        Geolocation.getCurrentPosition(postion => {
          console.log('onReady App', postion);
          if (postion.coords) {
            dispatch(
              getLocationUserAction(
                postion.coords.latitude,
                postion.coords.longitude,
              ),
            );
          }
        });
        BootSplash.hide({fade: true});
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
