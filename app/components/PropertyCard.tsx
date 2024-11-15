import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Swiper from "react-native-swiper";
import Property from "../types/property";

interface PropertyCardProps {
  property: Property;
  onPressCard: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onPressCard,
}) => {
  return (
    <Card style={styles.card} onPress={onPressCard}>
      {/* Swiper Carousel */}
      <View style={styles.carouselContainer}>
        <Swiper
          autoplay
          showsPagination
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          autoplayTimeout={3} // Switch every 3 seconds
        >
          {property.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </Swiper>
      </View>

      <Card.Content>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.location}>
          {property.location.city}, {property.location.state}
        </Text>
        <Text style={styles.price}>${property.price} / night</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  carouselContainer: {
    height: 200,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: "gray",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  dot: {
    backgroundColor: "#ccc",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: "#000",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default PropertyCard;
