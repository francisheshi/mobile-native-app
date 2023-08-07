import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../../components/navigating/NavigateCard";
import Map from "../../components/navComp/Map";

const MapScreen = () => {
  return (
    <View style={tw`text-center py-3 pt-16 text-xl`}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <NavigateCard />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
