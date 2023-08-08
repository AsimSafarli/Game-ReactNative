import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../Styles/PrimaryStyle";
import { Pressable } from "react-native";

function PrimaryButton({ children }) {
  function handleClick(){
    console.log('Clicked');
  }
  return (
    <Pressable onPress={handleClick} style={({pressed})=>pressed ?  [styles.button , styles.hover] : styles.button}>
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
