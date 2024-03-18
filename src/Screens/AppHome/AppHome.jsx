import { View } from "react-native";
import React from "react";

import BottomTabNavigation from "../../Components/Home/BottomTabNavigation";
export default function AppHomeComponent({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <BottomTabNavigation navigation={navigation} />
    </View>
  );
}
