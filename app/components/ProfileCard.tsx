// src/components/ProfileCard.tsx
import React from "react";
import { View, Text } from "react-native";
import { Avatar, Card } from "react-native-paper";

interface ProfileCardProps {
  name: string;
  email: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email }) => (
  <Card
    style={{
      padding: 16,
      alignItems: "flex-start",
      marginTop: 16,
    }}
  >
    <Avatar.Text size={64} label={name[0]} />
    <Text style={{ fontWeight: "bold", fontSize: 20, marginVertical: 8 }}>
      {name}
    </Text>
    <Text>{email}</Text>
  </Card>
);

export default ProfileCard;
