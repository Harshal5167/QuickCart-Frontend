import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
import Colors from "../../../Constants/Colors";

const HamburgerIcon = () => (
  <TouchableOpacity
    style={{
      backgroundColor: Colors.TEXT_BOX_BORDER_COLOR,
      height: 48,
      width: 48,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    }}
  >
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="27"
      height="27"
    >
      <Path d="M 6 9 A 2.0002 2.0002 0 1 0 6 13 L 42 13 A 2.0002 2.0002 0 1 0 42 9 L 6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26 L 42 26 A 2.0002 2.0002 0 1 0 42 22 L 6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39 L 42 39 A 2.0002 2.0002 0 1 0 42 35 L 6 35 z" />
    </Svg>
  </TouchableOpacity>
);

export default HamburgerIcon;
