import {View} from 'react-native';
import React from 'react';
import HeaderInFor from '@components/Header/HeaderInfor/HeaderInFor';
import ContainerInfor from './Components/ContainerInfor';

const InforScreen = () => {
  return (
    <View>
      <HeaderInFor />
      <ContainerInfor />
    </View>
  );
};

export default InforScreen;
