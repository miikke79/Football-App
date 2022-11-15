import React from 'react';
import {useNavigation} from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text } from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton"
import { auth } from '../utils/firebase';

export default function TopScorers() {

    const navigation = useNavigation()

  return (

     <View style={globalStyles.homeContainer}>
      <View>
      <Text style={globalStyles.title}>Top Scorers</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}