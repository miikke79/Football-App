import React from 'react';
import {useNavigation} from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text } from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton"

export default function HomeScreen() {

    const navigation = useNavigation()

    const onSignOutPressed = () => {
        navigation.navigate("LoginScreen")
    }

  return (

     <View style={globalStyles.homeContainer}>
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