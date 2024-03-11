import {
  View, StyleSheet, Text, TouchableOpacity
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import Colors from "../../Constants/Colors";

export default function CustomTouchableOpacity(props) {
  const { text,
    onClick
   } = props;

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
    height: hp(7.2),
    marginTop: hp(1),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
  },
  text: {
    fontSize: hp(2),
    color: Colors.WHITE,
  },
});
