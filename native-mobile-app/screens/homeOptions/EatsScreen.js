import React from "react";
import { StyleSheet, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Eats from "../../components/navComp/Eats";

const EatsScreen = () => {
  return (
    <View>
      <Text style={tw`text-center py-3 pt-12 text-xl`}>Eats Screen</Text>
      <View style={tw`pl-1 pt-12`}>
        <Eats />
      </View>
    </View>
  );
};

export default EatsScreen;
