import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const historicoTreinos = [
  { id: '1', data: 'Qua, 2 de Out.', treino: 'Treino B' },
  { id: '2', data: 'Ter, 1 de Out.', treino: 'Treino A' },
  { id: '3', data: 'Seg, 30 de Set.', treino: 'Treino D' },
  { id: '4', data: 'Sex, 27 de Set.', treino: 'Treino C' },
];

const TelaHistoricoTreino = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Histórico de treino</Text>
      <FlatList
        data={historicoTreinos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={estilos.cartao}>
            <View style={estilos.iconeContainer}>
              <MaterialIcons name="event" size={24} color="#fff" />
            </View>
            <View style={estilos.infoContainer}>
              <Text style={estilos.data}>{item.data}</Text>
              <Text style={estilos.treino}>{item.treino}</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#fff" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartao: {
    backgroundColor: '#00a18e',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  iconeContainer: {
    backgroundColor: '#007f68',
    padding: 8,
    borderRadius: 50,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  data: {
    color: '#e1e1e1',
    fontSize: 14,
  },
  treino: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaHistoricoTreino;
