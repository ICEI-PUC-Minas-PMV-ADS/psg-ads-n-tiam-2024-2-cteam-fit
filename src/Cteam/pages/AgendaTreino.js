import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import Calendario from '../components/Agendamento/SeleData';
import SeleHora from '../components/Agendamento/SeleHora';
import Descricao from '../components/Agendamento/Descricao';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { auth, db } from './firebaseConfig'; // Importando o db de firebaseConfig
import { ref, push } from "firebase/database"; // Certificando-se de importar o push

export default function AgendaTreino() { 
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [hora, setHora] = useState(null);
  const [descricao, setDescricao] = useState('');

  const salvarHora = (param) => { setHora(param); };
  const salvarData = (param) => { setData(param); };
  const salvarDescricao = (param) => { setDescricao(param); };

  const handleConfirm = () => {
    if (!data || !hora || !descricao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Criando o objeto de agendamento
    const novoAgendamento = {
      data: data.toLocaleDateString(), // Formata a data para o formato 'DD/MM/YYYY'
      hora: hora.toLocaleTimeString(), // Formata a hora para 'HH:mm'
      descricao: descricao,
    };

    // Referência ao nó de agendamentos no Firebase
    const agendamentosRef = ref(db, 'agendamento'); // Usando o 'db' importado de firebaseConfig

    // Salvando o novo agendamento no Firebase
    push(agendamentosRef, novoAgendamento)
      .then(() => {
        Alert.alert('Sucesso', 'Agendamento salvo com sucesso!');
        // Redireciona para a página de agendamentos, por exemplo
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao salvar o agendamento: ' + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <Text style={styles.Texto}>Agendamento de treino</Text>
      </View>   
      <View>
        <Calendario salvarData={salvarData} />
      </View>
      <View>
        <SeleHora salvarHora={salvarHora} />
      </View>
      <View>
        <Descricao salvarDescricao={salvarDescricao} />
      </View>
      <Button title="Confirmar" onPress={handleConfirm} />
      <View style={styles.naviga}>
      <TouchableOpacity onPress={() => navigation.navigate('TreinosAgendados')}>
        <Text style={styles.link}>Ver treinos já agendados</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f3fe',
    paddingTop: 50,
    paddingLeft:1,
    paddingRight:1,
    
  },
  Texto: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 30,
    height: "auto",
    alignItems:"center"
  },
  title:{
    alignItems:"center",
    marginBottom:40,
    marginTop:0
  },
  naviga:{
    alignItems:"center",
    marginTop:100
  }
});
