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
import { useNavigation } from "@react-navigation/core";

export default function Internationals() {
  const [stats, setStats] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(
      "https://app.sportdataapi.com/api/v1/soccer/players?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb&country_id=106"
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
        Players Eligible To Represent Scotland
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
                  params: { player: item.player_id, screen: "Int" },
                });
              }}
              style={globalStyles.listText}
            >
              {item.firstname} {item.lastname}
            </Text>
            <Text style={globalStyles.listText}>{item.age}</Text>
          </View>
        )}
      />
      <StatusBar style="light" />
    </View>
  );
}
