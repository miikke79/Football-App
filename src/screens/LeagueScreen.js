import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DataTable } from 'react-native-paper';
import { globalStyles } from '../styles/global';

export default function LeagueScreen() {

  const [standings, setStandings] = useState([]);
  const [keyword, setKeyword] = useState('overall');
  const [league, setLeague] = React.useState();
  const [id, setId] = useState('2760');
  const [team, setTeam] = useState('');
  const [tournament, setTournament] = React.useState('Premier League');
  const [teamId, setTeamId] = useState('');

  useEffect(() =>
  {  fetch('https://app.sportdataapi.com/api/v1/soccer/standings?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&season_id=2760')  
  .then(response => response.json())
  .then(data => setStandings(data.data.standings))
  .catch(error => {         Alert.alert('Error', error);   });
  }, [])

  useEffect(() =>
  {  fetch('https://app.sportdataapi.com/api/v1/soccer/teams?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&country_id=57')  
  .then(response => response.json())
  .then(data => setTeam(data.data))
  .catch(error => {         Alert.alert('Error', error);   });
  }, [])


  const teamStats = (teamId) => 
  {  
    var teamName = "";
    for (var i = 0; i < team.length; i++) { 
      if (teamId === team[i].team_id){
        teamName = team[i].name
      }

    }
    if (teamName.length>0){
  console.log(teamName)
  return (teamName)
    }
    else {
      console.log('?')
      return ('?')
    }
  };

  return (
    <View style={globalStyles.tableContainerB}>
      <Text style={globalStyles.tableText}>SCOTTISH PREMIERSHIP STANDINGS</Text>
      <ScrollView style={globalStyles.scrollContainer}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={globalStyles.dataHeader} numeric>Team Name</DataTable.Title>
            <DataTable.Title numeric>MP</DataTable.Title>
            <DataTable.Title numeric>W</DataTable.Title>
            <DataTable.Title numeric>D</DataTable.Title>
            <DataTable.Title numeric>L</DataTable.Title>
            <DataTable.Title numeric>GD</DataTable.Title>
            <DataTable.Title numeric>Pts</DataTable.Title>
          </DataTable.Header>
            {
            standings.map(standing => {
              return (
                <DataTable.Row
                  key={standing.team_id}
                  onPress={() => {
                    /*console.log(teamStats(`${standing.team_id}`))*/
                  }}
                >
            <DataTable.Cell style={globalStyles.dataTable}>{teamStats(standing.team_id)}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.overall.games_played}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.overall.won}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.overall.draw}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.overall.lost}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.overall.goals_diff}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.points}</DataTable.Cell>
        </DataTable.Row>
        )})}
      </DataTable>     
      <StatusBar style="light" />
      </ScrollView>
      </View>
  );
};