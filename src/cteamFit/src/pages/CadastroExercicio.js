import React, { useState } from "react";

import {Modal, StyleSheet, View, Text, ScrollView, TextInput, Button} from "react-native";
import Subtitulo from "../components/Subtitulo";
import ModalValidacao from "../components/ModalValidacao";

export default function FormularioSeries(){

  const [repeticoes, setRepeticoes] = useState(null);
  const [carga, setCarga] = useState(null);
  const [series, setSeries] = useState(null);
  const [nome, setNome] = useState(null);
  const [mensagem, setMensagem] = useState("preencha todos os campos com *");
  const [link, setLink] = useState(null);
  const [observacao, setObservacao] = useState(null);

  function cadastrarExercício(){
    //ToastAndroid.show('Este é um balão simples!', ToastAndroid.SHORT);
  }

  function validarCampos(){
    if(repeticoes != null && series != null && nome != null){
      setMensagem("Exercício cadastrado com sucesso")
      cadastrarExercício()
      return
    }

  }

  return(
    <ScrollView>
      
      <View style={styles.container}>
          <Subtitulo/>
          <Text style={styles.label}>Nome do exercício*</Text>
          <TextInput onChangeText={setNome} value={nome} style={styles.input}  placeholder="Ex. Supino Máquina"/>
          <Text style={styles.label}>Link do exercício</Text>
          <TextInput onChangeText={setLink} value={link}  style={styles.input} placeholder="Ex. www.youtube.co..."/>
          <Text style={styles.label}>Observação</Text>
          <TextInput onChangeText={setObservacao} value={observacao} style={styles.input} placeholder="Ex. Pirâmide Crescente"/>
      </View>
      <View style={styles.table}>
        {/* Cabeçalho */}
        <View style={styles.row}>
          <Text style={styles.header}>Repetições*</Text>
          <Text style={styles.header}>Carga(Kg)</Text>
          <Text style={styles.header}>Séries*</Text>
        </View>

        {/* Linha */}
        <View style={styles.row}>
          <TextInput style={styles.cell} onChangeText={setRepeticoes} value={repeticoes} placeholder="Ex. 12"/>
          <TextInput style={styles.cell} onChangeText={setCarga} value={carga} placeholder="Ex. 15"/>
          <TextInput style={styles.cell} onChangeText={setSeries} value={series} placeholder="Ex. 3"/>
        </View>

      </View>
      <View style={styles.button} >
          <ModalValidacao
            mensagem={mensagem}
          />
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
      marginTop: 30,
      marginBottom: 30,
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
      padding: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
    },
    label: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10
    },
    button: {
        alignItems: 'end',
        marginTop: 30,
        justifyContent: 'end',
        margin: 10
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      padding: 10,
      margin: 5,
    }
  });