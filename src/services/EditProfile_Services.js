import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserProfile = async (userId) => {
  const accessToken = await AsyncStorage.getItem('access_token');
  const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${userId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

const updateUserProfile = async (userId, name, password) => {
  const accessToken = await AsyncStorage.getItem('access_token');
  const response = await axios.put(`https://api.escuelajs.co/api/v1/users/${userId}`, {
    name,
    password,
  }, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

const getUserList = async () => {
  const accessToken = await AsyncStorage.getItem('access_token');
  const response = await axios.get('https://api.escuelajs.co/api/v1/users', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export {
  getUserProfile,
  updateUserProfile,
  getUserList,
};
