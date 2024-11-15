// src/components/SearchBar.tsx
import React from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";

interface SearchBarProps {
  query: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  return (
    <View style={{ marginVertical: 8 }}>
      <TextInput
        placeholder="Search properties..."
        value={query}
        onChangeText={onChange}
        mode="outlined"
        style={{ backgroundColor: "white" }}
      />
    </View>
  );
};

export default SearchBar;
