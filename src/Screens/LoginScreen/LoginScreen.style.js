import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";

import Colors from "../../Constants/Colors";

export const styles = StyleSheet.create({
  WelcomeMsg: {
    fontSize: hp(3),
    textAlign: "center",
    marginBottom: hp(1),
    fontWeight: "600",
  },
  SignInMsg: {
    fontSize: hp(2),
    textAlign: "center",
    marginBottom: hp(3),
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
  },
  dontHaveAccount: {
    textAlign: "center",
    fontSize: hp(2),
  },
  Register: {
    fontWeight: "600",
    color: Colors.PRIMARY,
  },
  mainContainer: {
    flex: 5,
    padding:hp(8),
    justifyContent: "center",
    paddingHorizontal: wd(4),
  },
});
