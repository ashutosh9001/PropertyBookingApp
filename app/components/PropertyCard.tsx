// src/components/PropertyCard.tsx
import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { Property } from "../types"; // Define Property type based on your data
import { useNavigation } from "expo-router";

interface PropertyCardProps {
  property: Property;
  onPressCard: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onPressCard,
}) => {
  return (
    <Card
      style={{ marginVertical: 10, marginHorizontal: 5 }}
      onPress={onPressCard}
    >
      <Card.Cover source={{ uri: property.images[0] }} />
      <Card.Content>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {property.title}
        </Text>
        <Text>
          {property.location.city}, {property.location.state}
        </Text>
        <Text>${property.price} / night</Text>
      </Card.Content>
    </Card>
  );
};

export default PropertyCard;
