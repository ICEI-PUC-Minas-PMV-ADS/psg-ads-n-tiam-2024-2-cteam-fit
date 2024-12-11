import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Button, ScrollView, Image } from 'react-native';
import { db } from './firebaseConfig';
import { get, ref } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage'

// Função para obter os exercícios
const fetchExercicios = async () => {
  const exerciciosRef = ref(db, 'exercicios');
  try {
    const snapshot = await get(exerciciosRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
  } catch (error) {
    console.error("Erro ao obter os exercícios: ", error);
  }
  return {};
};

// Função para obter os treinos do aluno
const fetchTreinosDoAluno = async (userId) => {
  const treinosRef = ref(db, 'treinos');
  try {
    const snapshot = await get(treinosRef);
    if (snapshot.exists()) {
      const treinosData = snapshot.val();
      const treinosDoAluno = [];

      // Filtra os treinos relacionados ao aluno
      Object.keys(treinosData).forEach((treinoId) => {
        const treino = treinosData[treinoId];
        if (treino.alunoId === userId) {
          treinosDoAluno.push(treino);
        }
      });

      return treinosDoAluno;
    }
  } catch (error) {
    console.error("Erro ao obter os treinos: ", error);
  }
  return [];
};

// Tela de Lista de Treinos
const TelaListaTreinos = ({ onSelecionarTreino }) => {
  const [treinos, setTreinos] = useState([]);  // Estado para armazenar os treinos

  // Carregar os treinos quando o componente for montado
  useEffect(() => {
    const carregarTreinos = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        const treinosData = await fetchTreinosDoAluno(userId);
        setTreinos(treinosData);  // Atualiza o estado com os treinos do aluno
      } catch (error) {
        console.error("Erro ao carregar os treinos: ", error);
      }
    };
    carregarTreinos();
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Treinos</Text>
      <FlatList
        data={treinos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartaoTreino}>
            <Text style={styles.nomeTreino}>Treino {item.id}</Text>
            <Text style={styles.descricaoTreino}>Personal: {item.personalId}</Text>
            <TouchableOpacity style={styles.botaoIniciar} onPress={() => onSelecionarTreino(item)}>
              <Text style={styles.textoBotao}>INICIAR TREINO</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

// Tela de Exercício
const TelaExercicio = ({ treino, onFinalizarExercicio, onVoltar }) => {
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    const carregarExercicios = async () => {
      const exerciciosData = await fetchExercicios(); // Obtém todos os exercícios
      const exerciciosSelecionados = [];

      // Filtra os exercícios que estão no treino
      Object.keys(treino.exercicios).forEach((exercicioId) => {
        if (treino.exercicios[exercicioId]) {
          exerciciosSelecionados.push(exerciciosData[exercicioId]);
        }
      });

      setExercicios(exerciciosSelecionados); // Atualiza o estado com os exercícios do treino
    };

    carregarExercicios();
  }, [treino]); // Carregar os exercícios sempre que o treino for alterado

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Treino {treino.id}</Text>
      <FlatList
        data={exercicios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartaoExercicio}>
            <Text style={styles.nomeExercicio}>{item.nome}</Text>
            <Text style={styles.grupoExercicio}>Grupo: {item.grupo}</Text>
            <Text style={styles.detalheExercicio}>Carga: {item.peso}kg</Text>
            <Text style={styles.detalheExercicio}>Séries: {item.series}</Text>
            <Text style={styles.detalheExercicio}>Repetições: {item.repeticoes}</Text>

            {/* Exibe o link do vídeo diretamente */}
            {item.url_video && (
              <Text style={styles.detalheExercicio}>
                <Text style={{ color: '#1b6fa8' }}>Vídeo: </Text>
                <Text>{item.url_video}</Text>
              </Text>
            )}

            <TouchableOpacity style={styles.botaoFinalizar} onPress={onFinalizarExercicio}>
              <Text style={styles.textoBotao}>FINALIZAR EXERCÍCIO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoVoltar, { backgroundColor: '#777' }]} onPress={onVoltar}>
              <Text style={styles.textoBotao}>VOLTAR AOS TREINOS</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};


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
export default function Aluno() {
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
    setTreinoSelecionado(null); 
  };

  const voltarParaLista = () => {
    setTreinoSelecionado(null);
  };

  return (
    <View style={styles.container}>
      {treinoSelecionado ? (
        <TelaExercicio
          treino={treinoSelecionado}
          onFinalizarExercicio={finalizarExercicio}
          onVoltar={voltarParaLista}
        />
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
    color: '#2e73b6',
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
  cartaoExercicio: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  nomeExercicio: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  grupoExercicio: {
    fontSize: 16,
    color: '#777',
    marginBottom: 8,
  },
  detalheExercicio: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  botaoVideo: {
    backgroundColor: '#5c88d1',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoFinalizar: {
    backgroundColor: '#f05c5c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalTexto: {
    fontSize: 18,
    marginBottom: 20,
  },
  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  botaoVoltar: {
    backgroundColor: '#1b6fa8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoVoltar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
