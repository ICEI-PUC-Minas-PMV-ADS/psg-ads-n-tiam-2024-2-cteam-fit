import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Aluno from './pages/Aluno';
import Login from './pages/Login';
import AgendaTreino from './pages/AgendaTreino';
import Cadastro from './pages/Cadastro';
import Historico from './pages/Historico';
import TreinosAgendados from './pages/TreinosAgendados';
import RecuperacaoDeSenha from './pages/RecuperacaoDeSenha';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CadastroExercicio from './pages/CadastroExercicio'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

// Componente da Navbar Inferior
function BottomNavbar({ navigation }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Aluno')}>
        <Icon name="dumbbell" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Historico')}>
        <Icon name="history" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AgendaTreino')}>
        <Icon name="calendar" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CadastroExercicio')}>
        <AntDesign name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

// Componente Wrapper para Telas com Navbar
function ScreenWithNavbar({ children, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <BottomNavbar navigation={navigation} />
    </View>
  );
}

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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="RecuperacaoDeSenha" component={RecuperacaoDeSenha} />
        <Stack.Screen
          name="Aluno"
          options={({ navigation }) => ({
            title: 'Aluno',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('Login')}
              >
                <SimpleLineIcons name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
          component={(props) => (
            <ScreenWithNavbar navigation={props.navigation}>
              <Aluno {...props} />
            </ScreenWithNavbar>
          )}
        />
        <Stack.Screen
          name="CadastroExercicio"
          options={({ navigation }) => ({
            title: 'CadastroExercicio',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('CadastroExercicio')}
              >
                <SimpleLineIcons name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
          component={(props) => (
            <ScreenWithNavbar navigation={props.navigation}>
              <CadastroExercicio {...props} />
            </ScreenWithNavbar>
          )}
        />

        <Stack.Screen
          name="AgendaTreino"
          options={({ navigation }) => ({
            title: 'Agenda de Treinos',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('Login')}
              >
                <SimpleLineIcons name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
          component={(props) => (
            <ScreenWithNavbar navigation={props.navigation}>
              <AgendaTreino {...props} />
            </ScreenWithNavbar>
          )}
        />
        <Stack.Screen
          name="TreinosAgendados"
          options={({ navigation }) => ({
            title: 'Treinos Agendados',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('Login')}
              >
                <SimpleLineIcons name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
          component={(props) => (
            <ScreenWithNavbar navigation={props.navigation}>
              <TreinosAgendados {...props} />
            </ScreenWithNavbar>
          )}
        />
        <Stack.Screen
          name="Historico"
          options={({ navigation }) => ({
            title: 'Histórico',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('Login')}
              >
                <SimpleLineIcons name="logout" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
          component={(props) => (
            <ScreenWithNavbar navigation={props.navigation}>
              <Historico {...props} />
            </ScreenWithNavbar>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1b6fa8',
    padding: 10,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navbarText: {
    fontSize: 24,
    color: '#fff',
  },
  headerButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  headerButtonText: {
    color: '#1b6fa8',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
