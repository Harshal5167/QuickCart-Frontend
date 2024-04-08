import { View, Text, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useMutation } from "react-query";
import * as SecureStore from "expo-secure-store";

import CustomTextInput from "../../../Components/Auth/CustomTextInput";
import CustomTouchableOpacity from "../../../Components/Auth/CustomTouchableOpacity";
import { styles } from "./LoginScreen.style";
import Login from "../../../Services/Auth/Login";

export default function LoginScreenComponent({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const loginMutation = useMutation(Login);

  const onButtonClick = async () => {
    const usernameTrimmed = username.trim();
    const passwordTrimmed = password.trim();

    try {
      if (!usernameTrimmed || !passwordTrimmed) {
        setError(true);
      } else {
        const loginData = {
          username: usernameTrimmed,
          password: passwordTrimmed,
        };
        await loginMutation.mutateAsync(loginData);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (loginMutation.isSuccess) {
      (async () => {
        const response = loginMutation.data;
        await SecureStore.setItemAsync("token", response.data.token);
        await SecureStore.setItemAsync(
          "username",
          response.data.customer.username
        );
        await 
        navigation.replace("AppHome");
      })();
    }
    if (loginMutation.isError) {
      const error = JSON.parse(loginMutation.error.message);
      Alert.alert(error.status, error.msg, [
        {
          text: "OK",
          onPress: () => {
            if (error.renderTo) {
              navigation.replace(error.renderTo);
            }
          },
        },
      ]);
    }
  }, [loginMutation.isSuccess, loginMutation.isError]);

  // useEffect(() => {
  //   (async () => {
  //     const token = SecureStore.getItemAsync("token");
  //     if (token) navigation.navigate("AppHome");
  //   })();
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
      >
        <View style={{ ...styles.mainContainer }}>
          <View style={{ ...styles.logo }}>
            <Image source={require("../../../../assets/icon.png")} />
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
          {loginMutation.isLoading ? (
            <CustomTouchableOpacity isLoading={true} />
          ) : (
            <CustomTouchableOpacity
              isLoading={false}
              text={"Sign In"}
              onClick={onButtonClick}
            />
          )}
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
