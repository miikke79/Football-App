import React from "react";
import { View, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) {
  return (
    <View>
      <TextInput
        style={globalStyles.inputField}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
