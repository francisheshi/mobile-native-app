import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const itDataCategories = [
  {
    id: "2A",
    title: "Mobile Phones",
    image: "https://tinyurl.com/2435dfzt",
    screen: "MobilePhones",
  },
  {
    id: "2B",
    title: "Camera",
    image: "https://tinyurl.com/2435dfzt",
    screen: "Camera",
  },
];

const ITServ = () => {
  const navigateItDep = useNavigation();

  return (
    <View>
      <View>
        <FlatList
          data={itDataCategories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigateItDep.navigate(item.screen)}
              style={tw`p-1 pl-5 pb-8 pt-4 bg-gray-200 m-1 w-40`}
            >
              <View>
                <Image
                  style={styles.imgITServiceOpt}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon
                  style={tw`p-2 bg-black rounded-full w-10 mt-7`}
                  name="arrowright"
                  color="white"
                  type="antdesign"
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ITServ;

const styles = StyleSheet.create({
  imgITServiceOpt: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
