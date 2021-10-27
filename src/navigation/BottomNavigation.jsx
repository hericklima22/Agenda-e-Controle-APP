import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  AlugueisScreen,
  ClientesScreen,
  AgendaScreen,
  CalculadoraScreen,
} from "../screens";

const Tab = createBottomTabNavigator();
export const BOTTOM_TAB_HEIGHT = 75;

export function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2D48BA",
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { height: BOTTOM_TAB_HEIGHT, alignItems: "center" },
        tabBarItemStyle: { padding: 10 },
        tabBarInactiveTintColor: "#383838",
        tabBarActiveBackgroundColor: "#ffd700",
        tabBarInactiveBackgroundColor: "#ffff00",
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
      <Tab.Screen
        name="Clientes"
        options={{
          tabBarLabel: "Clientes",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="users" size={30} color={color} />
          ),
        }}
        component={ClientesScreen}
      />
      <Tab.Screen
        name="Agenda"
        options={{
          tabBarLabel: "Agenda",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" size={30} color={color} />
          ),
        }}
        component={AgendaScreen}
      />
      <Tab.Screen
        name="Calculadora"
        options={{
          tabBarLabel: "Calculadora",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calculator" size={30} color={color} />
          ),
        }}
        component={CalculadoraScreen}
      />
    </Tab.Navigator>
  );
}
