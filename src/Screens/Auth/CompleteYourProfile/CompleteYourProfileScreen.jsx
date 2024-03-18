import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import countryList from "react-select-country-list";

import { styles } from "./CompleteYourProfileScreen.style";
import CustomTextInput from "../../../Components/Auth/CustomTextInput";
import CustomTouchableOpacity from "../../../Components/Auth/CustomTouchableOpacity";
import Colors from "../../../Constants/Colors";

export default function CompleteYourProfileScreenComponent({ navigation }) {
  const [name, setName] = React.useState("");
  const [houseNo, setHouseNo] = React.useState("");
  const [PinCode, setPinCode] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [error, setError] = React.useState(false);

  const countryOptions = React.useMemo(() => countryList().getLabels(), []);

  const onContinueClick = () => {
    nameTrimmed = name.trim();
    addressTrimmed = address.trim();
    cityTrimmed = city.trim();

    if (
      !nameTrimmed ||
      !houseNo ||
      !PinCode ||
      !addressTrimmed ||
      !country ||
      !cityTrimmed
    ) {
      setError(true);
    } else {
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
      >
        <View style={{ ...styles.mainContainer }}>
          <Text style={{ ...styles.ProfileCompletionMsg }}>
            Complete Your Profile to Continue
          </Text>
          <View style={{ ...styles.profileIconBox }}>
            <Image
              style={{ ...styles.profileIcon }}
              source={require("../../../../assets/Custom-Assets/Profile.png")}
            />
          </View>
          <Text style={{ ...styles.uploadProfileText }}>
            upload profile photo
          </Text>
          <Text style={{ ...styles.personalInfoText }}>Personal Info</Text>
          <CustomTextInput
            label="Your Name"
            value={name}
            onChangeText={(text) => setName(text)}
            error={error}
          />
          <View style={{ ...styles.line }} />
          <Text style={{ ...styles.locationText }}>Your Location</Text>
          <View style={{ ...styles.houseSectorNoDiv }}>
            <CustomTextInput
              label="House No. "
              value={houseNo}
              onChangeText={(text) => setHouseNo(text)}
              keyboardType="number-pad"
              error={error}
            />
            <CustomTextInput
              label="Pin Code"
              value={PinCode}
              onChangeText={(text) => setPinCode(text)}
              keyboardType="number-pad"
              error={error}
            />
          </View>
          <CustomTextInput
            label="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
            error={error}
          />
          <CustomTextInput
            label="City"
            value={city}
            onChangeText={(text) => setCity(text)}
            error={error}
          />
          <SelectList
            boxStyles={{
              ...styles.selectListBoxStyle,
              borderColor:
                !country && error
                  ? Colors.WARNING_RED
                  : Colors.TEXT_BOX_BORDER_COLOR,
            }}
            setSelected={(text) => setCountry(text)}
            data={countryOptions}
            save={country}
            search={false}
            placeholder="Select Country"
          />
          <CustomTouchableOpacity text={"Continue"} onClick={onContinueClick} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
