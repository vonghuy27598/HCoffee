import React from 'react';
import {SafeAreaView} from 'react-native';
import HeaderHome from '../../components/Header/HeaderHome/HeaderHome';

import {HomeProvider} from './Provider/HomeProvider';
import ContainerHome from './Components/ContainerHome';
import BoxLocation from '@components/BoxLocation';

const HomeScreen = () => {
  return (
    <HomeProvider>
      <SafeAreaView style={{flex: 1}}>
        <HeaderHome />
        <ContainerHome />
        <BoxLocation />
      </SafeAreaView>
    </HomeProvider>
  );
};
export default HomeScreen;
