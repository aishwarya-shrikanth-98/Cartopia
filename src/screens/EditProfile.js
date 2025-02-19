import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { styles } from '../styles/EditProfile_Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access_token');
        const userEmail = await AsyncStorage.getItem('user_email');

        // Fetch the list of users
        const usersResponse = await axios.get('https://api.escuelajs.co/api/v1/users', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        // Find the user with the matching email
        const loggedInUser = usersResponse.data.find(user => user.email === userEmail);

        if (loggedInUser) {
          // Fetch the detailed profile of the logged-in user
          const profileResponse = await axios.get(`https://api.escuelajs.co/api/v1/users/${loggedInUser.id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
          setUserProfile(profileResponse.data);
          setName(profileResponse.data.name);
        } else {
          console.error('User not found.');
        }
      } catch (error) {
        console.error('Failed to fetch user profile.', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (!userProfile) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>User profile is not available.</Text>
      </View>
    );
  }

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      const accessToken = await AsyncStorage.getItem('access_token');
      const response = await axios.put(`https://api.escuelajs.co/api/v1/users/${userProfile.id}`, {
        name,
        password,
      }, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      Alert.alert('Success', 'User information updated successfully.');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Update failed', 'An error occurred. Please try again.');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
      <Text style={styles.email}>{userProfile.email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdate} disabled={updating}>
        <Text style={styles.buttonText}>{updating ? 'Updating...' : 'Update'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
