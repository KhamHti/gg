import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Button from "../components/Button";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />

      <View style={styles.content}>
        <Text style={styles.title}>Museum Survey</Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("PersonInfo")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bdbdbd",
    justifyContent: "center",
  },

  content: {
    flex: 0.75,
    backgroundColor: "#f4f4f4",
    justifyContent: "space-around",
    alignItems: "center",
  },

  title: {
    fontSize: 70,
    fontWeight: "bold",
    letterSpacing: 10,
    textTransform: "uppercase",

    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
  },
});

export default GetStarted;
