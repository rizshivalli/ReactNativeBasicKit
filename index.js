/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import NetworkListener from './src/services/NetworkListener';

import configureStore from './src/redux/store/store';

const store = configureStore();

const RNApp = () => (
  <StoreProvider store={store}>
    <PaperProvider>
      <App />
      <NetworkListener />
    </PaperProvider>
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => RNApp);
