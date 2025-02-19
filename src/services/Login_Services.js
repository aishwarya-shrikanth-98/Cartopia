import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validateEmail = async (email) => {
  const response = await axios.post('https://api.escuelajs.co/api/v1/users/is-available', { email });
  return response.data.isAvailable;
};

const login = async (email, password) => {
  const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
    email,
    password,
  });
  return response.data;
};

const getUserProfile = async () => {
  const accessToken = await AsyncStorage.getItem('access_token');
  const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export {
  validateEmail,
  login,
  getUserProfile,
};
