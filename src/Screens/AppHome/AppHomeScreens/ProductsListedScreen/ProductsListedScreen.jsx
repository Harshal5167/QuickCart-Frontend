import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { useQuery } from "react-query";

import Colors from "../../../../Constants/Colors";
import BackButton from "../../../../Components/Home/Header-Assets/BackButton";
import { styles } from "./ProductsListedScreen.style";
import DeleteBin from "../../../../Components/Home/Products-Listed-Screen-Assets/DeleteBin";
import getProductsListed from "../../../../Services/AppHome/ProductsListedByUser";
import { ActivityIndicator } from "react-native-paper";

export default function ProductsListedScreenComponent({
  navigation,
  setIndex,
}) {
  const [token, setToken] = useState(null);
  const [userListedProducts, setuserListedProducts] = useState([]);
  const [change, setChange] = useState(true);

  const productsListedQuery = useQuery(
    "productsListedQuery",
    () => getProductsListed(token),
    {
      enabled: !!token && !!change,
    }
  );

  useEffect(() => {
    (async () => {
      const userToken = await SecureStore.getItemAsync("token");
      setToken(userToken);
    })();
  }, []);

  useEffect(() => {
    if (productsListedQuery.isSuccess) {
      (async () => {
        const response = productsListedQuery.data;
        setuserListedProducts(response.data.products);
        setChange(false);
      })();
    }
    if (productsListedQuery.isError) {
      const error = JSON.parse(productsListedQuery.error.message);
      console.log(error);
    }
  }, [productsListedQuery.isSuccess, productsListedQuery.isError]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BACKGROUND_WHITE }}>
      <View style={{ ...styles.mainContainer }}>
        <View style={{ ...styles.header }}>
          <BackButton onPress={() => setIndex(0)} />
          <Text style={{ ...styles.listedProductsText }}>
            Your Listed Products
          </Text>
        </View>
        {productsListedQuery.isLoading ? (
          <ActivityIndicator size="small" color="002233" />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            {userListedProducts.map((product) => (
              <View key={product._id} style={{ ...styles.productsDiv }}>
                <View style={{ ...styles.ImageDiv }}>
                  <Image
                    source={{ uri: product.imageURL }}
                    style={{ ...styles.imageStyle }}
                  />
                </View>
                <View style={styles.nameCostDeleteDiv}>
                  <View style={{ ...styles.nameCostDiv }}>
                    <Text style={{ ...styles.nameTextStyle }}>
                      {product.name}
                    </Text>
                    <Text style={{ ...styles.costTextStyle }}>
                      &#x20b9; {product.cost}
                    </Text>
                  </View>
                  <DeleteBin />
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
