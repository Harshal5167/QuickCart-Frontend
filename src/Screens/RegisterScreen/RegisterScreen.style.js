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
  SignUpMsg: {
    fontSize: hp(2),
    textAlign: "center",
    marginBottom: hp(3),
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
  },
  alreadyHaveAccount: {
    textAlign: "center",
    fontSize: hp(2),
  },
  signIn: {
    fontWeight: "600",
    color: Colors.PRIMARY,
  },
  mainContainer: {
    padding:hp(4),
    flex: 5,
    justifyContent: "center",
    paddingHorizontal: wd(4),
  },
});
