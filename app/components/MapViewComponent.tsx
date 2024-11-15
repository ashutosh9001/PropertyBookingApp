// src/components/MapViewComponent.tsx
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";

interface MapViewComponentProps {
  latitude: number;
  longitude: number;
}

const MapViewComponent: React.FC<MapViewComponentProps> = ({
  latitude,
  longitude,
}) => (
  <View style={{ height: 300, marginVertical: 8 }}>
    <MapView
      style={StyleSheet.absoluteFillObject}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} />
    </MapView>
  </View>
);

export default MapViewComponent;
