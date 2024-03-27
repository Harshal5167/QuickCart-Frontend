import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./ExploreScreen.style";
import Colors from "../../../../Constants/Colors";
import BackButton from "../../../../Components/Home/Header-Assets/BackButton";
import CustomTextInputSearch from "../../../../Components/Home/Explore-Screen-Components/CustomTextInputSearch";
import { categoryArrayDefault } from "../../../../Constants/Categories";

export default function ExploreScreenComponent({ navigation, setIndex }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BACKGROUND_WHITE }}>
      <View style={{ ...styles.mainContainer }}>
        <View style={{ ...styles.header }}>
          <BackButton onPress={() => setIndex(0)} />
          <CustomTextInputSearch />
        </View>
        <View>
          <Text style={styles.allCategoryTextStyle}>All Categories</Text>
          <View style={styles.categoryDiv}>
            {categoryArrayDefault.map((Category) => (
              <TouchableOpacity
                key={Category.id}
                style={styles.categoryAndTextComp}
              >
                <View style={styles.CategoryComp}>
                  <Category.Icon />
                </View>
                <Text style={styles.categoriesText}>{Category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
