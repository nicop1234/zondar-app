import React, {useState} from "react";
import { View } from "react-native";
import { Avatar, Text } from "@rneui/base";
import { getAuth, updateProfile } from "firebase/auth";
import { styles } from "./infoUaer.styles";

export function InfoUser() {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;

  return (
    <View style={styles.content}>
      <Avatar
        size='large'
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={ photoURL }>
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "admin"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}