import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CustomTextInput from "../../Components/Auth/CustomTextInput";
import CustomTouchableOpacity from "../../Components/Auth/CustomTouchableOpacity";
import { styles } from "./LoginScreen.style";
import Login from "../../Services/Auth/Login";

export default function LoginScreenComponent({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const onButtonClick = () => {
    const usernameTrimmed = username.trim();
    const passwordTrimmed = password.trim();

    if (!usernameTrimmed || !passwordTrimmed) {
      setError(true);
    } else {
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
      >
        <View style={{ ...styles.mainContainer }}>
          <View style={{ ...styles.logo }}>
            <Image source={require("../../../assets/icon.png")} />
          </View>
          <Text style={{ ...styles.WelcomeMsg }}>Welcome to QuickCart</Text>
          <Text style={{ ...styles.SignInMsg }}>Sign in to continue</Text>
          <CustomTextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            error={error}
          />
          <CustomTextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextInput={true}
            error={error}
          />
          <CustomTouchableOpacity text={"Sign In"} onClick={onButtonClick} />
          <View style={{ marginTop: 15 }}>
            <Text style={{ ...styles.dontHaveAccount }}>
              Don't have a account?{" "}
              <Text
                style={{ ...styles.Register }}
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                Register
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
