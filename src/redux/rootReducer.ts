import {combineReducers} from 'redux';
import {getCategoryMenuReducer} from './reducer/categoryMenuReducer';

const rootReducer = combineReducers({
  getCategoryMenuReducer,
});

export default ({state, action}: any) => rootReducer(state, action);
