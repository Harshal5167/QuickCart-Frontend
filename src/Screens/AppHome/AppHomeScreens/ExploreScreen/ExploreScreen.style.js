import { StyleSheet } from "react-native";

import Colors from "../../../../Constants/Colors";

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: "3%",
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.BACKGROUND_WHITE,
  },
  header: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    borderBottomColor: Colors.TEXT_BOX_BORDER_COLOR,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    marginBottom: 20,
    paddingBottom: 5,
  },
  allCategoryTextStyle: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom:10,
  },
  categoryDiv: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop:12,
  },
  categoryAndTextComp:{
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },
  categoriesText:{
    fontSize:14,
  },
  CategoryComp:{
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
});
