import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { searchMiddleware, showMiddleware } from './middlewares';

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(searchMiddleware),
      applyMiddleware(showMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  return store;
};
