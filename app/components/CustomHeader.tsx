// src/components/CustomHeader.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import { useNavigation, useRouter } from "expo-router";

interface CustomHeaderProps {
  title: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBackButton = false,
  rightComponent,
}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => router.back()}>
          <IconButton icon="arrow-left" size={24} />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, { marginRight: showBackButton ? "12%" : 0 }]}>
        {title}
      </Text>
      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    // backgroundColor: "rgba(0,0,0,0.8)", // Customize background color here
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black", // Customize title color here
    flex: 1,
    textAlign: "center",
  },
  rightContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default CustomHeader;
