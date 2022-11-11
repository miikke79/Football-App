import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, View, Alert, FlatList } from 'react-native';
import { globalStyles } from "../styles/global";
export default function HomeScreen() {

  return (  
    <View style={globalStyles.homeContainer}>
      <Image
        source={require("../../assets/scotland_logo.png")}
        style={globalStyles.homePictures}
      />
      <View>
      <Text style={globalStyles.title}>SCOTLAND STATS</Text>
      </View>
      <StatusBar style="light" />
    </View>
 );
}