import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Aluno from './pages/Aluno';
import Login from './pages/Login'
import AgendaTreino from './pages/AgendaTreino';
import Cadastro from './pages/Cadastro'
import Historico from './pages/Historico';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1b6fa8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="AgendaTreino" component={AgendaTreino} />

        <Stack.Screen
          name="Aluno"
          component={Aluno} // A tela de aluno
          options={({ navigation }) => ({
            title: 'Treinos',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Historico')} // Navegar para a tela de Histórico
                title="Histórico"
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Historico"
          component={Historico} // A tela de histórico
          options={({ navigation }) => ({
            title: 'Histórico de Treinos',
            headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()} // Voltar para a tela anterior (Aluno)
                title="Voltar"
                color="#fff"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
});
