import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from'./src/screens/LoginScreen';
import SignUpScreen from'./src/screens/SignUpScreen';
import Ionicons from '@expo/vector-icons/Ionicons';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
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
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
    
  );
}