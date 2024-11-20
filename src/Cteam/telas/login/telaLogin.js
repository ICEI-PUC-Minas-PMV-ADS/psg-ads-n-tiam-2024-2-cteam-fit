import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';


const Login = () => {
  const navigation = useNavigation();
  const [userMail, setUserMail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const login = () => {
    return null;
  }

  return(

      <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email de usuário"
        keyboardType="email"
        value={userMail}
        onChangeText={(text) => setUserMail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="text"
        value={userPassword}
        onChangeText={(text) => setUserPassword(text)}
      />

      <Button title="Entrar" onPress={login} />


    </View>
  );


}
