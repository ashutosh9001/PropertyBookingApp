// app/store/useStore.ts

import { create } from "zustand";

// Coordinates for a property location
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// Location details of a property
export interface Location {
  address: string;
  city: string;
  state: string;
  coordinates: Coordinates;
}

// Property details
export interface Property {
  id: string;
  title: string;
  price: number;
  location: Location;
  features: string[];
  images: string[];
}

// Booking details
export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: string; // Consider using Date type if parsing dates
  checkOut: string; // Consider using Date type if parsing dates
  status: "confirmed" | "pending" | "cancelled";
}

// Profile details of a user
export interface Profile {
  id: string;
  name: string;
  email: string;
  bookings: string[];
}

// Main structure for the data
export interface Data {
  properties: Property[];
  bookings: Booking[];
  profile: Profile;
}

export interface AppState {
  properties: Property[];
  bookings: Booking[];
  profile: Profile;
  setProperties: (properties: Property[]) => void;
  setBookings: (bookings: Booking[]) => void;
  setProfile: (profile: Profile) => void;
}

export const useStore = create<AppState>((set) => ({
  properties: [],
  bookings: [],
  profile: {
    id: "",
    name: "",
    email: "",
    bookings: [],
  },
  setProperties: (properties) => set({ properties }),
  setBookings: (bookings) => set({ bookings }),
  setProfile: (profile) => set({ profile }),
}));
