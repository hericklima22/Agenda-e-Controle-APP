import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components";

export function AgendaScreen() {
  let data = new Date();
  const dataFormatada =
    data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate();

  return (
    <>
      <SafeAreaView>
        <TopBar>Agenda</TopBar>
        <Calendar
          style={{ height: "100%" }}
          theme={{
            calendarBackground: "#ffff00",
            textDayFontSize: 25,
            todayTextColor: "#00ff00",
          }}
        ></Calendar>
      </SafeAreaView>
    </>
  );
}
