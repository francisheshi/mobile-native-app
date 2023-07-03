import React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const cameras = [
  {
    id: "1C",
    title: "Camera 1",
  },
  {
    id: "2C",
    title: "Camera 2",
  },
  {
    id: "3C",
    title: "Camera 3",
  },
];

const Camera = () => {
  return (
    <View>
      <Text style={tw`text-center py-3 text-xl`}>Camera</Text>

      <View style={tw`pl-2 pt-2 h-1/2`}>
        {cameras.map((camera) => (
          <Text key={camera.id} style={styles.textCustom}>
            {camera.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  textCustom: {
    fontSize: 16,
    justifyContent: "space-evenly",
    display: "flex",
    margin: 10,
    padding: 5,
    position: "relative",
  },
});
