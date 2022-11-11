import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import HomeScreen from'./src/screens/HomeScreen';
import LeagueScreen from'./src/screens/LeagueScreen';
import Stats from'./src/screens/Stats';
import LoginScreen from'./src/screens/LoginScreen';
import SignUpScreen from'./src/screens/SignUpScreen';
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
          iconName = 'trophy'; 
        }
        else if (route.name === 'League') {
          iconName = 'football'; 
        }    
          return <Ionicons name={iconName} size={size}color={color} />;
    },
            })}
      >
        <Tab.Screen name="Login" component={SignUpScreen} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="League" component={LeagueScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
    
  );
}