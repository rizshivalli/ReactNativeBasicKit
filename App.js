import React from 'react';
import {View, Text} from 'react-native';
import RootRouter from './src/RootRouter';

const App = () => {
  const getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // Dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  };

  return <RootRouter />;
};

export default App;
