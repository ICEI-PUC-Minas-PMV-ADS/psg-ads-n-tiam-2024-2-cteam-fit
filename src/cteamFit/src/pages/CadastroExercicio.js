import React from "react";
import {StyleSheet, View, Text, ScrollView, TextInput, Button} from "react-native";
import Subtitulo from "../components/Subtitulo";

export default function FormularioSeries(){
    return(
        <ScrollView>
        <View style={styles.table}>
          {/* Cabeçalho */}
          <View style={styles.row}>
            <Text style={styles.header}>Repetições</Text>
            <Text style={styles.header}>Carga(Kg)</Text>
            <Text style={styles.header}>Séries</Text>
          </View>
  
          {/* Linha */}
          <View style={styles.row}>
            <Text style={styles.cell}>12</Text>
            <Text style={styles.cell}>10</Text>
            <Text style={styles.cell}>3</Text>
          </View>
  
        </View>
        <View style={styles.container}>
            <Subtitulo/>
            <Text style={styles.label}>Nome do exercício</Text>
            <TextInput placeholder="Ex. Supino Máquina"/>
            <Text style={styles.label}>Link do exercício</Text>
            <TextInput placeholder="Ex. www.youtube.co..."/>
        </View>
        <View style={styles.button} >
            <Button title="Cadastrar"/>
        </View>
      </ScrollView>
      );
}

const styles = StyleSheet.create({
    container: {
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 15,
    },
    table: {
      overflow: 'hidden',
      flex: 1,
      //backgroundColor: '#2e73b6',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 15,
      margin: 10
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    header: {
      flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      //color: 'white',
      padding: 8,
    },
    cell: {
      flex: 1,
      textAlign: 'center',
      fontSize: 14,
      //color: 'white',

      padding: 8,
    },
    label: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        alignItems: 'end',
        justifyContent: 'end',
        margin: 10
        }
  });