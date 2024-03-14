import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";

import { styles } from "./HomeScreen.style";
import CustomTouchableOpacity from "../../Components/Home/CustomTouchableOpacity";

const name='username'

export default function HomeScreenComponent() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ ...styles.mainContainer }}>
        <View style={{ ...styles.header }}>
          <Image
            source={require("../../../assets/Custom-Assets/sideBar.png")}
            style={{...styles.headerIcons }}
          />
          <Image
            source={require("../../../assets/Custom-Assets/notification.png")}
            style={{...styles.headerIcons  }}
          />
        </View>
        <View style={{...styles.welcomeTextContainer}}>
            <Text style={{...styles.helloText}}>{`Hello ${name}`}</Text>
            <Text style={{...styles.welcomeText}}>{'Welcome to QuickCart.'}</Text>
        </View>
        <CustomTouchableOpacity Text={'search'}/>
      </View>
    </SafeAreaView>
  );
}
