import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SearchBar } from "./Home";
import { ModelFilter } from "./Search";
import Card from "./CarCard";

export default function Brand() {
  const models = ["All models", "Crossover", "MVP", "Pickup", "Sedan", "SUV"];
  const years = ["All years", "2022", "2021", "2020", "2019", "2018"];
  return (
    <View style={{ marginHorizontal: 20 }}>
      <SearchBar />
      <TouchableOpacity>
        <CompanyName />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ModelFilter MenuData={models} />
        <ModelFilter MenuData={years} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10, marginBottom: 175 }}
      >
        <TouchableOpacity>
          <Card />
        </TouchableOpacity>
        <TouchableOpacity>
          <Card />
        </TouchableOpacity>
        <TouchableOpacity>
          <Card />
        </TouchableOpacity>
        <TouchableOpacity>
          <Card />
        </TouchableOpacity>
        <TouchableOpacity>
          <Card />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const CompanyName = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}>
      <Image
        style={{
          width: 30,
          height: 30,
        }}
        source={require("../assets/angle-left.png")}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "800",
        }}
      >
        Toyota
      </Text>
    </View>
  );
};
