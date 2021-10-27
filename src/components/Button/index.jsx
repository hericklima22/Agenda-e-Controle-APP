import React from "react";
import { Text, TouchableHighlight } from "react-native";
import styles from "./styles";

export function Button(props) {
  const stylesButton = [styles.button];
  if (props.double) {
    stylesButton.push(styles.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(styles.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(styles.operationButton);
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
}
