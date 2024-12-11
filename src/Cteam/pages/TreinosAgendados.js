import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import { db } from './firebaseConfig'; // Importando o db do seu firebase
import { ref, onValue, remove } from 'firebase/database'; // Usando o Firebase Realtime Database

export default function TreinosAgendados() {
  const [agendamentos, setAgendamentos] = useState([]); // Armazenar agendamentos no estado

  useEffect(() => {
    // Referência ao nó de agendamentos no Firebase
    const agendamentosRef = ref(db, 'agendamento');
    
    // Buscando os dados do Firebase em tempo real
    onValue(agendamentosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convertendo o objeto para um array para usar com o FlatList
        const agendamentosArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setAgendamentos(agendamentosArray);
      } else {
        Alert.alert('Sem agendamentos', 'Não há agendamentos disponíveis.');
      }
    });

    // Limpeza do listener quando o componente for desmontado
    return () => {
      // Adicionar cleanup de listener aqui se necessário
    };
  }, []);

  // Função para excluir um agendamento
  const excluirAgendamento = (id) => {
    const agendamentoRef = ref(db, `agendamento/${id}`);
    
    // Remover o agendamento do Firebase
    remove(agendamentoRef)
      .then(() => {
        Alert.alert('Sucesso', 'Agendamento excluído com sucesso!');
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao excluir o agendamento: ' + error.message);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>Data: {item.data}</Text>
      <Text style={styles.texto}>Hora: {item.hora}</Text>
      <Text style={styles.texto}>Descrição: {item.descricao}</Text>
      <Button 
        title="Excluir" 
        onPress={() => excluirAgendamento(item.id)} 
        color="red" 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos de Treinos</Text>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f3fe',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});
