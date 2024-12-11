import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database'; 
import { db } from './firebaseConfig'; 
import AsyncStorage from '@react-native-async-storage/async-storage'

const fetchHistoricoTreinos = async (userId) => {
  const historicoRef = ref(db, `users/${userId}/historico`);
  try {
    const snapshot = await get(historicoRef);
    if (snapshot.exists()) {
      const historico = snapshot.val();
      
      // Mapeia o histórico para incluir os dados dos treinos
      const historicoComTreinos = await Promise.all(Object.keys(historico).map(async (treinoId) => {
        const treinoRef = ref(db, `treinos/${treinoId}`);
        const treinoSnapshot = await get(treinoRef);
        
        if (treinoSnapshot.exists()) {
          const treino = treinoSnapshot.val();
          
          // Verificar se os exercícios existem
          const exercicios = treino.exercicios ? await Promise.all(Object.keys(treino.exercicios).map(async (exercicioId) => {
            const exercicioRef = ref(db, `exercicios/${exercicioId}`);
            const exercicioSnapshot = await get(exercicioRef);
            if (exercicioSnapshot.exists()) {
              return exercicioSnapshot.val(); // Retorna os dados do exercício
            }
            return null; // Caso o exercício não exista
          })) : [];
          
          return {
            ...treino,
            exercicios: exercicios.filter(exercicio => exercicio !== null) // Remove exercícios inválidos
          };
        }
        return null;
      }));

      return historicoComTreinos.filter(treino => treino !== null); // Filtra treinos inválidos
    }
  } catch (error) {
    console.error("Erro ao buscar histórico de treinos:", error);
  }
  return [];
};



// Tela de Histórico de Treinos
const TelaHistoricoTreinos = ({ onSelecionarTreino, historicoTreinos }) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>Histórico de Treinos</Text>
    <FlatList
      style={{ flex: 1 }} // Permite rolagem corretamente
      data={historicoTreinos}
      keyExtractor={(item, index) => index.toString()} // Alterado para index devido a dados sem id
      renderItem={({ item }) => (
        <View style={styles.cartaoTreino}>
          <Text style={styles.nomeTreino}>Treino em: {item.data}</Text>
          {item.exercicios && Object.keys(item.exercicios).map((exercicioId) => (
            <Text key={exercicioId} style={styles.descricaoTreino}>
              {item.exercicios[exercicioId].nome} - {item.exercicios[exercicioId].peso}kg
            </Text>
          ))}
          <TouchableOpacity style={styles.botaoDetalhes} onPress={() => onSelecionarTreino(item)}>
            <Text style={styles.textoBotao}>VER DETALHES</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
);

const TelaDetalhesTreino = ({ treino, onFinalizarTreino, onVoltarHistorico }) => {
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    if (treino && treino.exercicios) {
      const exerciciosFiltrados = Object.keys(treino.exercicios).map((key) => treino.exercicios[key]);
      setExercicios(exerciciosFiltrados);
    }
  }, [treino]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{treino.nome || 'Detalhes do Treino'}</Text>
      <ScrollView>
        <View style={styles.detalhesContainer}>
          <View style={styles.infoGeral}>
            <Text style={styles.subtitulo}>Data:</Text>
            <Text style={styles.texto}>{treino.data}</Text>
          </View>

          <Text style={styles.subtitulo}>Exercícios:</Text>
          {exercicios.length > 0 ? (
            exercicios.map((exercicio, index) => (
              <View key={index} style={styles.cartaoExercicio}>
                <Text style={styles.nomeExercicio}>{exercicio.nome}</Text>
                <Text style={styles.grupoExercicio}>Grupo: {exercicio.grupo}</Text>
                <Text style={styles.detalheExercicio}>Carga: {exercicio.peso}kg</Text>
                <Text style={styles.detalheExercicio}>Séries: {exercicio.series}</Text>
                <Text style={styles.detalheExercicio}>Repetições: {exercicio.repeticoes}</Text>
                {exercicio.url_video && (
                  <Text style={[styles.detalheExercicio, { color: '#1b6fa8' }]}>
                    Vídeo: <Text>{exercicio.url_video}</Text>
                  </Text>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.texto}>Nenhum exercício encontrado.</Text>
          )}
        </View>

        <TouchableOpacity style={[styles.botaoFinalizar, { backgroundColor: '#777' }]} onPress={onVoltarHistorico}>
          <Text style={styles.textoBotao}>VOLTAR AO HISTÓRICO</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


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
  const [historicoTreinos, setHistoricoTreinos] = useState([]);
  const [treinoSelecionado, setTreinoSelecionado] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  useEffect(() => {
    const carregarHistorico = async () => {
      const userId = await AsyncStorage.getItem('userId');
      const dadosHistorico = await fetchHistoricoTreinos(userId);
      if (dadosHistorico) {
        setHistoricoTreinos(dadosHistorico); 
      }
    };
    carregarHistorico();
  }, []);

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

  // Função para voltar ao histórico
  const voltarAoHistorico = () => {
    setTreinoSelecionado(null);
  };

  return (
    <View style={styles.container}>
      {treinoSelecionado ? (
        <TelaDetalhesTreino
          treino={treinoSelecionado}
          onFinalizarTreino={finalizarTreino}
          onVoltarHistorico={voltarAoHistorico}
        />
      ) : (
        <TelaHistoricoTreinos historicoTreinos={historicoTreinos} onSelecionarTreino={selecionarTreino} />
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
  detalhesContainer: {
    marginBottom: 20,
  },
  infoGeral: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
  },
  cartaoExercicio: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  nomeExercicio: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  grupoExercicio: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  detalheExercicio: {
    fontSize: 14,
    color: '#777',
  },
  botaoFinalizar: {
    backgroundColor: '#1b6fa8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
