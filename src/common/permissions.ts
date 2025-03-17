import {Alert, Platform} from 'react-native';
import * as permissions from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
//#region PERMISSION LOCATION APP

const checkRequestLocation =
  Platform.OS === 'ios'
    ? permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const firstCheckPermissionLocation = async () => {
  await permissions.check(checkRequestLocation).then(statuses => {
    console.log('firstCheckPermissionLocation', statuses);
  });
};
export const requestPermissionLocation = async () => {
  const status = await permissions.request(checkRequestLocation);
  if (status === 'blocked') {
    Alert.alert(
      'Quyền truy cập bị chặn',
      'Vui lòng mở quyền truy cập vị trí hiện tại',
      [
        {
          text: 'Đồng ý',
          onPress: () => {
            permissions.openSettings();
          },
        },
        {
          text: 'Hủy',
        },
      ],
    );
    return false;
  } else if (status === 'granted') {
    return true;
  }
  return false;
};

//#endregion

//#region PERMISSION NOTIFICATION APP

export const firstCheckPermissionNotification = async () => {
  if (Platform.OS === 'ios') {
    // IOS
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  } else {
    //ANDROID
    await permissions
      .request(permissions.PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
      .then(status => {
        console.log('PERMISSION NOTIFICATION ANDROID', status);
      });
  }
};

export const requestPermissionNotification = async () => {
  const statusPermission = await messaging().hasPermission();
  if (statusPermission !== messaging.AuthorizationStatus.AUTHORIZED) {
    Alert.alert(
      'Quyền ứng dụng',
      'Quý khách vui lòng bật tính năng thông báo để nhận được những cập nhật từ HCoffee nhé!',
      [
        {
          text: 'Đồng ý',
          onPress: () => permissions.openSettings(),
        },
        {
          text: 'Hủy',
        },
      ],
    );
  }
};

//#region
