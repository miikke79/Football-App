import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  TextInput,
  Button,
  View,
  Alert,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Fixtures() {
  const [stats, setStats] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch(
      "https://app.sportdataapi.com/api/v1/soccer/matches?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&season_id=3291&status_code=0&date_from=2022-12-19"
    )
      .then((response) => response.json())
      .then((data) => setStats(data.data))
      .catch((error) => {
        Alert.alert("Error", error);
      });
  }, []);

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%",
        }}
      />
    );
  };

  return (
    <View style={globalStyles.listContainer}>
      <Text style={globalStyles.tableText}>
        Upcoming Premier League Fixtures
      </Text>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          color: "gold",
        }}
      />
      <FlatList
        data={stats}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Text style={globalStyles.smallText}>{item.match_start}</Text>
            <Text
              onPress={() => {
                console.log(`home team ${item.home_team.name}`);
              }}
              style={globalStyles.tableText}
            >
              {item.home_team.name} - {item.away_team.name}
            </Text>
            <Text style={globalStyles.smallText}>
              {item.venue.name}, {item.venue.city}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={listSeparator}
      />
      <StatusBar style="light" />
    </View>
  );
}
