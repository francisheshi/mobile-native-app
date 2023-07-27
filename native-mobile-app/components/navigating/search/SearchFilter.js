import React from "react";
import { StyleSheet } from "react-native";
import { Text, FlatList, View } from "react-native";

const SearchFilter = ({ data, input, setInput }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={data}
        renderItem={(item) => {
          if (input === null) {
            return (
              <View>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    borderColor: "grey",
                    borderWidth: 1,
                    height: 1,
                    marginTop: 5,
                  }}
                />
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
        }}
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
});
