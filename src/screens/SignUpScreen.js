import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { globalStyles } from "../styles/global";
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { auth } from "../utils/firebase.js"

export default function SignUpScreen() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [email, setEmail] = useState("");


  const onSignUpPressed = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }

  return ( 
    <SafeAreaView style={globalStyles.loginContainer}>
    <ScrollView>
        <Text style={globalStyles.title}>Create an account</Text>
        <View style={globalStyles.loginContainer}>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomInput placeholder="Repeat Password" value={passwordAgain} setValue={setPasswordAgain} secureTextEntry={true} />
            <CustomButton text="Create Account" onPress={onSignUpPressed} />
        </View>
        <StatusBar style="light" />
    </ScrollView> 
    </SafeAreaView>
 );
}
