import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4.7,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#fde910",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
    color: "#000",
  },
  operationButton: {
    color: "#000",
    backgroundColor: "#fa8231",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});

export default styles;
