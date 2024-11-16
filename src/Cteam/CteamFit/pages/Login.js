import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';

const Login = () => {
  const navigation = useNavigation();
  const [userMail, setUserMail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const login = () => {
    navigation.navigate('Treinos'); // Redireciona para a página de treinos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>cteam-fit</Text>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        mode="outlined"
        label="e-mail"
        value={userMail}
        onChangeText={(text) => setUserMail(text)}
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="senha"
        secureTextEntry
        value={userPassword}
        onChangeText={(text) => setUserPassword(text)}
      />

      <Button
        mode="contained"
        style={styles.button}
        onPress={login}
      >
        Entrar
      </Button>

      <TouchableOpacity onPress={() => alert("Recuperação de senha ainda não implementada.")}>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não possui conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    marginVertical: 10,
  },
  link: {
    color: '#0000EE',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Login;
