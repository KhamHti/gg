import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "@rneui/themed";

const Preview = ({ navigation, route }) => {
  const person = route.params.person;

  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          width: "30%",
          borderRadius: 20,
          elevation: 10,
          padding: 20,
          paddingVertical: 25,
        }}
      >
        <Card.FeaturedTitle
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 18,
              fontFamily: "black",
            }}
          >
            Personal Information
          </Text>
        </Card.FeaturedTitle>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingVertical: 5,
          }}
        >
          <Card.Image
            source={{ uri: route.params.image }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 20,
            }}
          />
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Name: </Text>
          <Text style={styles.cardText2}>{person.name}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Phone: </Text>
          <Text style={styles.cardText2}>{person.phone}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Orgnization: </Text>
          <Text style={styles.cardText2}>{person.orgnization}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>NRC: </Text>
          <Text style={styles.cardText2}>{person.nrc}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Address: </Text>
          <Text style={styles.cardText2}>{person.address}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>City: </Text>
          <Text style={styles.cardText2}>{person.city}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Country: </Text>
          <Text style={styles.cardText2}>{person.country}</Text>
        </View>
      </Card>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PersonInfo")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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

  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 3,
  },

  cardText: {
    width: "40%",
    fontFamily: "bold",
  },

  cardText2: {
    width: "60%",
  },

  button: {
    backgroundColor: "#444",
    borderRadius: 10,
    elevation: 10,

    padding: 15,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    letterSpacing: 3,
    textTransform: "uppercase",
  },
});

export default Preview;
