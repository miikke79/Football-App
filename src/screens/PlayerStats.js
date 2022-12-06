import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Image, View, Alert } from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import {useNavigation} from '@react-navigation/core';

export default function PlayerStats(player) {

  let player_id = player.route.params.params.player;
  const [stats, setStats] = useState([]);
  const [countryStats, setCountryStats] = useState([]);

  const navigation = useNavigation()

  useEffect(() =>
  {  fetch('https://app.sportdataapi.com/api/v1/soccer/players/'+player_id+'?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb')  
  .then(response => response.json())
  .then(data => {setStats(data.data), setCountryStats(data.data.country)})
  .catch(error => {         Alert.alert('Error', error);   });
  }, [])

  const navigateBack = () => {
     navigation.replace ('Nav', { screen: 'League', initial: false }) 
  }

  return (
    <View style={globalStyles.listContainer}>
      <Image source={{ uri: stats.img }} style={globalStyles.statsPictures}></Image>
      <Text style={globalStyles.tableText}>{stats.firstname} {stats.lastname}</Text>
      <Text style={globalStyles.mediumText}>Age - {stats.age}</Text>
      <Text style={globalStyles.smallText}>D.O.B - {stats.birthday}</Text>
      <Text style={globalStyles.smallText}>Height - {stats.height} cm</Text>
      <Text style={globalStyles.smallText}>Country - {countryStats.name}</Text>
      <Text style={globalStyles.smallText}>Continent - {countryStats.continent}</Text>
      <StatusBar style="light" />
      <View>
        <CustomButton text="Back to main" type="TERTIARY" onPress={navigateBack} />
      </View>
    </View>

  );
}