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
    fontWeight: "600",
  },
  SignUpMsg: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  alreadyHaveAccount: {
    textAlign: "center",
    fontSize: 16,
  },
  signIn: {
    fontWeight: "600",
    color: Colors.PRIMARY,
  },
  mainContainer: {
    paddingTop:'25%',
    flex: 1,
    paddingBottom:'15%',
    paddingHorizontal: 15,
  },
});
