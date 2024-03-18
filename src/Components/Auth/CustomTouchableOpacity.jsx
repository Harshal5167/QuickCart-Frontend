import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import Colors from "../../Constants/Colors";
import { Icon } from "react-native-paper";

export default function CustomTouchableOpacity(props) {
  const { text, onClick } = props;

  return (
    <View style={{ position: "relative", width: "100%" }}>
      <Icon></Icon>
      <TouchableOpacity style={style.Button} onPress={onClick}>
        <Text style={style.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  Button: {
    height: 55,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});
