import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";

import Colors from "../../../../Constants/Colors";

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: "3%",
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor:Colors.BACKGROUND_WHITE,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "auto",
    marginBottom: 5,
  },
  headerIcons: {
    height: 45,
    width: 45,
    resizeMode: "contain",
  },
  welcomeTextContainer: {
    marginTop:10,
    marginVertical: 5,
  },
  helloText: {
    fontSize: 24,
    fontWeight: "600",
  },
  welcomeText: {
    fontSize: 16,
  },
  categoryText: {
    fontWeight: "500",
    fontSize: 16,
  },
  categoryDiv: {
    marginTop: 15,
    paddingLeft: 5,
    marginBottom:15,
  },
  scrollCategory: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  categoryAndTextComp: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  CategoryComp: {
    height: 65,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    borderWidth: 1,
    backgroundColor:Colors.WHITE,
    borderColor: Colors.TEXT_BOX_BORDER_COLOR,
    marginBottom: 5,
  },
  categoriesText:{
    fontSize:14,
  },
  footerContainer:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
  }
});
