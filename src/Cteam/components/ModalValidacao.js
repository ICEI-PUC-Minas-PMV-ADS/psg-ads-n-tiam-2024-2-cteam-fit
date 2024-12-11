import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function ModalValidacao({ mensagem, visible, onClose }) {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.message}>{mensagem}</Text>
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 250,
  },
  message: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
