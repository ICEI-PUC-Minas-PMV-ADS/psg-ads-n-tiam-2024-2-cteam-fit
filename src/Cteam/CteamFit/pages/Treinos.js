import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { IconButton, Card, Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const Treinos = () => {
    const navigation = useNavigation();
  const treinos = [
    { id: '1', nome: 'Treino A', descricao: 'Peito - Tríceps' },
    { id: '2', nome: 'Treino B', descricao: 'Costas - Bíceps - Abdômen' },
    { id: '3', nome: 'Treino C', descricao: 'Pernas' },
    { id: '4', nome: 'Treino D', descricao: 'Ombros - Abdominal' },
  ];

  navigation.navigate('Execucao', { exercicios });

  const iniciarTreino = (nome) => {
    alert(`Iniciando ${nome}...`);
  };

  const renderTreino = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardDescription}>{item.descricao}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => iniciarTreino(item.nome)}
          style={styles.iniciarButton}
        >
          Iniciar Treino
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="home" onPress={() => alert('Voltar para início')} />
        <Text style={styles.title}>Meus treinos</Text>
        <IconButton icon="account-circle" onPress={() => navigation.navigate('Login')} />
      </View>

      <FlatList
        data={treinos}
        renderItem={renderTreino}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Treinos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Refeições</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    padding: 15,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#0077b6',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardDescription: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  iniciarButton: {
    marginTop: 10,
    backgroundColor: '#00b4d8',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#0077b6',
  },
});

export default Treinos;
