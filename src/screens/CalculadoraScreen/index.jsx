import { getStateFromPath } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button, Display } from "../../components";
import styles from "./styles";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export function CalculadoraScreen() {
  const [state, setState] = useState(initialState);
  // console.log(state);

  const addDigit = (n) => {
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;

    if (n === "." && !clearDisplay && state.displayValue.includes(".")) {
      return;
    }

    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + n;
    console.log(n);
    setState({ ...state, displayValue });
    if (n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[state.current] = newValue;
      setState({ ...state, displayValue, values, clearDisplay: false });
      // console.log(values);
    }
  };

  const clearMemory = () => {
    setState(initialState);
  };

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ ...state, operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const values = [...state.values];

      try {
        values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = state.values[0];
      }

      values[1] = 0;
      setState({
        ...state,
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        values,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display value={state.displayValue} operation={state.operation}></Display>
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory}></Button>
        <Button label="/" operation onClick={setOperation}></Button>
        <Button label="7" onClick={addDigit}></Button>
        <Button label="8" onClick={addDigit}></Button>
        <Button label="9" onClick={addDigit}></Button>
        <Button label="*" operation onClick={setOperation}></Button>
        <Button label="4" onClick={addDigit}></Button>
        <Button label="5" onClick={addDigit}></Button>
        <Button label="6" onClick={addDigit}></Button>
        <Button label="-" operation onClick={setOperation}></Button>
        <Button label="1" onClick={addDigit}></Button>
        <Button label="2" onClick={addDigit}></Button>
        <Button label="3" onClick={addDigit}></Button>
        <Button label="+" operation onClick={setOperation}></Button>
        <Button label="0" double onClick={addDigit}></Button>
        <Button label="." onClick={addDigit}></Button>
        <Button label="=" operation onClick={setOperation}></Button>
      </View>
    </SafeAreaView>
  );
}
