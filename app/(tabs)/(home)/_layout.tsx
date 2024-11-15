// app/_layout.tsx
import { Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";
import { Icon } from "react-native-paper";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="detail" options={{ title: "Property Detail" }} /> */}
    </Stack>
  );
}
