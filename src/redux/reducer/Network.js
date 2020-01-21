import {NETWORK_CHANGE} from '../constants';

export const actions = {
  updateNetwork: isConnected => {
    console.log(123456);
    return {type: NETWORK_CHANGE, isConnected};
  },
};

const initialState = {
  isConnected: true,
};

export const reducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case NETWORK_CHANGE:
      return {...state, isConnected: action.isConnected};
    default:
      return state;
  }
};
