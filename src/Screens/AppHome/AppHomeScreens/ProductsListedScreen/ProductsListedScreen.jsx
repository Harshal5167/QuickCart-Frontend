import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../../../../Constants/Colors";
import BackButton from "../../../../Components/Home/Header-Assets/BackButton";
import { styles } from "./ProductsListedScreen.style";
import DeleteBin from "../../../../Components/Home/Products-Listed-Screen-Assets/DeleteBin";
import listedProductsArray from "../../../../Constants/ListedProducts";

export default function ProductsListedScreenComponent({
  navigation,
  setIndex,
}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BACKGROUND_WHITE }}>
      <View style={{ ...styles.mainContainer }}>
        <View style={{ ...styles.header }}>
          <BackButton onPress={() => setIndex(0)} />
          <Text style={{ ...styles.listedProductsText }}>
            Your Listed Products
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          {listedProductsArray.map((product) => (
            <View key={product.id} style={{ ...styles.productsDiv }}>
              <View style={{ ...styles.ImageDiv }}>
                <Image
                  source={{ uri: product.imageUrl }}
                  style={{ ...styles.imageStyle }}
                />
              </View>
              <View style={{ ...styles.nameCostDeleteDiv }}>
                <View style={{ ...styles.nameCostDiv }}>
                  <Text style={{ ...styles.nameTextStyle }}>
                    {product.name}
                  </Text>
                  <Text style={{ ...styles.costTextStyle }}>
                    {product.cost}
                  </Text>
                </View>
                <DeleteBin />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
