import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";

import Colors from "../../Constants/Colors";

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: '3%',
    flex: 1,
    paddingHorizontal: 15,
    // backgroundColor:Colors.WHITE,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "auto",
    marginBottom:5,
  },
  headerIcons: {
    height: 45,
    width: 45,
    resizeMode: "contain",
  },
  welcomeTextContainer:{
    marginVertical:5,
  },
  helloText:{
    fontSize:24,
    fontWeight:'600',
  },
  welcomeText:{
    fontSize:16,
  }
});
