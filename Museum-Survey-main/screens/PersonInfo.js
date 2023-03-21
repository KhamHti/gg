import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  TextInput,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import { Picker } from "@react-native-picker/picker";

const { height } = Dimensions.get("window");

const PersonInfo = ({ navigation }) => {
  const [person, setPerson] = useState();
  const [keyboard, setKeyboard] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(4);

  // NRC
  const [selectCountryNumber, setSelectCountryNumber] = useState("");
  const [selectCountryCode, setSelectCountryCode] = useState("");
  const [selectNrcNation, setSelectNrcNation] = useState("");
  const [selectNrcNumber, setSelectNrcNumber] = useState("");

  const nrcNumberLists = [
    "၁",
    "၂",
    "၃",
    "၄",
    "၅",
    "၆",
    "၇",
    "၈",
    "၉",
    "၁၀",
    "၁၁",
    "၁၂",
    "၁၃",
    "၁၄",
  ];

  // Text
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orgnization, setOrgnization] = useState("");
  const [nrc, setNrc] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // Error Message
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorOrg, setErrorOrg] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorCity, setErrorCity] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);

  useEffect(() => {
    if (person) {
      navigation.navigate("Feedback", { person });
    }

    setNrc(
      `${selectCountryNumber}/${selectCountryCode}${selectNrcNation}-${selectNrcNumber}`
    );
  }, [
    person,
    nrc,
    selectCountryNumber,
    selectCountryCode,
    selectNrcNation,
    selectNrcNumber,
  ]);

  /// plus
  const requestOptions = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Lawson Luke",
      email: "email@yahoo.com",
      password: "123",
    }),
  };

  const submitButton = async () => {
    try {
      await fetch("http://localhost:3000/personinfo", requestOptions).then(
        (response) => {
          response.json().then((data) => {
            Alert.alert("Post created at : ", data.createdAt);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = () => {
    if (name.trim().length < 3) {
      setErrorName(true);
    } else if (phone.trim().length < 11) {
      setErrorPhone(true);
    } else if (orgnization.trim().length < 3) {
      setErrorOrg(true);
    } else if (address.trim().length < 3) {
      setErrorCity(true);
    } else if (city.trim().length < 3) {
      setErrorCity(true);
    } else if (country.trim().length < 3) {
      setCountry(true);
    } else {
      setErrorName(false);
      setErrorPhone(false);
      setErrorOrg(false);
      setErrorAddress(false);
      setErrorCity(false);
      setErrorCountry(false);
      setPerson({
        name,
        phone,
        orgnization,
        nrc,
        address,
        city,
        country,
        id: Math.random().toString(),
      });
      setName("");
      setPhone("");
      setOrgnization("");
      setNrc("");
      setAddress("");
      setCity("");
      setCountry("");
      setSelectCountryCode("");
      setSelectCountryNumber("");
      setSelectNrcNation("");
      setSelectNrcNumber("");
    }
  };

  const [pickerDisable, setPickerDisable] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <StatusBar />
        <View style={styles.header}></View>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboard ? -height / keyboardHeight : -height}
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={[
                  styles.inputContainerStyle,
                  { borderBottomColor: errorName ? "red" : undefined },
                ]}
                placeholder="Enter Name"
              />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                value={phone}
                onChangeText={setPhone}
                style={[
                  styles.inputContainerStyle,
                  { borderBottomColor: errorPhone ? "red" : undefined },
                ]}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Organization / Company</Text>
              <TextInput
                value={orgnization}
                onChangeText={setOrgnization}
                style={[
                  styles.inputContainerStyle,
                  { borderBottomColor: errorOrg ? "red" : undefined },
                ]}
                placeholder="Enter Organization or Company"
                onFocus={() => {
                  setKeyboard(true);
                  setKeyboardHeight(2.3);
                }}
                onBlur={() => {
                  setKeyboard(false);
                  setKeyboardHeight(4);
                }}
              />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>NRC</Text>
              <View style={{ flexDirection: "row" }}>
                <Picker
                  mode="dropdown"
                  selectedValue={selectCountryNumber}
                  onValueChange={(item) => setSelectCountryNumber(item)}
                  style={{
                    width: "28%",
                    backgroundColor: "#e9e9e9",
                  }}
                  onFocus={() => setPickerDisable(false)}
                  onBlur={() => setPickerDisable(true)}
                >
                  <Picker.Item
                    label="ရွေးပါ"
                    value={false}
                    enabled={pickerDisable}
                  />
                  {nrcNumberLists.map((item, index) => {
                    return (
                      <Picker.Item key={index} label={item} value={item} />
                    );
                  })}
                </Picker>
                <TextInput
                  value={selectCountryCode}
                  onChangeText={setSelectCountryCode}
                  style={[
                    styles.inputContainerStyle,
                    { marginStart: 5, width: "20%" },
                  ]}
                  placeholder="ပခန"
                  onFocus={() => {
                    setKeyboard(true);
                    setKeyboardHeight(2.3);
                  }}
                  onBlur={() => {
                    setKeyboard(false);
                    setKeyboardHeight(4);
                  }}
                />

                <Picker
                  mode="dropdwon"
                  selectedValue={selectNrcNation}
                  onValueChange={(item) => setSelectNrcNation(item)}
                  style={{
                    width: "28%",
                    backgroundColor: "#e9e9e9",
                    marginStart: 5,
                  }}
                  onFocus={() => setPickerDisable(false)}
                  onBlur={() => setPickerDisable(true)}
                >
                  <Picker.Item
                    label="ရွေးပါ"
                    value={false}
                    enabled={pickerDisable}
                  />
                  <Picker.Item label="(နိုင်)" value="(နိုင်)" />
                  <Picker.Item label="(ဧည့်)" value="(ဧည့်)" />
                </Picker>
                <TextInput
                  value={selectNrcNumber}
                  onChangeText={setSelectNrcNumber}
                  style={[
                    styles.inputContainerStyle,
                    { marginStart: 5, width: "20%" },
                  ]}
                  placeholder="၁၂၃၄၅၆"
                  onFocus={() => {
                    setKeyboard(true);
                    setKeyboardHeight(2.15);
                  }}
                  onBlur={() => {
                    setKeyboard(false);
                    setKeyboardHeight(4);
                  }}
                />
              </View>
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                value={address}
                onChangeText={setAddress}
                style={[
                  styles.inputContainerStyle,
                  { borderBottomColor: errorAddress ? "red" : undefined },
                ]}
                placeholder="Enter Address"
                onFocus={() => {
                  setKeyboard(true);
                  setKeyboardHeight(3.5);
                }}
                onBlur={() => {
                  setKeyboard(false);
                  setKeyboardHeight(4);
                }}
              />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>City</Text>
              <TextInput
                value={city}
                onChangeText={setCity}
                style={[
                  styles.inputContainerStyle,
                  { borderBottomColor: errorCity ? "red" : undefined },
                ]}
                placeholder="Enter City"
                onFocus={() => {
                  setKeyboard(true);
                  setKeyboardHeight(3.5);
                }}
                onBlur={() => {
                  setKeyboard(false);
                  setKeyboardHeight(4);
                }}
              />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Country</Text>
              <TextInput
                value={country}
                onChangeText={setCountry}
                style={[
                  styles.inputContainerStyle,
                  { borderBottomColor: errorCountry ? "red" : undefined },
                ]}
                placeholder="Enter Country"
                onFocus={() => {
                  setKeyboard(true);
                  setKeyboardHeight(7);
                }}
                onBlur={() => {
                  setKeyboard(false);
                  setKeyboardHeight(4);
                }}
              />
            </View>
          </View>
          <View
            style={{
              height: height / 4,
              flexDirection: "row",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              title="Next"
              style={{ marginHorizontal: 40 }}
              // onPress={submitHandler}
              onPress={submitButton}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },

  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#bdbdbd",
    zIndex: 100,

    marginBottom: 20,
  },

  inputBox: {
    width: "45%",
    height: 70,
    justifyContent: "space-between",
    margin: 5,
  },

  inputContainerStyle: {
    backgroundColor: "#e3e3e3",
    borderBottomWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    padding: 5,
    paddingHorizontal: 10,
  },
});

export default PersonInfo;
