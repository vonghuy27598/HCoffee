import {Helper} from '@common/index';
import {constantsURL, fetchAPI} from '@config/api';
import {IFetchAPI} from '@config/api/fetchAPI';
import {typeCategoryAction} from '@redux/constants/typeCategoryAction';
import {AppDispatch, RootState} from '@redux/store';
import {
  IStorePositionCategoryType,
  IStoreScreenCategoryPositionType,
} from '@type/categoryType';
import {ILayoutFlatlist} from '@type/layoutFlatlistType';

export const getAllCategory = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const paramsAPI: IFetchAPI = {
        url: constantsURL.GET_CATEGORY,
      };

      const response = await fetchAPI(paramsAPI);
      if (!Helper.isNullOrUndefined(response)) {
        dispatch(
          Helper.createAction(typeCategoryAction.ACTION_GET_CATEGORY, response),
        );
      }
    } catch (errors) {
      // create error log and dispatch
      //   dispatch(.....)
      console.log('ERROR getAllCategory', errors);
    }
  };
};

export const setPositionCategory = ({
  screenName,
  listPosition,
}: IStorePositionCategoryType) => {
  return async (dispatch: AppDispatch, state: () => RootState) => {
    console.log('ACTIONNNNNNNNN CCC', state().setPositionCategory.dataPosition);

    dispatch(
      Helper.createAction(typeCategoryAction.ACTION_SET_POSITION_CATEGORY, {
        screenName,
        listPosition,
      }),
    );
  };
};
