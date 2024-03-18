import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const name = "username";

export default function NotificationScreenComponent() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BACKGROUND_WHITE }}>
      <ScrollView style={{ flex: 1 }}>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}
