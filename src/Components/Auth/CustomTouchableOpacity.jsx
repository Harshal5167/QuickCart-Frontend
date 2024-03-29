import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import { ActivityIndicator } from "react-native-paper";

import Colors from "../../Constants/Colors";

export default function CustomTouchableOpacity(props) {
  const { text, onClick, isLoading } = props;

  return (
    <View style={{ position: "relative", width: "100%" }}>
      {isLoading ? (
        <TouchableOpacity style={style.Button}>
          <ActivityIndicator size="small" color="#002233" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={style.Button} onPress={onClick}>
          <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
      )}
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
