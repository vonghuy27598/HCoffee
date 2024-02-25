import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '@components/Custom/AppText';

const ButtonBuy = () => {
  return (
    <TouchableOpacity style={styles.btnBuy}>
      <AppText style={{fontWeight: '700'}} text="MUA" />
    </TouchableOpacity>
  );
};

export default ButtonBuy;

const styles = StyleSheet.create({
  btnBuy: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdccbf',
    padding: 2,
    borderRadius: 3,
  },
});
