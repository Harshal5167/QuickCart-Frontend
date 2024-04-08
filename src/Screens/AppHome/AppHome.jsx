import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreenComponent from "./AppHomeScreens/HomeScreen/HomeScreen";
import ProductsListedScreenComponent from "./AppHomeScreens/ProductsListedScreen/ProductsListedScreen";
import OrdersScreenComponent from "./AppHomeScreens/OrdersScreen/OrdersScreen";
import ExploreScreenComponent from "./AppHomeScreens/ExploreScreen/ExploreScreen";

import Colors from "../../Constants/Colors";

const Tab = createBottomTabNavigator();

export default function AppHome() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 15,
          paddingTop: 10,
          borderColor: Colors.TEXT_BOX_BORDER_COLOR,
          backgroundColor: Colors.BACKGROUND_WHITE,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Products") {
            iconName = focused ? "bag-handle" : "bag-handle-outline";
          } else if (route.name === "Orders") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.LIGHT_GREY,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreenComponent} />
      <Tab.Screen name="Explore" component={ExploreScreenComponent} />
      <Tab.Screen name="Products" component={ProductsListedScreenComponent} />
      <Tab.Screen name="Orders" component={OrdersScreenComponent} />
    </Tab.Navigator>
  );
}
