// src/components/FeaturesList.tsx
import React from "react";
import { View, Text } from "react-native";
import { Chip } from "react-native-paper";

interface FeaturesListProps {
  features: string[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap", marginVertical: 8 }}>
    {features?.map((feature, index) => (
      <Chip key={index} style={{ margin: 4 }}>
        {feature}
      </Chip>
    ))}
  </View>
);

export default FeaturesList;
