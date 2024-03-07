import {combineReducers} from 'redux';
import {getCategoryMenuReducer} from './reducer/categoryMenuReducer';
import {getBannerHomeReducer} from './reducer/bannerReducer';
import {
  getCategoryReducer,
  setPositionCategory,
} from './reducer/categoryReducer';
import {
  selectToppingReducer,
  selectOptionBuyReducer,
  setCartReducer,
} from './reducer/cartReducer';
const appReducer = combineReducers({
  getCategoryMenuReducer,
  getBannerHomeReducer,
  getCategoryReducer,
  setPositionCategory,
  selectToppingReducer,
  selectOptionBuyReducer,
  setCartReducer,
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
