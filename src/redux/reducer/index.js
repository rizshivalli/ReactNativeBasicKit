// import { combineReducers } from "redux";
import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// You have to import every reducers and combine them.
import {reducer as NetworkReducer} from './NetworkReducer';
import {reducer as UserReducer} from './UsersReducer';

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['network'],
};

// export default combineReducers({
export default persistCombineReducers(persistConfig, {
  network: NetworkReducer,
  user: UserReducer,
});
