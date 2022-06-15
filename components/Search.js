import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import DropDownPicker from "react-native-dropdown-picker";

export default function Search() {
  const models = ["All models", "Crossover", "MVP", "Pickup", "Sedan", "SUV"];
  const years = ["All years", "2022", "2021", "2020", "2019", "2018"];
  const recentlySearch = [
    "nissan GTR",
    "pruis",
    "i8",
    "range rover",
    "G-class",
    "Mazda bt50",
  ];

  return (
    <View>
      <SearchBar />
      <Filters />
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <ModelFilter MenuData={models} />
        <ModelFilter MenuData={years} />
      </View>
      <RecentSearch />
      {/* Recently search items */}
      {recentlySearch.map((item, index) => {
        return <SearchedItem name={item} />;
      })}
      {/* <SearchResults searchInput="langrover" /> */}
    </View>
  );
}

const SearchBar = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/times.png")}
          />
        </TouchableOpacity>

        <View style={InputStyle.container}>
          <TextInput
            placeholder="search"
            width={285}
            height={40}
            fontSize={18}
          />

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

      {/* gray horizontal line */}
      <View
        style={{
          backgroundColor: "#eee",
          width: 500,
          height: 3,
          marginTop: 20,
        }}
      />
    </View>
  );
};

const brands = ["All brands", "Honda", "Hyundia", "Kia", "Mazda", "Toyota"];
const Filters = () => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 15,
        }}
      >
        <Text style={mainTitle.container}>Filter</Text>
        <TouchableOpacity>
          <Text style={{ color: "#CA0000" }}>clear</Text>
        </TouchableOpacity>
      </View>

      {/* Brand's drop menu */}
      <View>
        <SelectDropdown
          data={brands}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          buttonStyle={ButtonStyle.container}
          buttonTextStyle={ButtonTextStyle.container}
          defaultValueByIndex={0}
          rowStyle={RowStyle.container}
          rowTextStyle={RowTextStyle.container}
          renderDropdownIcon={() => (
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require("../assets/angle-down.png")}
            />
          )}
        />
      </View>
    </View>
  );
};

export const ModelFilter = (props) => {
  return (
    <View style={{ marginTop: 20 }}>
      <SelectDropdown
        data={props.MenuData}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        buttonStyle={MiniButtonStyle.container}
        buttonTextStyle={MiniButtonTextStyle.container}
        defaultValueByIndex={0}
        rowStyle={MiniRowStyle.container}
        rowTextStyle={MiniRowTextStyle.container}
        renderDropdownIcon={() => (
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={require("../assets/angle-down.png")}
          />
        )}
      />
    </View>
  );
};

const RecentSearch = () => {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
      <Text style={mainTitle.container}>Recent Search</Text>
    </View>
  );
};

const SearchedItem = (props) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              color: "#424242",
            }}
          >
            {props.name}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{ width: 20, height: 20, tintColor: "#B8B8B8" }}
            source={require("../assets/times.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SearchResults = (props) => {
  return (
    <View style={{ marginTop: 20, marginHorizontal: 20 }}>
      <Text style={mainTitle.container}>Search Results</Text>
      <Text style={{ fontSize: 15, marginTop: 15 }}>
        There is no car match your search `{props.searchInput}`
      </Text>
    </View>
  );
};

const InputStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#E2F0F2",
    alignItems: "center",
    width: 330,
    marginHorizontal: 15,
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 20,
  },
});

const mainTitle = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "800",
  },
});

const ButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: "#E2F0F2",
    width: 370,
    borderRadius: 10,
    height: 35,
  },
});

const ButtonTextStyle = StyleSheet.create({
  container: {
    textAlign: "left",
    backgroundColor: "#E2F0F2",
    fontSize: 15,
    color: "#B8B8B8",
  },
});

const RowStyle = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

const RowTextStyle = StyleSheet.create({
  container: {
    marginLeft: 15,
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "#fff",
    width: 330,
    fontSize: 15,
    color: "#B8B8B8",
  },
});

const MiniButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: "#E2F0F2",
    width: 180,
    borderRadius: 10,
    height: 35,
  },
});

const MiniButtonTextStyle = StyleSheet.create({
  container: {
    textAlign: "left",
    backgroundColor: "#E2F0F2",
    fontSize: 15,
    color: "#B8B8B8",
  },
});

const MiniRowStyle = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

const MiniRowTextStyle = StyleSheet.create({
  container: {
    marginLeft: 15,
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "#fff",
    width: 330,
    fontSize: 15,
    color: "#B8B8B8",
  },
});
