import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Image, TextInput, Button, View, Alert, FlatList } from 'react-native';
import { globalStyles } from "../styles/global";

export default function TopScorers() {

  const [stats, setStats] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() =>
  {  fetch('https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&season_id=1975')  
  .then(response => response.json())
  .then(data => setStats(data.data))
  .then(console.log(stats))
  .catch(error => {         Alert.alert('Error', error);   });
  }, [])

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
    <View style={globalStyles.listContainer}>
      <FlatList
        data= {stats}
        renderItem={({item}) =>
        <View style={{margin: 10}}>
        <Text               onPress={() => {
                console.log(`selected player id ${item.player.player_id}`)
              }} style={{fontSize: 18, fontWeight: 'bold', color: 'gold'}}>{item.pos}:{item.player.player_name}      G={item.goals.overall} </Text>
        </View>
      }
      ItemSeparatorComponent={listSeparator} /> 
      <StatusBar style="light" />
    </View>
  );
}