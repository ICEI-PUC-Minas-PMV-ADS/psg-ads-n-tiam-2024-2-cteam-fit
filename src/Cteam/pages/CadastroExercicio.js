import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, Button } from "react-native";
import Subtitulo from "../components/Subtitulo";
import ModalValidacao from "../components/ModalValidacao";

export default function CadastroExercicio() {
  const [repeticoes, setRepeticoes] = useState(null);
  const [carga, setCarga] = useState(null);
  const [series, setSeries] = useState(null);
  const [nome, setNome] = useState(null);
  const [mensagem, setMensagem] = useState("");
  const [link, setLink] = useState(null);
  const [grupo, setGrupo] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  function cadastrarExercicio() {
    console.log("Exercício cadastrado com sucesso");
  }

  function validarCampos() {
    if (!nome || !repeticoes || !series) {
      setMensagem("Por favor, preencha todos os campos obrigatórios.");
      setModalVisivel(true);
      return;
    }

    setMensagem("Exercício cadastrado com sucesso!");
    setModalVisivel(true);
    cadastrarExercicio();
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Subtitulo />
        <Text style={styles.label}>Nome do exercício*</Text>
        <TextInput 
          onChangeText={setNome} 
          value={nome} 
          style={styles.input} 
          placeholder="Ex. Supino Máquina" 
        />
        <Text style={styles.label}>Link do exercício</Text>
        <TextInput 
          onChangeText={setLink} 
          value={link} 
          style={styles.input} 
          placeholder="Ex. www.youtube.co..." 
        />
        <Text style={styles.label}>Grupo</Text>
        <TextInput 
          onChangeText={setGrupo} 
          value={grupo} 
          style={styles.input} 
          placeholder="Ex. Peito" 
        />
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>Repetições*</Text>
          <Text style={styles.header}>Carga(Kg)</Text>
          <Text style={styles.header}>Séries*</Text>
        </View>
        <View style={styles.row}>
          <TextInput 
            style={styles.cell} 
            onChangeText={setRepeticoes} 
            value={repeticoes} 
            keyboardType="numeric" 
          />
          <TextInput 
            style={styles.cell} 
            onChangeText={setCarga} 
            value={carga} 
            keyboardType="numeric" 
          />
          <TextInput 
            style={styles.cell} 
            onChangeText={setSeries} 
            value={series} 
            keyboardType="numeric" 
          />
        </View>
      </View>

      <View style={styles.button}>
        <Button title="Cadastrar Exercício" onPress={validarCampos} />
      </View>

      <ModalValidacao 
        mensagem={mensagem} 
        visible={modalVisivel} 
        onClose={() => setModalVisivel(false)} 
      />
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
    margin: 10,
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
    maxWidth: 115,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});
