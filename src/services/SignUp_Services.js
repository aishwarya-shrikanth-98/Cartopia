import axios from 'axios';

const signUp = async (name, email, password, avatarUrl) => {
  const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
    email,
    password,
    name,
    avatar: avatarUrl,
  });
  return response.data;
};

const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{1,30}$/;
  return nameRegex.test(name);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

export {
  signUp,
  validateName,
  validateEmail,
  validatePassword,
};
