import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const endPoint = {
  users: 'users',
};

export const checkNetworkConnection = async () => {
  const networkstate = await NetInfo.fetch();
  if (networkstate.isConnected) {
    return true;
  } else {
    return false;
  }
};

export const getRequest = async url => {
  try {
    const response = await api.get(url);
    if (response.status === 200) {
      let responseData = response.data;
      return responseData;
    } else {
      throw responseData.error;
    }
  } catch (error) {
    throw error.response;
  }
};
