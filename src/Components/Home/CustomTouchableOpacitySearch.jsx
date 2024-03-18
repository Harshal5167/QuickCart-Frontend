import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../../Constants/Colors";
import { Icon } from "react-native-paper";

export default function CustomTouchableOpacitySearch(props) {
  const { text, onClick } = props;

  return (
    <View style={{ position: "relative", width: "100%" }}>
      <TouchableOpacity style={style.Button} onPress={onClick}>
        <Text style={style.text}>{text}</Text>
        <View style={{ ...style.IconDiv}}>
          <Icon
            source={require('../../../assets/Custom-Assets/search.png')}
            size={25}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  Button: {
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 5,
    paddingBottom: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.TEXT_BOX_BORDER_COLOR,
  },
  text: {
    fontSize: 14,
    color: Colors.BLACK,
  },
  IconDiv: {
    backgroundColor: Colors.PRIMARY,
    padding: 5,
    height: 38, 
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});
