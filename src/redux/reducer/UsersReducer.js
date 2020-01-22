import {FETCH_USER} from '../constants';
import {getRequest, endPoint} from '../../api/server';

export const actions = {
  storeUsersData: data => {
    return {type: FETCH_USER, payload: data};
  },
};

export const fetchUsers = () => {
  return async dispatch => {
    try {
      let userResponse = await getRequest(endPoint.users);
      dispatch(actions.storeUsersData(userResponse));
      return userResponse;
    } catch (error) {
      throw error;
    }
    // finally {

    // }
  };
};

const initialState = {
  userData: [],
  loading: true,
};

export const reducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case FETCH_USER:
      return {...state, userData: action.payload, loading: false};
    default:
      return state;
  }
};
