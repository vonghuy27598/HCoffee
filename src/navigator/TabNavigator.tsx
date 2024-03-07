import HomeScreen from '@container/HomeScreen';
import OrderScreen from '@container/OrderScreen';
import PromotionScreen from '@container/PromotionScreen';
import StoreScreen from '@container/StoreScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants';

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
        name="PromotionTab"
        component={PromotionScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Ưu đãi',
          tabBarIcon: ({color, size}) => (
            <Icon name="discount" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
