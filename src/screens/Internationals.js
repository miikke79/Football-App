import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { DataTable } from 'react-native-paper';
import { globalStyles } from '../styles/global';

export default function Internationals() {

  const [standings, setStandings] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [league, setLeague] = React.useState();
  const [id, setId] = React.useState('106');
  const [season, setseason] = React.useState('2022');
  const [tournament, setTournament] = React.useState('Premier League');
  const [teamId, setTeamId] = useState('');

  useEffect(() =>
  {  fetch('https://app.sportdataapi.com/api/v1/soccer/standings?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&season_id=106'/*+{id}*/)  
  .then(response => response.json())
  .then(data => setStandings(data.data.standings))
  .catch(error => {         Alert.alert('Error', error);   });
}, [])

/*useEffect(() =>
{ 
  const team = standings[0].team_id;
  console.log(team);
  setTeamId(team);
}, [])
*/

  return (
    <View style={globalStyles.tableContainer}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title> Team ID </DataTable.Title>
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
                console.log(`selected account ${standings.team_id}`)
              }}
            >
              <DataTable.Cell>
                {standing.team_id}
              </DataTable.Cell>
          <DataTable.Cell numeric>30</DataTable.Cell>
          <DataTable.Cell numeric>28</DataTable.Cell>
          <DataTable.Cell numeric>2</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
          <DataTable.Cell numeric>+99</DataTable.Cell>
          <DataTable.Cell numeric>86</DataTable.Cell>
            </DataTable.Row>
        )})}
      </DataTable>
    </View>
  );
};

  {/* 
        <DataTable.Row textStyle={{text:"red" }}>
          <DataTable.Cell>Scotland</DataTable.Cell>
          <DataTable.Cell numeric>30</DataTable.Cell>
          <DataTable.Cell numeric>28</DataTable.Cell>
          <DataTable.Cell numeric>2</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
          <DataTable.Cell numeric>+99</DataTable.Cell>
          <DataTable.Cell numeric>86</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row textStyle={{text:"red" }}>
          <DataTable.Cell>Australia</DataTable.Cell>
          <DataTable.Cell numeric>30</DataTable.Cell>
          <DataTable.Cell numeric>28</DataTable.Cell>
          <DataTable.Cell numeric>2</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
          <DataTable.Cell numeric>+99</DataTable.Cell>
          <DataTable.Cell numeric>86</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row textStyle={{text:"red" }}>
          <DataTable.Cell>Scotland</DataTable.Cell>
          <DataTable.Cell numeric>30</DataTable.Cell>
          <DataTable.Cell numeric>28</DataTable.Cell>
          <DataTable.Cell numeric>2</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
          <DataTable.Cell numeric>+99</DataTable.Cell>
          <DataTable.Cell numeric>86</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>

  );
*/}