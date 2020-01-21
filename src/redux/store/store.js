import {createStore, applyMiddleware, compose} from 'redux';

import {logger} from 'redux-logger';
import reducers from '../reducer';

const reduxMiddlewares = [
  logger,
  // more middleware
];

const configureStore = () => {
  store = compose(applyMiddleware(...reduxMiddlewares))(createStore)(reducers);
  return store;
};

export default configureStore;
