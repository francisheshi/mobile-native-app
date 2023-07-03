import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../../components/navigating/NavigateCard";
import RideOptionsCard from "../../components/navigating/RideOptionsCard";
import Map from "../../components/navComp/Map";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <Text style={tw`text-center py-3 pt-12 text-xl`}>MapScreen</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
