import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CarCard() {
  return (
    <View>
      <Card company="Toyota" model="Prius" year="2018" />
    </View>
  );
}

export const Card = (props) => {
  return (
    <View style={cardStyle.container}>
      <View style={text.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {props.company}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "300",
              color: "gray",
              marginLeft: 20,
            }}
          >
            {props.model}
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "300", color: "gray" }}>
          {props.year}
        </Text>
      </View>

      <View>
        <Image
          style={carStyle.container}
          source={require("../assets/car/toyota-prius.png")}
        />
      </View>
    </View>
  );
};

const cardStyle = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#E2F0F2",
    marginVertical: 10,
  },
});

const carStyle = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    marginHorizontal: 20,
  },
});

const text = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 15,
    justifyContent: "space-between",
  },
});
