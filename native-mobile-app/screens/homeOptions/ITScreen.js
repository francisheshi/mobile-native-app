import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import ITServ from "../../components/navComp/ITServ";
import MobilePhones from "./../itOptions/MobilePhones";
import Camera from "./../itOptions/Camera";

const ITScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <Text style={tw`text-center py-4 pt-14 text-xl`}>
        IT - Service/Accessories
      </Text>

      <View style={styles.itViewStyleContainer}>
        <ITServ />
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="MobilePhones"
          component={MobilePhones}
          options={{ title: "App home" }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ title: "Back to IT Home" }}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  itViewStyleContainer: {
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 20,
    margin: 16,
  },
});

export default ITScreen;
