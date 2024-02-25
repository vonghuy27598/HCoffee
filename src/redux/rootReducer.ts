import {combineReducers} from 'redux';
import {getCategoryMenuReducer} from './reducer/categoryMenuReducer';

const appReducer = combineReducers({
  getCategoryMenuReducer,
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
