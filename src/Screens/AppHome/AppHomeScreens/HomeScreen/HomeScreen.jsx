import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./HomeScreen.style";
import CustomTouchableOpacity from "../../../../Components/Home/CustomTouchableOpacitySearch";
import { categoryArrayDefault } from "../../../../Constants/Categories";
import Colors from "../../../../Constants/Colors";
import listedProductsArray from "../../../../Constants/ListedProducts";

import HamburgerIcon from "../../../../Components/Home/Header-Assets/Hamburger";
import NotificationIcon from "../../../../Components/Home/Header-Assets/Notification";

const name = "username";

export default function HomeScreenComponent({ navigation, setIndex }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BACKGROUND_WHITE }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicato={false}>
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
          <CustomTouchableOpacity
            onClick={() => setIndex(1)}
            text={"Search Product"}
          />
          <View style={{ ...styles.categoryDiv }}>
            <Text style={{ ...styles.categoryText }}>{"Category"}</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ ...styles.scrollCategory }}>
                {categoryArrayDefault.map((Category) => (
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
            <View style={styles.productsArrayDiv}>
              {listedProductsArray.map((product) => (
                <TouchableOpacity key={product.id} style={styles.productDiv}>
                  <View style={styles.imageDiv}>
                    <Image
                      source={{ uri: product.imageUrl }}
                      style={styles.productImage}
                    ></Image>
                  </View>
                  <View style={styles.nameCostDiv}>
                    <Text style={styles.nameText}>{product.name}</Text>
                    <Text style={styles.ratingText}>{product.rating} / 5</Text>
                    <Text style={styles.costText}>&#x20b9; {product.cost}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
