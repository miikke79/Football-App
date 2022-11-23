import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, View, Alert, FlatList } from 'react-native';
import { globalStyles } from "../styles/global";

export default function Stats() {

  const [stats, setStats] = useState([]);
  const [keyword, setKeyword] = useState('');

  const fetchStats = () => 
  {  fetch('https://app.sportdataapi.com/api/v1/soccer/teams?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&country_id=106')  
  .then(response => response.json())
  .then(data => setStats(data.data))
  .then(console.log(stats))
  .catch(error => {         Alert.alert('Error', error);   });
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data= {stats}
        renderItem={({item}) =>
        <View style={{margin: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
        <Image source={{ uri: item.logo }} style={globalStyles.pictures}></Image>
        </View>
      }
      ItemSeparatorComponent={listSeparator} /> 
      <Button
        title='find'
        onPress={fetchStats}
        />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pictures: {
    width:50,
    height:50,
    borderWidth:2,
    borderColor:'#d35647',
    resizeMode:'contain',
  },
});