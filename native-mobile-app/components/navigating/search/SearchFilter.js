import React, { useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

const SearchFilter = ({ data, input, setInput }) => {
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const handleSearchFilter = (item) => {
    if (input === null) {
      return (
        <View>
          <Text style={styles.textSearchFilter1}>{item.title}</Text>
          <Text style={styles.textSearchFilter2} />
        </View>
      );
    }

    if (item.toLowerCase().includes(input.toLowerCase())) {
      return (
        <View>
          <Text style={styles.textSearchFilter1}>{item.title}</Text>
          <Text style={styles.textSearchFilter2} />
        </View>
      );
    }
  };

  return (
    <View style={styles.viewFlatList}>
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={handleSearchFilter}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  textSearchFilter1: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textSearchFilter2: {
    borderColor: "grey",
    borderWidth: 1,
    height: 1,
    marginTop: 5,
  },
  viewFlatList: {
    marginTop: 10,
  },
});
