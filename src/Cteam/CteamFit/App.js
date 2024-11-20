// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Calendario from './Agendamento/Calendario/SeleData';
import Title from './Agendamento/Title/Title';
import SeleHora from './Agendamento/Hora/SeleHora';
import Descricao from './Agendamento/Descricao/Descricao';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState(null);
  const [hora, setHora] = useState(null);
  const [descricao, setDescricao] = useState('');

  const salvarHora = (param) => { setHora(param); };
  const salvarData = (param) => { setData(param); };
  const salvarDescricao = (param) => { setDescricao(param); };

  const handleConfirm = () => {
    Alert.alert('Confirmar', `Data: ${data ? data.toLocaleDateString() : 'N/A'} Hora: ${hora ? hora.toLocaleTimeString() : 'N/A'} Descrição: ${descricao}`);
  };

  return (
    <View style={styles.container}>
      <Title />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f3fe',
    paddingTop: 80,
  },
});
