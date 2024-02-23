import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducer/rootReducer';
import {thunk} from 'redux-thunk';
import { createLogger } from 'redux-logger';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const loggerMiddleware = createLogger();
  export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
);

