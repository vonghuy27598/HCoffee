import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import {AppProvider} from './AppProvider';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <MainNavigator />
      </AppProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
