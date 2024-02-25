import {applyMiddleware, compose, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {rootReducer} from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, loggerMiddleware)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
