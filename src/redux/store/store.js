import {createStore, applyMiddleware, compose} from 'redux';

import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducer';

const reduxMiddlewares = [
  thunk,
  logger,
  // more middleware
];

const configureStore = () => {
  store = compose(applyMiddleware(...reduxMiddlewares))(createStore)(reducers);
  return store;
};

export default configureStore;
