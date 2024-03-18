import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreenComponent from "./src/Screens/Auth/LoginScreen/LoginScreen";
import RegisterScreenComponent from "./src/Screens/Auth/RegisterScreen/RegisterScreen";
import CompleteYourProfileScreenComponent from "./src/Screens/Auth/CompleteYourProfile/CompleteYourProfileScreen";
import AppHomeComponent from "./src/Screens/AppHome/AppHome";
import HomeScreenComponent from "./src/Screens/AppHome/AppHomeScreens/HomeScreen/HomeScreen";
import NotificationScreenComponent from "./src/Screens/AppHome/NotificationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppHome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreenComponent} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreenComponent}
        />
        <Stack.Screen
          name="CompleteYourProfileScreen"
          component={CompleteYourProfileScreenComponent}
        />
        <Stack.Screen name="AppHome" component={AppHomeComponent} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreenComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
