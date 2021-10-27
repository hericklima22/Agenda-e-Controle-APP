import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export function Display(props) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
      <Text style={styles.displayOperation} numberOfLines={1}>
        {props.operation}
      </Text>
    </View>
  );
}
