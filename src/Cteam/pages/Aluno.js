import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';

// Dados fictícios para a lista de treinos
const treinos = [
  { id: '1', nome: 'Treino A', descricao: 'Peito - Tríceps' },
  { id: '2', nome: 'Treino B', descricao: 'Costas - Bíceps - Abdômen' },
  { id: '3', nome: 'Treino C', descricao: 'Pernas' },
  { id: '4', nome: 'Treino D', descricao: 'Ombros - Abdominal' },
];

// Tela de Lista de Treinos
const TelaListaTreinos = ({ onSelecionarTreino }) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>Meus Treinos</Text>
    <FlatList
      data={treinos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cartaoTreino}>
          <Text style={styles.nomeTreino}>{item.nome}</Text>
          <Text style={styles.descricaoTreino}>{item.descricao}</Text>
          <TouchableOpacity style={styles.botaoIniciar} onPress={() => onSelecionarTreino(item)}>
            <Text style={styles.textoBotao}>INICIAR TREINO</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
);

// Tela de Exercício
const TelaExercicio = ({ exercicio, onFinalizarExercicio }) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>{exercicio.nome}</Text>
    <View style={styles.detalhesExercicio}>
      <Text style={styles.subtitulo}>Repetições</Text>
      <Text style={styles.subtitulo}>Carga (Kg)</Text>
      <Text style={styles.subtitulo}>Último treino</Text>
      {/* Exemplo de repetições */}
      <Text>12</Text>
      <Text>20 Kg</Text>
      <Text>12 x 20 kg</Text>
    </View>
    <TouchableOpacity style={styles.botaoFinalizar} onPress={onFinalizarExercicio}>
      <Text style={styles.textoBotao}>FINALIZAR EXERCÍCIO</Text>
    </TouchableOpacity>
  </View>
);

// Modal para confirmar finalização do exercício
const ModalFinalizarExercicio = ({ visivel, onCancelar, onConfirmar }) => (
  <Modal visible={visivel} transparent={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTexto}>Deseja realmente finalizar a série deste exercício?</Text>
        <View style={styles.botoesModal}>
          <Button title="Cancelar" onPress={onCancelar} />
          <Button title="Finalizar!" onPress={onConfirmar} />
        </View>
      </View>
    </View>
  </Modal>
);

// Componente principal que alterna entre as telas
export default function App() {
  const [treinoSelecionado, setTreinoSelecionado] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  const iniciarTreino = (treino) => {
    setTreinoSelecionado(treino);
  };

  const finalizarExercicio = () => {
    setModalVisivel(true);
  };

  const confirmarFinalizacao = () => {
    setModalVisivel(false);
    setTreinoSelecionado(null); // Volta para a lista de treinos após finalizar
  };

  return (
    <View style={styles.container}>
      {treinoSelecionado ? (
        <TelaExercicio exercicio={treinoSelecionado} onFinalizarExercicio={finalizarExercicio} />
      ) : (
        <ScrollView>
          <TelaListaTreinos onSelecionarTreino={iniciarTreino} />
        </ScrollView>
      )}
      <ModalFinalizarExercicio
        visivel={modalVisivel}
        onCancelar={() => setModalVisivel(false)}
        onConfirmar={confirmarFinalizacao}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartaoTreino: {
    backgroundColor: '#2e73b6',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  nomeTreino: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricaoTreino: {
    color: '#e1e1e1',
    fontSize: 14,
    marginBottom: 8,
  },
  botaoIniciar: {
    backgroundColor: '#1b6fa8',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 14,
  },
  detalhesExercicio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoFinalizar: {
    backgroundColor: '#1b6fa8',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTexto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
