import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import ITServ from "../../components/navComp/ITServ";
import MobilePhones from "./../itOptions/MobilePhones";
import Camera from "./../itOptions/Camera";
import { SafeAreaView } from "react-native";

const ITScreen = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={tw`text-center py-4 pt-14 text-xl`}>
      <View style={styles.itViewStyleContainer}>
        <ITServ />
      </View>

      <View style={tw`text-center h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen component={MobilePhones} name="MobilePhones" />
          <Stack.Screen component={Camera} name="Camera" />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itViewStyleContainer: {
    textAlign: "center",
    paddingBottom: 30,
    paddingTop: 10,
    margin: 26,
  },
});

export default ITScreen;
