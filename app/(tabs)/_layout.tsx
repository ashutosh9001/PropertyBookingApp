// app/_layout.tsx
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { Icon } from "react-native-paper";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: () => <Icon source={"home"} size={20} />,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Bookings",
          tabBarIcon: () => <Icon source={"book"} size={20} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Icon source={"face-man-profile"} size={20} />,
        }}
      />
    </Tabs>
  );
}
