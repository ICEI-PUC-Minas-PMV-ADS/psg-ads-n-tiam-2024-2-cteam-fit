import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebaseConfig.js';
import { ref, set } from "firebase/database";
import { ScrollView } from 'react-native-gesture-handler';


const Cadastro = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [tipo, setTipo] = React.useState("aluno");

  const register = async () => {
    if (!name || !email || !password || !confirmPassword || !peso || !idade || !altura || !tipo) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
    if (peso < 1 || idade < 1 || altura < 1) {
      alert("Os valores não podem ser negativos.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Escrevendo no Realtime Database
      await set(ref(db, `users/${user.uid}`), {
        name: name,
        email: user.email,
        dados: {
          altura: altura,
          peso: peso,
          idade: idade
        },
        tipo: tipo
      });

      alert("Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao subir documento ao banco: ", error);
      alert(`Erro ao cadastrar: ${error.message}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
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

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text.replace(/\D/g, ''))}
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text.replace(/\D/g, ''))}
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={(text) => setIdade(text.replace(/\D/g, ''))}
      />

      <TextInput
        style={[styles.input, styles.disabledInput]}
        mode="outlined"
        label="Tipo"
        value={tipo}
        editable={false}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
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