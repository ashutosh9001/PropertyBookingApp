// src/components/BookButton.tsx
import React from "react";
import { Button } from "react-native-paper";

interface BookButtonProps {
  onBook: () => void;
  loading: boolean;
}

const BookButton: React.FC<BookButtonProps> = ({ onBook, loading }) => (
  <Button
    mode="contained"
    loading={loading}
    onPress={onBook}
    style={{ marginVertical: 16, marginHorizontal: 20 }}
  >
    Book Now
  </Button>
);

export default BookButton;
