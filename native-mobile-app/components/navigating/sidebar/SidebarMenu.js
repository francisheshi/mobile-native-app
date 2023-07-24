import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import EatsModalMenu from "./EatsModalMenu";

const SidebarMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <View>
      {!sidebarOpen ? (
        <Pressable
          style={[styles.btnSidebar, styles.btnOpenSidebar]}
          onPress={() => handleSidebarOpen()}
        >
          <Text style={styles.textStyle}>Open</Text>
        </Pressable>
      ) : (
        <View>
          <Pressable
            style={[styles.btnSidebar, styles.btnCloseSidebar]}
            onPress={() => handleSidebarClose()}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
          <View style={styles.sidebar_item}>
            <Text>Fast Food</Text>
          </View>
          <View style={styles.sidebar_item}>
            <Text>Pizza</Text>
          </View>
          <View style={styles.sidebar_item}>
            <Text>Salads</Text>
          </View>
          <View style={styles.sidebar_item}>
            <Text>Pasta</Text>
          </View>
          <View style={styles.sidebar_item}>
            <Text>Burgers</Text>
          </View>
        </View>
      )}
      <EatsModalMenu />
    </View>
  );
};

export default SidebarMenu;

const styles = StyleSheet.create({
  btnSidebar: {
    shadowOpacity: 0.8,
    borderRadius: 8,
    marginRight: "40%",
    marginLeft: "40%",
    padding: 8,
    marginTop: 2,
  },
  btnOpenSidebar: {
    backgroundColor: "olivedrab",
    position: "relative",
  },
  btnCloseSidebar: {
    backgroundColor: "orangered",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
