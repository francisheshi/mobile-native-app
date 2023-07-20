import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const mobilesData = [
  {
    id: "1M",
    title: "Mobile 1",
  },
  {
    id: "2M",
    title: "Mobile 2",
  },
  {
    id: "3M",
    title: "Mobile 3",
  },
];

const MobilePhones = () => {
  const [mobiles, setMobiles] = useState(mobilesData);

  return (
    <View>
      <Text style={tw`text-center py-3 text-xl`}>Mobile Phones</Text>

      <View style={tw`pl-4 pt-3 h-1/2`}>
        {mobiles.map((mobile) => (
          <Text key={mobile.id} style={styles.textCustom}>
            {mobile.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default MobilePhones;

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
