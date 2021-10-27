import React from "react";
import { AlugueisScreen } from "./src/screens/AlugueisScreen";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigation } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
