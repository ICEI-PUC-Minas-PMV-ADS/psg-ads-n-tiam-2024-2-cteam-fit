import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Treinos from './pages/Treinos';
import Execucao from './pages/Execucao';
import Aluno from './pages/telaAluno';
import Historico from './pages/telaHistorico';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Execucao">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Treinos" component={Treinos} />
        <Stack.Screen name="Execucao" component={Execucao} />
        <Stack.Screen name="Aluno" component={Aluno} />
        <Stack.Screen name="Historico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
