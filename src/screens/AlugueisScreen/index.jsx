import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components/TopBar";
import Equipamentos from "./equipamentos.json";
import styles from "./styles";

export function AlugueisScreen() {
  const { equipamentos } = Equipamentos;
  return (
    <SafeAreaView>
      <TopBar>Alugueis</TopBar>
      <FlatList
        keyExtractor={equipamentos.id}
        data={equipamentos}
        renderItem={({ item, index }) => (
          <View key={item.id} style={styles.containerImage}>
            <Text>{item.nome}</Text>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
