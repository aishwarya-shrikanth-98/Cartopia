import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/Login_Styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const validateEmail = async (email) => {
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/users/is-available', { email });
      if (response.data.isAvailable) {
        setEmailError('Email is not registered.');
      } else {
        setEmailError('');
      }
    } catch (error) {
      setEmailError('An error occurred while checking the email.');
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email,
        password,
      });
      const { access_token, refresh_token } = response.data;

      // Save tokens and email to secure storage
      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);
      await AsyncStorage.setItem('user_email', email);

      // Fetch user profile with access token
      const profileResponse = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      const userProfile = profileResponse.data;

      // Navigate to Home screen with user profile
      navigation.navigate('Home', { userProfile });

    } catch (error) {
      if (error.response) {
        Alert.alert('Login failed', `Error: ${error.response.data.message}`);
      } else {
        Alert.alert('Login failed', 'An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const isFormValid = () => {
    return email && password && !emailError;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(value) => {
            setEmail(value);
            validateEmail(value);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={[styles.button, { opacity: isFormValid() ? 1 : 0.5 }]} onPress={handleLogin} disabled={!isFormValid() || loading}>
          <Text style={styles.buttonText}>{loading ? 'Loading...' : 'Login'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUp}>New user? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
