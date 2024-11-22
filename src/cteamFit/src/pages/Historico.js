import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Dados fictícios para a lista de treinos no histórico
const historicoTreinos = [
  { id: '1', nome: 'Treino A', descricao: 'Peito - Tríceps', data: 'Segunda-feira, 12 de Novembro' },
  { id: '2', nome: 'Treino B', descricao: 'Costas - Bíceps - Abdômen', data: 'Quarta-feira, 14 de Novembro' },
  { id: '3', nome: 'Treino C', descricao: 'Pernas', data: 'Sexta-feira, 16 de Novembro' },
  { id: '4', nome: 'Treino D', descricao: 'Ombros - Abdominal', data: 'Segunda-feira, 19 de Novembro' },
];

// Tela de Histórico de Treinos
const TelaHistoricoTreinos = ({ onSelecionarTreino }) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>Histórico de Treinos</Text>
    <FlatList
      data={historicoTreinos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cartaoTreino}>
          <Text style={styles.nomeTreino}>{item.nome}</Text>
          <Text style={styles.descricaoTreino}>{item.descricao}</Text>
          <Text style={styles.dataTreino}>{item.data}</Text>
          <TouchableOpacity style={styles.botaoDetalhes} onPress={() => onSelecionarTreino(item)}>
            <Text style={styles.textoBotao}>VER DETALHES</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
);

// Tela de Detalhes do Treino
const TelaDetalhesTreino = ({ treino, onFinalizarTreino }) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>{treino.nome}</Text>
    <View style={styles.detalhesTreino}>
      <Text style={styles.subtitulo}>Descrição:</Text>
      <Text>{treino.descricao}</Text>
      <Text style={styles.subtitulo}>Data:</Text>
      <Text>{treino.data}</Text>
    </View>
    <TouchableOpacity style={styles.botaoFinalizar} onPress={onFinalizarTreino}>
      <Text style={styles.textoBotao}>SOLICITAR NOVAMENTE O TREINO</Text>
    </TouchableOpacity>
  </View>
);

// Modal para confirmar a finalização do treino
const ModalFinalizarTreino = ({ visivel, onCancelar, onConfirmar }) => (
  <Modal visible={visivel} transparent={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTexto}>Deseja solicitar esse treino novamente?</Text>
        <View style={styles.botoesModal}>
          <Button title="Cancelar" onPress={onCancelar} />
          <Button title="Solicitar!" onPress={onConfirmar} />
        </View>
      </View>
    </View>
  </Modal>
);

// Componente principal que alterna entre as telas
export default function TelaHistorico() {
  const [treinoSelecionado, setTreinoSelecionado] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  const selecionarTreino = (treino) => {
    setTreinoSelecionado(treino);
  };

  const finalizarTreino = () => {
    setModalVisivel(true);
  };

  const confirmarFinalizacao = () => {
    setModalVisivel(false);
    setTreinoSelecionado(null); // Volta para a lista de treinos após finalizar
  };

  return (
    <View style={styles.container}>
      {treinoSelecionado ? (
        <TelaDetalhesTreino treino={treinoSelecionado} onFinalizarTreino={finalizarTreino} />
      ) : (
        <TelaHistoricoTreinos onSelecionarTreino={selecionarTreino} />
      )}
      <ModalFinalizarTreino
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
  dataTreino: {
    color: '#e1e1e1',
    fontSize: 12,
    marginBottom: 8,
  },
  botaoDetalhes: {
    backgroundColor: '#1b6fa8',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 14,
  },
  detalhesTreino: {
    flexDirection: 'column',
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
