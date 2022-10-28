import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import HomeScreen from'./src/screens/HomeScreen';
import LoginScreen from'./src/screens/LoginScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
          tabBarOptions={{
       activeTintColor: '#0C2340',
       inactiveTintColor: 'gold',
       activeBackgroundColor: 'gold',
       inactiveBackgroundColor: '#0C2340',
  
    }}

    screenOptions={({route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;            
        if (route.name === 'Home') 
        {              
          iconName = 'md-home';            
        } 
        else if (route.name === 'Stats') {
          iconName = 'md-settings'; 
        }  
          return <Ionicons name={iconName} size={size}color={color} />;
    },
            })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Stats" component={LoginScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

container: {
  color: '#0C2340',

},

})