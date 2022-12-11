import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { auth } from "../utils/firebase.js";

export default function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    if (password === passwordAgain) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Passwords did not match, try again");
      setPassword("");
      setPasswordAgain("");
    }
  };

  const onSignInPressed = () => {
    navigation.replace("LoginScreen");
  };

  return (
    <SafeAreaView style={globalStyles.loginContainer}>
      <ScrollView>
        <View style={globalStyles.loginContainer}>
          <Text style={globalStyles.title}>Create an account</Text>

          <CustomInput
            placeholder="First Name"
            value={username}
            setValue={setUsername}
          />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <CustomInput
            placeholder="Repeat Password"
            value={passwordAgain}
            setValue={setPasswordAgain}
            secureTextEntry={true}
          />
          <CustomButton text="Create Account" onPress={onSignUpPressed} />
          <CustomButton
            text="Already have an account? Sign in"
            type="TERTIARY"
            onPress={onSignInPressed}
          />
        </View>
        <StatusBar style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}
