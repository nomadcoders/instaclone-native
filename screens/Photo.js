import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Photo({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ color: "white" }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
