import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import HomeScreen from'./src/screens/HomeScreen';
import LeagueScreen from'./src/screens/LeagueScreen';
import Stats from'./src/screens/Stats';
import LoginScreen from'./src/screens/LoginScreen';
import SignUpScreen from'./src/screens/SignUpScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

  function Nav() {

    return (
        <Tab.Navigator
        tabBarOptions={{
     activeTintColor: '#0C2340',
     inactiveTintColor: 'gold',
     activeBackgroundColor: 'gold',
     inactiveBackgroundColor: '#0C2340',

  }}

  screenOptions={({route}) => ({
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="League" component={LeagueScreen} />
        <Tab.Screen name="Stats" component={Stats} />
      </Tab.Navigator>
    );
  }

  export default function App() {

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Nav" component={Nav} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
    
  );
}