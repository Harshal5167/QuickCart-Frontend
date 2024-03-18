import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./HomeScreen.style";
import CustomTouchableOpacity from "../../../../Components/Home/CustomTouchableOpacitySearch";
import categoryArray from "../../../../Constants/Categories";
import Colors from "../../../../Constants/Colors";

import HamburgerIcon from "../../../../Components/Home/Header-Assets/Hamburger";
import NotificationIcon from "../../../../Components/Home/Header-Assets/Notification";

const name = "username";

export default function HomeScreenComponent({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BACKGROUND_WHITE }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ ...styles.mainContainer }}>
          <View style={{ ...styles.header }}>
            <HamburgerIcon />
            <NotificationIcon
              onPress={() => {
                navigation.navigate("NotificationScreen");
              }}
            />
          </View>
          <View style={{ ...styles.welcomeTextContainer }}>
            <Text style={{ ...styles.helloText }}>{`Hello ${name}`}</Text>
            <Text style={{ ...styles.welcomeText }}>
              {"Welcome to QuickCart."}
            </Text>
          </View>
          <CustomTouchableOpacity text={"Search Product"} />
          <View style={{ ...styles.categoryDiv }}>
            <Text style={{ ...styles.categoryText }}>{"Category"}</Text>
            <ScrollView horizontal={true}>
              <View style={{ ...styles.scrollCategory }}>
                {categoryArray.map((Category) => (
                  <TouchableOpacity
                    key={Category.id}
                    style={{ ...styles.categoryAndTextComp }}
                  >
                    <View style={{ ...styles.CategoryComp }}>
                      <Category.Icon />
                    </View>
                    <Text style={{ ...styles.categoriesText }}>
                      {Category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
          <View>
            <Text style={{ ...styles.categoryText }}>{"New Arrival"}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
