import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import TextField from './Components/textField'


function App() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')



  return (
    
    <View>
      <Text>Login</Text>
      <TextField 
        label="Email" 
        placeholder="email@example.com"
        value={email}
        atUpdate={value => setEmail(value)}
        />
      <TextField 
        label="Senha" 
        placeholder="senha"
        value={senha}
        atUpdate={value => setSenha(value)}
      />
      <Button 
          title="Login" 
        />
        <Text>Email: {email}</Text>
        
    </View>
  )
}

export default App;
