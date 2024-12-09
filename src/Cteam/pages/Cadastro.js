import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from './firebaseConfig.js';

const Cadastro = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const register = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }
    if (password !== confirmPassword) {
      alert("A senha deve ser a mesma");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid),
   {
        name: name,
        email: user.email,
      });

      alert("Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao subir documento ao banco: ", error);
      alert(`Erro ao cadastrar: ${error.message}`);
    }
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
        onPress={register}
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

export default Cadastro;