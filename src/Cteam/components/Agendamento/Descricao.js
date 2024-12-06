import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export default function Descricao({ salvarDescricao }) {
  const [descricao, setDescricao] = useState('');

  const handleChange = (text) => {
    setDescricao(text);
    salvarDescricao(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
      },
      input: {
        height: 40,
        width:350,
        borderColor: '#000',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginTop: 8,
        marginLeft:8,
      },
      Texto:{
        fontWeight:"bold",
        fontSize:20,
        alignItems:"center",
        paddingLeft:6,
        paddingRight:15
      }
  }
  );



