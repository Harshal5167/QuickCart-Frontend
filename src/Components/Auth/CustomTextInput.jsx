import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../../Constants/Colors";

export default function CustomTextInput(props) {
  const { label, keyboardType, secureTextInput, onChangeText, value, error, width } =
    props;

  return (
    <View style={{ position: "relative", width:width}}>
      <TextInput
        label={label}
        style={style.TextInput}
        mode="outlined"
        theme={{
          colors: {
            primary: !value && error ? Colors.WARNING_RED : Colors.PRIMARY,
          },
        }}
        keyboardType={keyboardType !== "" ? keyboardType : "default"}
        secureTextEntry={secureTextInput}
        outlineColor={
          !value && error ? Colors.WARNING_RED : Colors.TEXT_BOX_BORDER_COLOR
        }
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
}

const style = StyleSheet.create({
  TextInput: {
    marginBottom: 3,
    height: 55,
  },
});
