import React from "react";
import { Text, Pressable } from "react-native";
import { globalStyles } from "../styles/global";

export default function CustomButton({ onPress, text, type = "PRIMARY" }) {
  return (
    <Pressable onPress={onPress} style={[globalStyles[`buttonField_${type}`]]}>
      <Text style={[globalStyles[`touchableText_${type}`]]}>{text}</Text>
    </Pressable>
  );
}
