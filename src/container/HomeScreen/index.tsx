import React from 'react';
import {SafeAreaView} from 'react-native';
import HeaderHome from '../../components/Header/HeaderHome/HeaderHome';

import {HomeProvider} from './Provider/HomeProvider';
import ContainerHome from './Components/ContainerHome';

const HomeScreen = () => {
  return (
    <HomeProvider>
      <SafeAreaView>
        <HeaderHome />
        <ContainerHome />
      </SafeAreaView>
    </HomeProvider>
  );
};
export default HomeScreen;
