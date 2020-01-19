import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home/HomeScreen';
import UsersScreen from './screens/Users/UsersScreen';

const mainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    Users: {
      screen: UsersScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
  },
);

const RootRouter = createAppContainer(mainNavigator);

export default RootRouter;
