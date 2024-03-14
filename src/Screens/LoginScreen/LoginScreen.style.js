import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";

import Colors from "../../Constants/Colors";

export const styles = StyleSheet.create({
  WelcomeMsg: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: '600',
  },
  SignInMsg: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  dontHaveAccount: {
    textAlign: "center",
    fontSize: 16,
  },
  Register: {
    fontWeight: "600",
    color: Colors.PRIMARY,
  },
  mainContainer: {
    flex: 1,
    paddingTop:'25%',
    paddingBottom:'15%',
    paddingHorizontal: 15,
  },
});
