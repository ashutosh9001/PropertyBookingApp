// src/components/BookingList.tsx
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Card, useTheme } from "react-native-paper";
import { Booking } from "../store/useStore";

interface BookingListProps {
  bookings: Booking[];
}

const BookingList: React.FC<BookingListProps> = ({ bookings }) => {
  const { colors } = useTheme();

  return (
    <FlatList
      data={bookings}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Booking ID: {item.id}</Text>
            <Text style={styles.status(item.status)}>
              Status: {item.status}
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateLabel}>Check-In:</Text>
              <Text style={styles.dateValue}>{item.checkIn}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateLabel}>Check-Out:</Text>
              <Text style={styles.dateValue}>{item.checkOut}</Text>
            </View>
          </Card.Content>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 16,
    marginHorizontal: 10,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  status: (status: string) => ({
    fontSize: 16,
    color: status === "confirmed" ? "#4CAF50" : "#FF5722",
    fontWeight: "600",
    marginBottom: 8,
  }),
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  dateLabel: {
    fontSize: 14,
    color: "#666",
    fontWeight: "600",
    marginRight: 4,
  },
  dateValue: {
    fontSize: 14,
    color: "#333",
  },
});

export default BookingList;
