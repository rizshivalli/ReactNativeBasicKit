import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home/HomeScreen';
import UsersScreen from './screens/Users/UsersScreen';
import LoginScreen from './screens/Login/LoginScreen';

const mainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerShown: true,
      }),
    },
    Users: {
      screen: UsersScreen,
      navigationOptions: () => ({
        headerShown: true,
      }),
    },
    Login: {
      screen: LoginScreen,
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
