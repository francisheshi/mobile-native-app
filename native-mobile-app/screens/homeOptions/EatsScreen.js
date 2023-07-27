import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import Eats from "../../components/navComp/Eats";
import HomeScreen from "./HomeScreen";
import { StyleSheet } from "react-native";

const EatsScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <Text style={tw`text-center py-3 pt-12 text-xl`}>Eats Screen</Text>
      <View style={tw`pl-1 pt-12`}>
        <Eats />
      </View>
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="HomeScreen"
          options={{ title: "App Home" }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({});
