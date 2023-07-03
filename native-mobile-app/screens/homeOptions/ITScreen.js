import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import tw from "tailwind-react-native-classnames";
import ITServ from "../../components/ITServ";
// import MobilePhones from "../screens/itOptions/MobilePhones";
// import Camera from "../screens//itOptions/Camera";

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

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="MobilePhones"
            component={MobilePhones}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itViewStyleContainer: {
    textAlign: "center",
    paddingTop: 14,
    margin: 10,
  },
});

export default ITScreen;
