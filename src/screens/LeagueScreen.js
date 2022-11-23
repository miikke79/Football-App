import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, View, Alert, FlatList } from 'react-native';
import { globalStyles } from "../styles/global";

export default function LeagueScreen() {

  const [stats, setStats] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [league, setLeague] = React.useState();
  const [id, setId] = React.useState('106');
  const [season, setseason] = React.useState('2022');
  const [tournament, setTournament] = React.useState('Premier League');

  const fetchStats = () => 
  {  fetch('https://app.sportdataapi.com/api/v1/soccer/standings?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&season_id='+{id})  
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
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.standings[0].team_id}</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.position}</Text>
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
    marginTop: 20,
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