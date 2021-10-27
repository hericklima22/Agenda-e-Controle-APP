import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components/TopBar";
import Equipamentos from "./equipamentos.json";
import styles from "./styles";

export function AlugueisScreen() {
  const { equipamentos } = Equipamentos;

  return (
    <SafeAreaView>
      <TopBar>Alugueis</TopBar>
      <View style={{ height: 2, backgroundColor: "#000000" }}></View>
      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={equipamentos}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={
                (styles.list,
                item.id % 2 === 0
                  ? { backgroundColor: "#ffdb58" }
                  : { backgroundColor: "#ecec52" })
              }
            >
              <View style={styles.containerView}>
                <View style={styles.itemView1}>
                  <Text style={styles.itemText1}>{item.nome_cliente}</Text>
                  <Text style={styles.itemText2}>{item.tipo}</Text>
                </View>
                <View>
                  <Text style={styles.itemText3}>
                    Vence: {item.data_vencimento}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
