import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TextInput, Modal, TouchableOpacity } from 'react-native';
import { db } from './firebaseConfig';
import { ref, onValue, remove, update } from 'firebase/database'; 
import { useNavigation } from '@react-navigation/native'; 

export default function TreinosAgendados() {
  const navigation = useNavigation();
  const [agendamentos, setAgendamentos] = useState([]); 
  const [modalVisible, setModalVisible] = useState(false);
  const [agendamentoAtual, setAgendamentoAtual] = useState(null);

  const [dataEdit, setDataEdit] = useState('');
  const [horaEdit, setHoraEdit] = useState('');
  const [descricaoEdit, setDescricaoEdit] = useState('');

  useEffect(() => {
    const agendamentosRef = ref(db, 'agendamento');
    
    // Buscando os dados do Firebase em tempo real
    onValue(agendamentosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const agendamentosArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setAgendamentos(agendamentosArray);
      }
    });
  }, []);

  const excluirAgendamento = (id) => {
    const agendamentoRef = ref(db, `agendamento/${id}`);
    
    remove(agendamentoRef)
      .then(() => {
        Alert.alert('Sucesso', 'Agendamento excluído com sucesso!');
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao excluir o agendamento: ' + error.message);
      });
  };

  const abrirModalEdicao = (agendamento) => {
    setAgendamentoAtual(agendamento);
    setDataEdit(agendamento.data);
    setHoraEdit(agendamento.hora);
    setDescricaoEdit(agendamento.descricao);
    setModalVisible(true);
  };

  const salvarEdicao = () => {
    if (!dataEdit || !horaEdit || !descricaoEdit) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const agendamentoRef = ref(db, `agendamento/${agendamentoAtual.id}`);
    update(agendamentoRef, {
      data: dataEdit,
      hora: horaEdit,
      descricao: descricaoEdit,
    })
      .then(() => {
        Alert.alert('Sucesso', 'Agendamento atualizado com sucesso!');
        setModalVisible(false); 
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao atualizar o agendamento: ' + error.message);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>Data: {item.data}</Text>
      <Text style={styles.texto}>Hora: {item.hora}</Text>
      <Text style={styles.texto}>Descrição: {item.descricao}</Text>
      <View style={styles.actions}>
        <Button 
          title="Editar" 
          onPress={() => abrirModalEdicao(item)} 
          color="#0000a7" 
        />
        <Button 
          title="Excluir" 
          onPress={() => excluirAgendamento(item.id)} 
          color="#920000" 
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treinos agendados</Text>
      <View>
        <Button
        color={"#1c701c"} 
  title="Agendar novo treino" 
  onPress={() => navigation.navigate('AgendaTreino')} 
/>

      </View>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
      />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Agendamento</Text>
            <TextInput
              style={styles.input}
              value={dataEdit}
              onChangeText={setDataEdit}
              placeholder="Data (ex: 12/12/2024)"
            />
            <TextInput
              style={styles.input}
              value={horaEdit}
              onChangeText={setHoraEdit}
              placeholder="Hora (ex: 08:00)"
            />
            <TextInput
              style={styles.input}
              value={descricaoEdit}
              onChangeText={setDescricaoEdit}
              placeholder="Descrição"
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
              <Button title="Salvar" onPress={salvarEdicao} />
            </View>
          </View>
        </View>
      </Modal>
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
    paddingTop:40
  },
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#bfe4fa',
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
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
