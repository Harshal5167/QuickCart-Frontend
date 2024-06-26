import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import countryList from "react-select-country-list";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./CompleteYourProfileScreen.style";
import CustomTextInput from "../../../Components/Auth/CustomTextInput";
import CustomTouchableOpacity from "../../../Components/Auth/CustomTouchableOpacity";
import convertLocalImageUrlToBase64Url from "../../../Utilities/convertLocalImageUrlToBase64Url";
import Colors from "../../../Constants/Colors";

export default function CompleteYourProfileScreenComponent({ navigation }) {
  const [name, setName] = React.useState("");
  const [houseNo, setHouseNo] = React.useState("");
  const [PinCode, setPinCode] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [error, setError] = React.useState(false);

  const [profileImg, setProfileImg] = React.useState("");

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
      navigation.replace("AppHome");
    }
  };

  const pickImage = async () => {
    if (!profileImg.length) {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "We need Camera Roll permission to upload images",
          [{ text: "OK", style: "cancel" }],
          "Camera Roll permission is required to upload images",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Open Settings",
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]
        );
      } else {
        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.canceled) {
          setProfileImg(result.assets[0].uri);
          setError(false);
          const imgUrl = await convertLocalImageUrlToBase64Url(
            result.assets[0].uri
          );
          setProfileImg(imgUrl);
        }
      }
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        const imgUrl = await AsyncStorage.getItem("profileImgUrl");
        if (imgUrl) setProfileImg(imgUrl);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={pickImage}
            disabled={!profileImg.length ? false : true}
          >
            <View style={{ ...styles.profileIconBox }}>
              <Image
                style={{ ...styles.profileIcon }}
                source={
                  !profileImg.length
                    ? require("../../../../assets/Custom-Assets/Profile.png")
                    : { uri: profileImg }
                }
              />
            </View>
            <Text style={{ ...styles.uploadProfileText }}>
              upload profile photo
            </Text>
          </TouchableOpacity>
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
              width={"49%"}
            />
            <CustomTextInput
              label="Pin Code"
              value={PinCode}
              onChangeText={(text) => setPinCode(text)}
              keyboardType="number-pad"
              error={error}
              width={"49%"}
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
