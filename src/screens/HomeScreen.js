import React from 'react';
import {useNavigation} from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text } from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton"
import { auth } from '../utils/firebase';

export default function HomeScreen() {

    const navigation = useNavigation()

    const onSignOutPressed = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("LoginScreen")
            })    
            .catch(error => alert(error.message))
    }

  return (

     <View style={globalStyles.homeContainer}>
        <View>
      <Text style={globalStyles.title}>WELCOME</Text>
      <Text style={globalStyles.title}>{auth.currentUser?.email.toUpperCase()}</Text>
      </View>
      <Image
        source={require("../../assets/scotland_logo.png")}
        style={globalStyles.homePictures}
      />
      <View>
      <Text style={globalStyles.title}>SCOTLAND STATS</Text>
      </View>
      <CustomButton text="Sign Out" type="TERTIARY" onPress={onSignOutPressed} />
      <StatusBar style="light" />
    </View>
  );
}