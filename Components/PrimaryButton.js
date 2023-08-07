import React from "react";
import { Text, View, TextInput } from "react-native";

function PrimaryButton({children}) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;