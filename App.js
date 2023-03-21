import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InformationView from './components/InformationView';
import { ProfileScreen } from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Registration" component={RegistrationScreen}/>
        <Stack.Screen name="InformationView" component={InformationView}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Favorites" component={FavoritesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
