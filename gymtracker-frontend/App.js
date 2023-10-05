import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import FriendManagementScreen from './src/screens/FriendManagementScreen';
import Dashboard from './src/screens/Dashboard';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Gilroy-Light': require('./assets/Font/Gilroy-Light.otf'),
      'Gilroy-ExtraBold': require('./assets/Font/Gilroy-ExtraBold.otf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // You can return a loading screen here if you like
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Friends" component={FriendManagementScreen} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
