import axios from "axios";
import { useStore } from "../store/useStore";
import { useQuery } from "@tanstack/react-query";

const fetchProperties = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/properties");
    console.log("FETCHING ---> 🚀 ~ fetchProperties ~ data:", data);
    useStore.setState({ properties: data });

    return data;
  } catch (err) {
    console.log("fetchProperties ERROR", err);
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
    const { data } = await axios.get("http://localhost:3000/bookings");
    console.log("FETCHING ---> 🚀 ~ fetchBookings ~ data:", data);
    useStore.setState({ bookings: data });

    return data;
  } catch (err) {
    console.log("fetchBookings ERROR", err);
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
    const { data } = await axios.get("http://localhost:3000/profile");
    console.log("FETCHING ---> 🚀 ~ fetchProfile ~ data:", data);
    useStore.setState({ profile: data });

    return data;
  } catch (err) {
    console.log("fetchProfile ERROR", err);
    return err;
  }
};

export function useProfile() {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: fetchProfile,
  });
}
