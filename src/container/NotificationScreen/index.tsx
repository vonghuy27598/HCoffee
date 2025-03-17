import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {PermissionApp} from '@common/index';

const NotificationScreen = () => {
  useEffect(() => {
    PermissionApp.requestPermissionNotification();
  }, []);
  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;
