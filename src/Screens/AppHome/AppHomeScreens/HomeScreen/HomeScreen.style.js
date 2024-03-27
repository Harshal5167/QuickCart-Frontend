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
    backgroundColor: Colors.BACKGROUND_WHITE,
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
    marginTop: 10,
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
    marginBottom: 15,
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
    backgroundColor: Colors.WHITE,
    borderColor: Colors.TEXT_BOX_BORDER_COLOR,
    marginBottom: 5,
  },
  categoriesText: {
    fontSize: 14,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  productDiv: {
    width: wd(44),
    marginBottom: 13,
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 240,
    borderColor: Colors.TEXT_BOX_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 5,
  },
  imageDiv: {
    flex: 8,
    marginBottom: 10,
    borderRadius: 4,
  },
  productsArrayDiv: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-between",
  },
  productImage: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 5,
    resizeMode: "contain",
  },
  nameCostDiv: { flex: 4 },
  nameText: { fontSize: 15, fontWeight: "500" },
  costText: {
    fontSize: 14,
    color: Colors.PRIMARY,
    fontWeight: "500",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "500",
    color:Colors.GOLDEN_YELLOW,
  },
});
