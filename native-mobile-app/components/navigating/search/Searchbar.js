import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import SearchFilter from "./SearchFilter";
import { data } from "../NavOptions";

// const data = [
//   {
//     id: "1A",
//     title: "Get a ride",
//     image: "https://links.papareact.com/3pn",
//     screen: "MapScreen",
//   },
//   {
//     id: "1B",
//     title: "Order food",
//     image: "https://links.papareact.com/28w",
//     screen: "EatsScreen",
//   },
//   {
//     id: "1C",
//     title: "IT accessories & tools",
//     image: "https://tinyurl.com/2435dfzt",
//     screen: "ITScreen",
//   },
// ];

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderListItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>{item.code}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Search..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
      />
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
