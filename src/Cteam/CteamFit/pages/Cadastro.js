import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import { firebase } from '../../firebase/config'

export default function Cadastro({navigation}) {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const register = () => {
    if (password !== confirmPassword) {
      alert("As senhas não são iguais.")
      return
    }
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                fullName,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    navigation.navigate('Treinos', {user: data})
                })
                .catch((error) => {
                    alert(error)
                });
        })
        .catch((error) => {
            alert(error)
    });
    navigation.navigate('Treinos'); // Redireciona para a página de treinos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>cteam-fit</Text>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Crie uma senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Confirme a senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <Button
        mode="contained"
        style={styles.button}
        onPress = {() => register()}
      >
        Cadastrar
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já possui conta? Faça o Login</Text>
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

