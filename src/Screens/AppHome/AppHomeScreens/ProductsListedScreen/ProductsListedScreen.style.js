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
    height: 45,
    alignItems: "center",
    borderBottomColor: Colors.TEXT_BOX_BORDER_COLOR,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    marginBottom: 20,
    paddingBottom: 5,
  },
  listedProductsText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "500",
  },
  productsDiv: {
    flexDirection: "row",
    height: 90,
    borderColor: Colors.TEXT_BOX_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  ImageDiv: {
    width: 70,
    height: 70,
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 5,
    resizeMode: "contain",
  },
  nameCostDeleteDiv: {
    flex: 1,
    marginLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameCostDiv: {
    justifyContent: "space-evenly",
    marginRight: 5,
  },
  nameTextStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  costTextStyle: {
    fontSize: 14,
    color: Colors.PRIMARY,
    fontWeight: "500",
  },
});
