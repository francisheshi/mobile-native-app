import React from "react";
import { StyleSheet, SafeAreaView, View, Image, Button } from "react-native";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../../components/navigating/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../../slices/navSlice";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.img}
          source={require("../../stylesImage/Ordering.png")}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Search..."
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetais={false}
          minLength={2}
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
  img: {
    width: 100,
    height: 100,
  },
  autocomplete: {
    flex: 0,
    fontSize: 18,
  },
  openSideBar: {
    fontSize: 10,
    border: "1 solid black",
  },
});

export default HomeScreen;
