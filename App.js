import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Brand from "./components/Brand";
import CarCard from "./components/CarCard";
import Home from "./components/Home";

import New_Specs from "./components/New_Specs";
import Specs from "./components/New_Specs";
import Search from "./components/Search";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarCard /> */}
      {/* <New_Specs/> */}
      {/* <Home /> */}
      {/* <Search /> */}
      <Brand />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
});
