import React from "react";
import { TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
import Colors from "../../../Constants/Colors";

const BackButton = ({ onPress }) => (
  <TouchableOpacity
    style={{
      height: 30,
      width: 30,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <Svg
      width="20"
      height="20"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.00098 19.0003H33.9998"
        stroke="#002233"
        strokeWidth="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.7546 34L4 19.0013L19.7546 4"
        stroke="#002233"
        strokeWidth="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  </TouchableOpacity>
);

export default BackButton;
