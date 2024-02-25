import HomeScreen from '@container/Home';
import OrderScreen from '@container/OrderScreen';
import PromotionScreen from '@container/PromotionScreen';
import StoreScreen from '@container/StoreScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => {
          return {headerShown: false};
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={() => {
          return {headerShown: false};
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={() => {
          return {headerShown: false};
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={PromotionScreen}
        options={() => {
          return {headerShown: false};
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
