import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function ModalValidacao(props) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Cadastrar" onPress={() => {
            setVisible(true); 
        }} />
      
      <Modal
        visible={visible}
        transparent={true}
        animationType="none" 
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text>{props.mensagem}</Text>
            <Button title="Fechar" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modal: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});