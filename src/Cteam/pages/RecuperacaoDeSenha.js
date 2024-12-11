import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const RecuperacaoDeSenha = () => {
  const [userMail, setUserMail] = useState("");
  const navigation = useNavigation();
  const auth = getAuth();

  const handlePasswordReset = async () => {
    if (!userMail) {
      alert("Por favor, insira seu e-mail.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, userMail);
      alert("E-mail de recuperação enviado! Verifique sua caixa de entrada.");
      navigation.goBack(); // Retorna para a tela de login
    } catch (error) {
      console.error("Erro ao enviar e-mail de recuperação: ", error);
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de Senha</Text>

      <TextInput
        style={styles.input}
        mode="outlined"
        label="E-mail"
        value={userMail}
        onChangeText={(text) => setUserMail(text)}
      />

      <Button
        mode="contained"
        style={styles.button}
        onPress={handlePasswordReset}
      >
        Enviar e-mail de recuperação
      </Button>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Voltar para Login</Text>
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

export default RecuperacaoDeSenha;
