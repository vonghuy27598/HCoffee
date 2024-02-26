import {combineReducers} from 'redux';
import {getCategoryMenuReducer} from './reducer/categoryMenuReducer';
import {getBannerHomeReducer} from './reducer/bannerReducer';
const appReducer = combineReducers({
  getCategoryMenuReducer,
  getBannerHomeReducer,
});

const rootReducer = (state: any, action: any) => {
  // when a logout action is dispatched it will reset redux state
  switch (action.type) {
    case 'RESET_ALL':
      break;
    default:
      break;
  }

  return appReducer(state, action);
};

export {rootReducer};
