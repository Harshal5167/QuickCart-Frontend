import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import Colors from "../../Constants/Colors";

export default function CustomTextInput(props) {
  const {
    label,
    keyboardType,
    secureTextInput,
    icon,
    onChangeText,
    value 
  } = props;

  return (
    <View style={{ position: "relative", width: "100%" }}>
      <TextInput
        label={label}
        style={style.TextInput}
        mode="outlined"
        theme={{ colors: { primary: Colors.PRIMARY } }}
        keyboardType={keyboardType !== "" ? keyboardType : "default"}
        secureTextEntry={secureTextInput}
        left={<TextInput.Icon icon={icon} />}
        outlineColor="#cfcfcf"
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
}

const style = StyleSheet.create({
  TextInput: {
    marginBottom: hp(0.5),
    height: hp(7),
  },
});
