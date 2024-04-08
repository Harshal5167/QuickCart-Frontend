import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";

import Colors from "../../../Constants/Colors";

export const styles = StyleSheet.create({
  ProfileCompletionMsg: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    marginBottom:20,
  },
  uploadProfileText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "500",
  },
  personalInfoText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  line: {
    marginTop: 10,
    borderBottomColor: Colors.LIGHT_GREY,
    borderBottomWidth: 0.4,
    marginBottom:10
  },
  locationText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  mainContainer: {
    flex: 1,
    paddingTop: '5%',
    paddingHorizontal: 15,
    paddingBottom:'10%'
  },
  houseSectorNoDiv: {
    flexDirection: "row",
    width: "auto",
    justifyContent:'space-between',
  },
  profileIconBox: {
    width:100,
    height:100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderRadius:100,
  },
  profileIcon: {
    width:100,
    height:100,
    resizeMode:'cover',
    flex:1,
    borderRadius:100,
  },
  selectListBoxStyle: {
    marginTop: 3,
    marginBottom:3,
    backgroundColor: "white",
    height: 55,
    alignItems: "center",
    borderRadius: 4,
  }
});
