import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Alert, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/core";

export default function TopScorers() {
  const [stats, setStats] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(
      "https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&season_id=1975"
    )
      .then((response) => response.json())
      .then((data) => setStats(data.data))
      .catch((error) => {
        Alert.alert("Error", error);
      });
  }, []);

  return (
    <View style={globalStyles.listContainer}>
      <Text style={globalStyles.tableText}>
        Scottish Premiership Top Scorers
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
          <View style={globalStyles.listTextContainer}>
            <Text
              onPress={() => {
                navigation.replace("PlayerStats", {
                  params: {
                    player: item.player.player_id,
                    screen: "Top Scorers",
                  },
                });
              }}
              style={globalStyles.listTextB}
            >
              {item.pos}. {item.player.player_name}
            </Text>
            <Text style={globalStyles.listText}>{item.goals.overall}</Text>
          </View>
        )}
      />
      <StatusBar style="light" />
    </View>
  );
}
