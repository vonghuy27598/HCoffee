import {typeLocationAction} from '@redux/constants/typeLocationAction';
import {locationUserStore} from '@redux/store/locationStore';
import {IStoreLocationUserType} from '@type/locationType';

export const getLocationUserReducer = (
  state = locationUserStore,
  action: any,
): IStoreLocationUserType => {
  const {type, payload} = action;
  switch (type) {
    case typeLocationAction.ACTION_GET_CURRENT_LOCATION:
      return {
        ...state,
        items: payload.items,
      };
    default:
      return state;
  }
};
