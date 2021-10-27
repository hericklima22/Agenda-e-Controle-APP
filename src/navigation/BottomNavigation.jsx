import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { AlugueisScreen } from "../screens/AlugueisScreen";

const Tab = createBottomTabNavigator();
export const BOTTOM_TAB_HEIGHT = 75;

export function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2D48BA",
        tabBarLabelStyle: { fontSize: 20 },
        tabBarStyle: { height: BOTTOM_TAB_HEIGHT, alignItems: "center" },
        tabBarItemStyle: { padding: 10 },
        tabBarInactiveTintColor: "#383838",
        tabBarActiveBackgroundColor: "#ffd700",
      }}
    >
      <Tab.Screen
        name="Alugueis"
        options={{
          tabBarLabel: "Alugueis",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map-marked" size={30} color={color} />
          ),
        }}
        component={AlugueisScreen}
      />
    </Tab.Navigator>
  );
}
