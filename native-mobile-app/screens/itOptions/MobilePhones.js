import React from "react";
import { StyleSheet, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const MobilePhones = () => {
  return (
    <View>
      <Text style={tw`text-center py-3 pt-12 text-xl`}>Mobile Phones</Text>
      <View style={tw`pl-4 pt-5 h-1/2`}></View>
    </View>
  );
};

export default MobilePhones;

const styles = StyleSheet.create({});
