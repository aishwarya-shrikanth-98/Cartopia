import React from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import axios from 'axios';

function CustomDrawerContent(props) {
  const handleDeleteAccount = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const userProfile = props?.state?.routes.find(route => route.name === 'Home')?.params?.userProfile;
      if (userProfile) {
        await axios.delete(`https://api.escuelajs.co/api/v1/users/${userProfile.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        await AsyncStorage.removeItem('access_token');
        await AsyncStorage.removeItem('refresh_token');
        Alert.alert('Account Deleted', 'Your account has been successfully deleted.');
        props.navigation.navigate('Auth', { screen: 'Login' });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to delete account. Please try again.';
      console.error('Failed to delete account.', error);
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.container}>
        <DrawerItem
          label="Home"
          labelStyle={styles.drawerItemLabel}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Edit Profile"
          labelStyle={styles.drawerItemLabel}
          onPress={() => props.navigation.navigate('Edit Profile')}
        />
        <DrawerItem
          label="About Us"
          labelStyle={styles.drawerItemLabel}
          onPress={() => props.navigation.navigate('About Us')}
        />
        <DrawerItem
          label="Terms & Conditions"
          labelStyle={styles.drawerItemLabel}
          onPress={() => props.navigation.navigate('Terms & Conditions')}
        />
        <DrawerItem
          label="Delete Account"
          labelStyle={styles.deleteItemLabel}
          onPress={handleDeleteAccount}
        />
        <DrawerItem
          label="Logout"
          labelStyle={styles.drawerItemLabel}
          onPress={async () => {
            await AsyncStorage.removeItem('access_token');
            await AsyncStorage.removeItem('refresh_token');
            props.navigation.navigate('Auth', { screen: 'Login' });
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#D7D0BC',
  },
  container: {
    flex: 1,
  },
  drawerItemLabel: {
    color: 'black',
  },
  deleteItemLabel: {
    color: 'red'
  }
});

export default CustomDrawerContent;
