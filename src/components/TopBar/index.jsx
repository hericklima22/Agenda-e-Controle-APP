import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function TopBar(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} {...props} />
    </View>
  );
}
