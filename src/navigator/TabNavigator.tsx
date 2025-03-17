import HomeScreen from '@container/HomeScreen';
import OrderScreen from '@container/OrderScreen';
import PromotionScreen from '@container/PromotionScreen';
import StoreScreen from '@container/StoreScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants';
import InforScreen from '@container/InforScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY_COLOR,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderTab"
        component={OrderScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Đặt hàng',
          tabBarIcon: ({color, size}) => (
            <Icon name="coffee" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="StoreTab"
        component={StoreScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Cửa hàng',
          tabBarIcon: ({color, size}) => (
            <Icon name="store" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="InforTab"
        component={InforScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Khác',
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
