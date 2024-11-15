import { View, Text, FlatList } from "react-native";
import { useStore } from "../store/useStore";
import { useBookings } from "../services/api";
import BookingList from "../components/BookingList";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";

export default function BookingsScreen() {
  const { bookings } = useStore();
  const { data, isLoading } = useBookings();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <CustomHeader title="Bookings" />
      <BookingList bookings={bookings} />
    </SafeAreaView>
  );
}
