import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from './Style';

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



