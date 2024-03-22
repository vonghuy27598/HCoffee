import {Alert, Platform} from 'react-native';
import * as permissions from 'react-native-permissions';
import {PERMISSIONS_LOCATION_APP} from '../constants/storage';
import {permisstionLocationType} from '@type/permissionType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {getLocationUserAction} from '@redux/action/locationAction';

const checkRequestLocation =
  Platform.OS === 'ios'
    ? permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

const setLocalStorageLocation = async (localStorage: any) => {
  const storageLocation = {
    android: {
      PERMISSIONS_ANDROID_ACCESS_BACKGROUND_LOCATION:
        Platform.OS === 'android' &&
        localStorage[
          permissions.PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
        ],
      PERMISSIONS_ANDROID_ACCESS_FINE_LOCATION:
        Platform.OS === 'android' &&
        localStorage[permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
    },
    ios: {
      PERMISSIONS_IOS_LOCATION_ALWAYS:
        Platform.OS === 'ios' &&
        localStorage[permissions.PERMISSIONS.IOS.LOCATION_ALWAYS],
      PERMISSIONS_IOS_LOCATION_WHEN_IN_USE:
        Platform.OS === 'ios' &&
        localStorage[permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
    },
  };
  console.log('checkPermission', storageLocation);
  await AsyncStorage.setItem(
    PERMISSIONS_LOCATION_APP,
    JSON.stringify(storageLocation),
  );
};

const checkBlockedPermissionLocation = async () => {
  console.log(
    'checkBlockedPermissionLocation request',
    await permissions.check(checkRequestLocation),
  );
  const statusPermission = await permissions.check(checkRequestLocation);

  return Platform.OS === 'android'
    ? statusPermission === 'blocked'
    : statusPermission === 'blocked';
};

export const firstCheckPermissionLocation = () => {
  permissions.check(checkRequestLocation).then(statuses => {
    console.log('firstCheckPermissionLocation', statuses);

    // const inUse =
    //   Platform.OS === 'android'
    //     ? statuse === 'granted'
    //     : statuses === 'granted';
    // const allTime =
    //   Platform.OS === 'android'
    //     ? statuses[
    //         permissions.PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
    //       ] === 'granted'
    //     : statuses[permissions.PERMISSIONS.IOS.LOCATION_ALWAYS] === 'granted';
    // setLocalStorageLocation(statuses);
    // if (inUse && allTime) {
    //   return;
    // }
  });
};

// const getCurrentPosition = () => {
//   const dispatch = useDispatch<any>();
//   Geolocation.getCurrentPosition(
//     (postion: any) => {
//       console.log('onReady App', postion);
//       if (postion.coords) {
//         dispatch(
//           getLocationUserAction(
//             postion.coords.latitude,
//             postion.coords.longitude,
//           ),
//         );
//       }
//     },
//     (err: any) => {
//       console.log('getCurrentPosition error', err);
//     },
//     () => null,
//   );
// };

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

  //   if (await checkBlockedPermissionLocation()) {
  //     Alert.alert(
  //       'Quyền truy cập bị chặn',
  //       'Vui lòng mở quyền truy cập vị trí hiện tại',
  //       [
  //         {
  //           text: 'Đồng ý',
  //           onPress: () => {
  //             permissions.openSettings();
  //           },
  //         },
  //         {
  //           text: 'Hủy',
  //         },
  //       ],
  //     );
  //   } else {
  //     permissions.request(checkRequestLocation).then(result => {
  //       console.log('result', result);
  //       Alert.alert(
  //         'Quyền truy cập bị chặn',
  //         'Vui lòng mở quyền truy cập vị trí hiện tại',
  //         [
  //           {
  //             text: 'Đồng ý',
  //             onPress: () => {
  //               permissions.openSettings();
  //             },
  //           },
  //           {
  //             text: 'Hủy',
  //           },
  //         ],
  //       );
  //       //   const inUsePermission =
  //       //     Platform.OS === 'android'
  //       //       ? result[permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] ===
  //       //         'granted'
  //       //       : result[permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] ===
  //       //         'granted';
  //       //   const allTimePermission =
  //       //     Platform.OS === 'android'
  //       //       ? result[
  //       //           permissions.PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
  //       //         ] === 'granted'
  //       //       : result[permissions.PERMISSIONS.IOS.LOCATION_ALWAYS] === 'granted';
  //       //   if (inUsePermission && allTimePermission) {
  //       //     setLocalStorageLocation(result);
  //       //     return;
  //       //   }
  //       //   if (allTimePermission === false) {
  //       //     console.log('checkBlockedPermissionLocation result', result);
  //       //     setLocalStorageLocation(result);
  //       //     console.log('Background location permission denied');
  //       //     return;
  //       //   }
  //       //   setLocalStorageLocation(result);
  //       //   console.log('Location permission denied');
  //     });
  //   }
};

// export const requestPermission = () => {};
