import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import TextField from './Components/textField'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
  
    const atSave = (evento) => {
        evento.preventDefault()
        props.atColabCreated({
            email,
            senha,
        })
    }
  
  
    return (
      
      <View>
        <Text>Login</Text>
        <TextField 
          obrigatorio={true} 
          label="Email" 
          placeholder="email@example.com"
          value={email}
          atUpdate={value => setEmail(value)}
          />
        <TextField 
          obrigatorio={true} 
          label="Senha" 
          placeholder="senha"
          value={senha}
          atUpdate={value => setSenha(value)}
        />
        <Button 
          title="Login" 
          onPress={atSave} 
        />
        <Text>Email: {email}</Text>
      </View>
    )
}



export default App;
