import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Login_Styles';
import { validateEmail, login, getUserProfile } from '../services/Login_Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleValidateEmail = async (email) => {
    try {
      const isAvailable = await validateEmail(email);
      if (isAvailable) {
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
      const { access_token, refresh_token } = await login(email, password);

      // Save tokens and email to secure storage
      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);
      await AsyncStorage.setItem('user_email', email);

      // Fetch user profile with access token
      const userProfile = await getUserProfile();

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
        <Text style={styles.title}>Login to Cartopia</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor='gray'
          value={email}
          onChangeText={(value) => {
            setEmail(value);
            handleValidateEmail(value);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor='gray'
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
