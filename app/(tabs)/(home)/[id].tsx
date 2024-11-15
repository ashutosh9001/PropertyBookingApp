import { View, Text, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { useLocalSearchParams } from "expo-router";
import MapViewComponent from "../../components/MapViewComponent";
import FeaturesList from "../../components/FeaturesList";
import Property from "../../types/property";
import BookButton from "../../components/BookButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

export default function PropertyDetailScreen() {
  const item = useLocalSearchParams();
  const property: Property = JSON.parse(item?.property);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Property Detail" showBackButton />
      <MapViewComponent
        latitude={property.location?.coordinates.latitude}
        longitude={property.location?.coordinates.longitude}
      />
      <FeaturesList features={property?.features} />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 10,
        }}
      >
        <BookButton onBook={() => {}} loading={false} />
      </View>
    </SafeAreaView>
  );
}
