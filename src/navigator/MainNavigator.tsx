import React, {useEffect} from 'react';
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
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import NotificationScreen from '@container/NotificationScreen';
import LoginScreen from '@container/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONSTANTS_STORAGE} from '../constants';
import {genarateApp} from '@redux/action/genarateAction';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'Hcoffe thông báo',
        JSON.stringify(remoteMessage.notification?.body),
      );
    });

    return unsubscribe;
  }, []);
  const initApp = async () => {
    try {
      dispatch(genarateApp());
      onAppBootstrap();
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
          await PermissionApp.firstCheckPermissionNotification();
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
  const onAppBootstrap = async () => {
    // Register the device with FCM
    await messaging().registerDeviceForRemoteMessages();

    // Get the token
    const token = await messaging().getToken();
    console.log('TOKEN NOTIFICATION', token);

    // Check login user
    // Save token
    await AsyncStorage.setItem(CONSTANTS_STORAGE.TOKEN_NOTIFY, token);
  };
  const onMessageReceived = (message: FirebaseMessagingTypes.RemoteMessage) => {
    notifee.displayNotification({
      title: message.notification?.title,
      body: message.notification?.body,
    });
    console.log('onMessageReceived', message.notification);
  };

  messaging().onMessage(onMessageReceived);
  messaging().setBackgroundMessageHandler(onMessageReceived as any);
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
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            animationTypeForReplace: 'push',
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
