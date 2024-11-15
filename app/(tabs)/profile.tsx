import { View, Text, StyleSheet } from "react-native";
import { useStore } from "../store/useStore";
import { useProfile } from "../services/api";
import ProfileCard from "../components/ProfileCard";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { Card } from "react-native-paper";

export default function ProfileScreen() {
  const { profile } = useStore();
  const { data, isLoading } = useProfile();
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <CustomHeader title="Profile" />
      <ProfileCard email={profile.email} name={profile.name} />
    </SafeAreaView>
  );
}
