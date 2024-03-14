import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import Colors from "../../Constants/Colors";

export default function CustomTouchableOpacity(props) {
  const { text, onClick } = props;

  return (
    <View style={{ position: "relative", width: "100%" }}>
      <TouchableOpacity style={style.Button} onPress={onClick}>
        <Text style={style.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  Button: {
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.TEXT_BOX_BORDER_COLOR,
  },
  text: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});
