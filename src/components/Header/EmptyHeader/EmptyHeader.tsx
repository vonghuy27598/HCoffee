import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import AppText from '@components/Custom/AppText';

const EmptyHeader = ({headerName}: {headerName: string}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, styles.flexRowDicrection]}>
      <View style={[styles.headerLeft, styles.flexRowDicrection]}>
        <AppText text={headerName} textFont="bold" textSize={20} />
        <View style={styles.space}></View>
      </View>
      {/* <View style={[styles.headerRight, styles.flexRowDicrection]}>
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
      </View> */}
    </View>
  );
};

export default EmptyHeader;
