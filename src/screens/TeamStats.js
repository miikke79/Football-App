import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, Image, View, Alert } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/core";

export default function TeamStats(params) {
  let team_id = params.route.params.params.team;
  const [stats, setStats] = useState([]);
  const [countryStats, setCountryStats] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetch(
      "https://app.sportdataapi.com/api/v1/soccer/teams/" +
        team_id +
        "?apikey=74723a20-4e0d-11ed-8c29-118268eb2cdb"
    )
      .then((response) => response.json())
      .then((data) => {
        setStats(data.data), setCountryStats(data.data.country);
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  }, []);

  const navigateBack = () => {
    navigation.replace("Nav", { screen: "League", initial: false });
  };

  return (
    <View style={globalStyles.listContainer}>
      <Image
        source={{ uri: stats.logo }}
        style={globalStyles.statsPictures}
      ></Image>
      <Text style={globalStyles.tableText}>{stats.name}</Text>
      <Text style={globalStyles.smallText}>Country - {countryStats.name}</Text>
      <Text style={globalStyles.smallText}>
        Continent - {countryStats.continent}
      </Text>
      <StatusBar style="light" />
      <View>
        <CustomButton
          text="Back to League"
          type="TERTIARY"
          onPress={navigateBack}
        />
      </View>
    </View>
  );
}
