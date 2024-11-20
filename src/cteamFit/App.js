import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/Titulo/'
import CadastroExercicio from './src/pages/CadastroExercicio';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <CadastroExercicio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
});
