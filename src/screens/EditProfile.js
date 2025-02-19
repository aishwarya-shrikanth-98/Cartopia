import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/EditProfile_Styles';
import { getUserProfile, updateUserProfile, getUserList } from '../services/EditProfile_Services';
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
        const userEmail = await AsyncStorage.getItem('user_email');

        // Fetch the list of users
        const users = await getUserList();

        // Find the user with the matching email
        const loggedInUser = users.find(user => user.email === userEmail);

        if (loggedInUser) {
          // Fetch the detailed profile of the logged-in user
          const profile = await getUserProfile(loggedInUser.id);
          setUserProfile(profile);
          setName(profile.name);
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
        <ActivityIndicator size="large" color="black" backgroundColor="#D7D0BC" />
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
      await updateUserProfile(userProfile.id, name, password);
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
        placeholderTextColor="gray"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
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
