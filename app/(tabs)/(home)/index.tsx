import { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { useProperties } from "../../services/api";
import { ActivityIndicator } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropertyCard from "../../components/PropertyCard";
import { useStore } from "../../store/useStore";
import { useRouter } from "expo-router";
import SearchBar from "../../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

export default function HomeScreen() {
  const { properties } = useStore();
  const { data, isLoading } = useProperties();
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log("🚀 ~ HomeScreen ~ properties:", data);
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} color="purple" />
        </View>
      ) : (
        <View style={{ padding: 16 }}>
          <CustomHeader title="Home" />
          <SearchBar query={search} onChange={setSearch} />
          <FlatList
            data={properties.filter((p) => p.title.includes(search))}
            renderItem={({ item }) => (
              <PropertyCard
                property={item}
                onPressCard={() => {
                  router.push({
                    pathname: `/(home)${item.id}`,
                    params: { property: JSON.stringify(item) },
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
