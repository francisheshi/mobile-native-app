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
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
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
        <Button
          onPress={() => console.log("btn")}
          title="Ready to Sign-in?"
          type="clear"
        />
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
    resizeMode: "contain",
  },
  autocomplete: {
    flex: 0,
    fontSize: 18,
  },
});

export default HomeScreen;
