import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware),
    applyMiddleware(loggerMiddleware)
  );
  return store;
};
