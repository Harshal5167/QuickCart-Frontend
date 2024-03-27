import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import React from "react";

export default function CustomSearchIcon() {
  return (
    <View style={{ ...style.IconDiv }}>
      <Icon
        source={require("../../../../assets/Custom-Assets/search.png")}
        size={25}
      />
    </View>
  );
}

const style = StyleSheet.create({
  IconDiv: {
    backgroundColor: Colors.PRIMARY,
    padding: 1,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
  },
});
