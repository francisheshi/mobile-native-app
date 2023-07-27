import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import SearchFilter from "./SearchFilter";
import { data } from "../NavOptions";

const Searchbar = () => {
  const [input, setInput] = useState(data);
  console.log(input);
  return (
    <View style={styles.view}>
      <View style={styles.searchView}>
        <Feather name="search" style={styles.searchFeather} />
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Search..."
          style={styles.searchInput}
        />
      </View>
      <SearchFilter />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  view: {
    margin: 11,
    width: "100%",
  },
  searchView: {
    justifyContent: "left",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9dbda",
    color: "black",
    borderRadius: 10,
    padding: 10,
    width: "95%",
  },
  searchFeather: {
    color: "black",
    marginLeft: 1,
    marginRight: 4,
    fontSize: 20,
  },
  searchInput: {
    fontSize: 15,
  },
});
