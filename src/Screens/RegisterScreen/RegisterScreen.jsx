import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import { View, Text, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CustomTextInput from "../../Components/Auth/CustomTextInput";
import CustomTouchableOpacity from "../../Components/Auth/CustomTouchableOpacity";
import { styles } from "./RegisterScreen.style";

export default function RegisterScreenComponent({ navigation }) {
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [PhoneNo, setPhoneNo] = React.useState("");
  const [error, setError] = React.useState(false);

  const onButtonClick = () => {
    const usernameTrimmed = Username.trim();
    const passwordTrimmed = Password.trim();
    const EmailTrimmed = Email.trim();
    const PhoneNoTrimmed = PhoneNo.trim();

    if(!usernameTrimmed || !passwordTrimmed || !PhoneNoTrimmed || !EmailTrimmed){
      setError(true)
    }else{
      navigation.navigate("CompleteYourProfileScreen")
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
            <Text style={{ ...styles.SignUpMsg }}>Create a new account</Text>
            <CustomTextInput
              label="Username"
              value={Username}
              onChangeText={(text) => setUsername(text)}
              error={error}
            />
            <CustomTextInput
              label="Email"
              value={Email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              error={error}
            />
            <CustomTextInput
              label="Phone No."
              value={PhoneNo}
              onChangeText={(text) => setPhoneNo(text)}
              keyboardType="phone-pad"
              error={error}
            />
            <CustomTextInput
              label="Password"
              value={Password}
              onChangeText={(text) => setPassword(text)}
              secureTextInput={true}
              error={error}
            />
            <CustomTouchableOpacity text={"Sign Up"} onClick={onButtonClick}/>
            <View style={{ marginTop: 15 }}>
              <Text style={{ ...styles.alreadyHaveAccount }}>
                already have an account?{" "}
                <Text
                  style={{ ...styles.signIn }}
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  Sign In
                </Text>
              </Text>
            </View>
          </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
