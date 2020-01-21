import React from 'react';
import {SafeAreaView} from 'react-native';
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <RootRouter />
    </SafeAreaView>
  );
};

export default App;
