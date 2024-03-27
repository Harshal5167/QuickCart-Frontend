import { StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

import CustomSearchIcon from "./CustomSearchIcon";

export default function CustomTextInputSearch() {
  return (
    <TextInput
      placeholder="Search Product"
      mode="outlined"
      theme={{
        colors: {
          primary: Colors.PRIMARY,
        },
      }}
      outlineColor="#cfcfcf"
      right={<TextInput.Icon icon={() => <CustomSearchIcon />} />}
      style={style.textInputStyle}
    ></TextInput>
  );
}

const style = StyleSheet.create({
  textInputStyle: { height: 45, marginLeft: 5, flex: 1 },
});
