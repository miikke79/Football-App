import {useNavigation} from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { keyboardAvoindingView, SafeAreaView, Image, View, ScrollView } from 'react-native';
import { globalStyles } from "../styles/global";
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { auth } from '../utils/firebase';


export default function LoginScreen() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onauthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })

    return unsubscribe
  }, [])


  const onSignInPressed = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("logged in with: ", user.email);
    })
    .catch(error => alert(error.message))
  }

  return ( 
      <SafeAreaView style={globalStyles.loginContainer}>
        <ScrollView>
          <Image
            source={require("../../assets/scotland_logo.png")}
            style={globalStyles.loginIcon}
          />
          <View style={globalStyles.loginContainer}>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomButton text="Sign in" onPress={onSignInPressed} />
            <CustomButton text="Don't have an account? Create one" type="TERTIARY" onPress={onSignUpPressed} />
          </View>
          <StatusBar style="light" />
        </ScrollView> 
      </SafeAreaView>
 );
}
