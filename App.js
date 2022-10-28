import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import HomeScreen from'./src/screens/HomeScreen'
import LoginScreen from'./src/screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
          tabBarOptions={{
       activeTintColor: '#0C2340',
       inactiveTintColor: '#0C2340',
       activeBackgroundColor: 'darkred',
       inactiveBackgroundColor: 'red',
  
    }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Stats" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

container: {
  color: '#0C2340',

},

})