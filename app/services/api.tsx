import axios from "axios";
import { useStore } from "../store/useStore";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "react-native";
import { localData } from "./localData";

const baseUrl = Platform.select({
  ios: "http://localhost:3000",
  android: "http://10.0.2.2:3000",
});

const fetchProperties = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/properties`);
    console.log("FETCHING ---> 🚀 ~ fetchProperties ~ data:", data);
    useStore.setState({ properties: data });

    return data;
  } catch (err) {
    console.log("fetchProperties ERROR", err);
    const data = localData.properties;
    useStore.setState({ properties: data });
    return err;
  }
};

export function useProperties() {
  return useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });
}

//fetching bookings
const fetchBookings = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/bookings`);
    console.log("FETCHING ---> 🚀 ~ fetchBookings ~ data:", data);
    useStore.setState({ bookings: data });

    return data;
  } catch (err) {
    console.log("fetchBookings ERROR", err);
    const data = localData.bookings;
    useStore.setState({ bookings: data });
    return err;
  }
};

export function useBookings() {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });
}

//fetching profile
const fetchProfile = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/profile`);
    console.log("FETCHING ---> 🚀 ~ fetchProfile ~ data:", data);
    useStore.setState({ profile: data });

    return data;
  } catch (err) {
    console.log("fetchProfile ERROR", err);
    const data = localData.profile;
    useStore.setState({ profile: data });
    return err;
  }
};

export function useProfile() {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: fetchProfile,
  });
}
