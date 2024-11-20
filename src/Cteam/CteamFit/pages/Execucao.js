import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, FlatList, TouchableOpacity } from 'react-native';
import { IconButton, Button } from 'react-native-paper';

const Execucao = ({ route, navigation }) => {
  const { exercicios } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reps, setReps] = useState(['', '', '']); // Número de repetições por série
  const [cargas, setCargas] = useState(['', '', '']); // Carga usada por série

  const handleInputChange = (value, index, type) => {
    if (type === 'reps') {
      const updatedReps = [...reps];
      updatedReps[index] = value;
      setReps(updatedReps);
    } else if (type === 'carga') {
      const updatedCargas = [...cargas];
      updatedCargas[index] = value;
      setCargas(updatedCargas);
    }
  };

  const confirmarConclusao = () => {
    Alert.alert(
      'Exercício Concluído',
      'Você concluiu este exercício. Deseja continuar para o próximo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => {
            if (currentIndex < exercicios.length - 1) {
              setCurrentIndex(currentIndex + 1);
              setReps(['', '', '']);
              setCargas(['', '', '']);
            } else {
              Alert.alert('Treino Concluído', 'Parabéns, você concluiu todos os exercícios!');
              navigation.navigate('Treinos'); // Voltar à tela de treinos
            }
          },
        },
      ]
    );
  };

  const exercicioAtual = exercicios[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>{exercicioAtual.nome}</Text>
        <IconButton icon="account-circle" />
      </View>

      <FlatList
        data={[1, 2, 3]} // Três séries para o exercício
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Reps"
              keyboardType="numeric"
              value={reps[index]}
              onChangeText={(value) => handleInputChange(value, index, 'reps')}
            />
            <Text style={styles.multiply}>x</Text>
            <TextInput
              style={styles.input}
              placeholder="Carga (kg)"
              keyboardType="numeric"
              value={cargas[index]}
              onChangeText={(value) => handleInputChange(value, index, 'carga')}
              onSubmitEditing={() => {
                if (index === 2 && cargas[index]) {
                  confirmarConclusao();
                }
              }}
            />
          </View>
        )}
      />

      <View style={styles.videoSection}>
        <Text style={styles.videoText}>Vídeo de demonstração</Text>
        <TouchableOpacity style={styles.videoPlaceholder}>
          <Text style={styles.videoIcon}>▶️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  multiply: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  videoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoPlaceholder: {
    width: 200,
    height: 120,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  videoIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Execucao;
