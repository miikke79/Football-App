import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, View, Alert, FlatList } from 'react-native';

export default function LoginScreen() {

  const [stats, setStats] = useState([]);
  const [country, setCountry] = useState('');

  const fetchStats = () => 
  {  fetch('https://app.sportdataapi.com/api/v1/soccer/teams?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&country_id=106')  
  .then(response => response.json())
  .then(data => setStats(data.data[1]))
  .then(console.log(stats.logo))
  .catch(error => {         Alert.alert('Error', error);   });
} 

  return (
    <View style={styles.container}>
      <Text>football stats</Text>
      <Image source={{ uri: stats.logo }} style={styles.pictures}></Image>
      <Button
        title='Get Stats'
        onPress={fetchStats}
        />
      <StatusBar style="light" />
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
    width:190,
    height:190,
    borderColor:'#d35647',
    resizeMode:'contain',
  },
});