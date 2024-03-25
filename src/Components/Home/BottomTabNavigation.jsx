import * as React from "react";
import { View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Colors from "../../Constants/Colors";

import HomeScreenComponent from "../../Screens/AppHome/AppHomeScreens/HomeScreen/HomeScreen";
import ProductsListedScreenComponent from "../../Screens/AppHome/AppHomeScreens/ProductsListedScreen/ProductsListedScreen";
import ExploreScreenComponent from "../../Screens/AppHome/AppHomeScreens/ExploreScreen/ExploreScreen";
import OrdersScreenComponent from "../../Screens/AppHome/AppHomeScreens/OrdersScreen/OrdersScreen";

const BottomTabNavigation = ({ navigation }) => {
  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
    {
      key: "Home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "Explore", title: "Explore", focusedIcon: "magnify" },
    {
      key: "Products",
      title: "Products",
      focusedIcon: "shopping",
      unfocusedIcon: "shopping-outline",
    },
    {
      key: "Orders",
      title: "Orders",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: () => <HomeScreenComponent navigation={navigation} setIndex={setIndex}/>,
    Explore: () => <ExploreScreenComponent navigation={navigation} setIndex={setIndex}/>,
    Orders: () => <OrdersScreenComponent navigation={navigation} setIndex={setIndex}/>,
    Products: () => <ProductsListedScreenComponent navigation={navigation} setIndex={setIndex}/>,
  });

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        theme={{
          colors: {
            secondaryContainer: Colors.BACKGROUND_WHITE,
          },
        }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="#40BFFF"
        inactiveColor="#002233"
        barStyle={{
          backgroundColor: Colors.BACKGROUND_WHITE,
          borderTopColor: Colors.TEXT_BOX_BORDER_COLOR,
          borderTopWidth: 1,
        }}
      />
    </View>
  );
};

export default BottomTabNavigation;
