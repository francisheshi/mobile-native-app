import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import tw from "tailwind-react-native-classnames";
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  return (
    <MapView
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={tw`flex-1`}
    >
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title="Origin"
        identifier="origin"
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
