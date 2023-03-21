import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Camera, CameraType } from "expo-camera";
import Button from "../components/Button";
import Icon from "@expo/vector-icons/Ionicons";

const { height } = Dimensions.get("window");

const Capture = ({ navigation, route }) => {
  const [image, setImage] = useState();
  const cameraRef = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch {
        (error) => {
          console.log(error);
        };
      }
    }
  };

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}></View>
      <View style={styles.container}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          ratio="4:3"
          type={CameraType.front}
        />
        <View
          style={{
            width: "40%",
            height: height / 4,
            flexDirection: "row",

            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button title="back" onPress={() => navigation.goBack()} />
          <Button
            title={<Icon name="camera" size={30} />}
            style={{ borderRadius: 60, padding: 20 }}
            onPress={takePicture}
          />
          <Button
            title="Next"
            onPress={() => {
              if (image) {
                navigation.navigate("Preview", {
                  image,
                  person: route.params.person,
                });
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#bdbdbd",
    zIndex: 100,
  },

  camera: {
    width: 250,
    height: 250,
  },
});

export default Capture;
