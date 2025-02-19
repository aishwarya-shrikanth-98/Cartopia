import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import ProductDetailsScreen from './src/screens/ProductDetails';
import EditProfileScreen from './src/screens/EditProfile';
import AboutUsScreen from './src/screens/AboutUs';
import TermsAndConditionsScreen from './src/screens/TermsAndConditions';
import CustomDrawerContent from './src/components/CustomDrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: () => <View /> }} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}

function EditProfileStack() {
  return (
    <Stack.Navigator initialRouteName="EditProfile">
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerLeft: () => <View /> }} />
    </Stack.Navigator>
  );
}

function AboutUsStack() {
  return (
    <Stack.Navigator initialRouteName="AboutUs">
      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>Back</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function TermsAndConditionsStack() {
  return (
    <Stack.Navigator initialRouteName="TermsAndConditions">
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditionsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>Back</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerLeft: () => <View /> }} />
    </Stack.Navigator>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Auth');
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        if (token) {
          const profileResponse = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserProfile(profileResponse.data);
          setInitialRoute('Home');
        }
      } catch (e) {
        console.error('Failed to load token.', e);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={initialRoute} drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Drawer.Screen name="Edit Profile" component={EditProfileStack} options={{ headerShown: false }} />
        <Drawer.Screen name="About Us" component={AboutUsStack} options={{ headerShown: false }} />
        <Drawer.Screen name="Terms & Conditions" component={TermsAndConditionsStack} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
