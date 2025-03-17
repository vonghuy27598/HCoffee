import React from 'react';
import {View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {PRIMARY_COLOR} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import AppText from '@components/Custom/AppText';

const HeaderInFor = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, styles.flexRowDicrection]}>
      <View style={[styles.headerLeft, styles.flexRowDicrection]}>
        <AppText text="Khác" textFont="bold" textSize={20} />
        <View style={styles.space}></View>
      </View>
      <View style={[styles.headerRight, styles.flexRowDicrection]}>
        <TouchableOpacity style={[styles.iconTouch, {marginRight: 10}]}>
          <Icon name="ticket" size={20} color={PRIMARY_COLOR} />
        </TouchableOpacity>
        <View style={styles.space}></View>
        <TouchableOpacity
          style={styles.iconTouch}
          onPress={() => {
            navigation.navigate('Notification' as never);
          }}>
          <Icon name="notifications-sharp" size={20} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderInFor;
