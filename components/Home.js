import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Card from "./CarCard";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home() {
  return (
    <View>
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 40, marginBottom: 50 }}
      >
        <BrandName />
        <BodyStyleAndButton />
        <MostViewed />
      </ScrollView>
    </View>
  );
}

export const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: "#FD6B5B",
          fontWeight: "900",
          fontSize: 25,
        }}
      >
        Wcargen
      </Text>

      <View style={InputStyle.container}>
        <TextInput width={135} height={35} />

        <TouchableOpacity>
          <Image
            style={{
              width: 15,
              height: 15,
              tintColor: "#076473",
              marginLeft: 10,
            }}
            source={require("../assets/search.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const BrandName = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "900",
          marginHorizontal: 20,
        }}
      >
        Brands
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Toyota.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Honda.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Hyundia.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Kia.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Mazda.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/MG.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Peugeot.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Ford.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/BMW.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Lexus.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Mercedez.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/brands/Volkswagen.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const BodyStyleAndButton = (props) => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "900",
          marginLeft: 20,
        }}
      >
        Body Styles
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        persistentScrollbar={true}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/bodyStyle/Sedan.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/bodyStyle/SUV.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/bodyStyle/Pickup.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/bodyStyle/Crossover.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/bodyStyle/Hatchback.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/bodyStyle/Sport.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={ImageStyle.container}
              source={require("../assets/bodyStyle/Convertible.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity>
        <Text
          style={{
            backgroundColor: "#076473",
            alignSelf: "center",
            paddingHorizontal: 120,
            paddingVertical: 10,
            marginVertical: 20,
            borderRadius: 10,
            color: "#fff",
            fontWeight: "900",
            fontSize: 15,
          }}
        >
          COMPARE CAR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const MostViewed = () => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text
        style={{
          fontWeight: "900",
          fontSize: 20,
        }}
      >
        Most Viewed
      </Text>

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
    </View>
  );
};

const ImageStyle = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },
});

const InputStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#E2F0F2",
    alignItems: "center",
    width: 180,
    paddingLeft: 10,
    borderRadius: 10,
  },
});
