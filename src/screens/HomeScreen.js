import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, View, Alert, FlatList } from 'react-native';

export default function HomeScreen() {

  return (  
    <View style={styles.container}>
      <Image
        source={require("../../assets/scotland_logo.png")}
        style={styles.pictures}
      />  
    </View>
 );
}

 const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0C2340',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pictures: {
    width:200,
    height:200,
    borderColor:'#d35647',
    resizeMode:'contain',
  },

 });
