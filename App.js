import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import HomeScreen from'./src/screens/HomeScreen';
import LeagueScreen from'./src/screens/LeagueScreen';
import Fixtures from'./src/screens/Fixtures';
import LoginScreen from'./src/screens/LoginScreen';
import SignUpScreen from'./src/screens/SignUpScreen';
import Internationals from'./src/screens/Internationals';
import TopScorers from'./src/screens/TopScorers';
import Scores from'./src/screens/Scores';
import Ionicons from '@expo/vector-icons/Ionicons';
import TeamStats from'./src/screens/TeamStats';

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
      else if (route.name === 'Fixtures') {
        iconName = 'trophy'; 
      }
      else if (route.name === 'League') {
        iconName = 'reorder-four-outline'; 
      }    
      else if (route.name === 'Scorers') {
        iconName = 'football'; 
      }  
      else if (route.name === 'Scores') {
        iconName = 'pulse-outline'; 
      } 
      else if (route.name === 'Int') {
        iconName = 'earth-outline'; 
      }
        return <Ionicons name={iconName} size={size}color={color} />;
  },
          })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="League" component={LeagueScreen} />
        <Tab.Screen name="Scorers" component={TopScorers} />
        <Tab.Screen name="Scores" component={Scores} />
        <Tab.Screen name="Fixtures" component={Fixtures} />
        <Tab.Screen name="Int" component={Internationals} />
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
        <Stack.Screen name="TeamStats" component={TeamStats} options={{ headerShown: false }} />
        <Stack.Screen name="LeagueScreen" component={LeagueScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
    
  );
}