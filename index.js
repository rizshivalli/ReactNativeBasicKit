/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import NetworkListener from './src/services/NetworkListener';

import configureStore from './src/redux/store/store';

const store = configureStore();

const RNApp = () => (
  <Provider store={store}>
    <App />
    <NetworkListener />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNApp);
