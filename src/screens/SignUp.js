// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { styles } from '../styles/SignUp_Styles';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const handleSignUp = async () => {
    // Perform validation
    if (!isFormValid()) {
      Alert.alert('Error', 'Please fill in all required fields with valid information.');
      return;
    }

    const avatarUrl = 'https://picsum.photos/800';

    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
        email,
        password,
        name,
        avatar: avatarUrl,
      });
      Alert.alert('Success', 'User created successfully. Please log in.');
      navigation.navigate('Login');
    } catch (error) {
      if (error.response) {
        Alert.alert('Sign Up failed', `Error: ${error.response.data.message}`);
      } else {
        Alert.alert('Sign Up failed', 'An error occurred. Please try again.');
      }
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
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

  const handleNameChange = (value) => {
    setName(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: !validateName(value) ? 'Name should not contain more than 30 characters, numbers, or special characters.' : '',
    }));
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: !validateEmail(value) ? 'Please enter a valid email address.' : '',
    }));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: !validatePassword(value) ? 'Password should contain only letters and numbers and be at least 8 characters long.' : '',
    }));
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: value !== password ? 'Passwords do not match.' : '',
    }));
  };

  const isFormValid = () => {
    return (
      name &&
      email &&
      password &&
      confirmPassword &&
      !errors.name &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: 'https://picsum.photos/800' }} style={styles.profileImage} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name*"
          value={name}
          onChangeText={handleNameChange}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Email*"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password*"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password*"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          secureTextEntry
        />
        {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
        <TouchableOpacity style={[styles.button, { opacity: isFormValid() ? 1 : 0.5 }]} onPress={handleSignUp} disabled={!isFormValid()}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Already a user? Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;