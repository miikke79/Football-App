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
  .catch(error => {         Alert.alert('Error', error);   });
  }, [])

  return (
    <View style={globalStyles.listContainer}>
                  <Text style={globalStyles.tableText}>Premier League Top Scorers</Text>
            <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          color: "gold",
        }}
      />
      <FlatList
        data= {stats}
        renderItem={({item}) =>
        <View style={{margin: 10}}>
        <Text               onPress={() => {
                console.log(`selected player id ${item.player.player_id}`)
              }} style={{fontSize: 18, fontWeight: 'bold', color: 'gold'}}>{item.pos}. {item.player.player_name}   {item.goals.overall} Goals</Text>
        </View>
      }
 /> 
      <StatusBar style="light" />
    </View>
  );
}