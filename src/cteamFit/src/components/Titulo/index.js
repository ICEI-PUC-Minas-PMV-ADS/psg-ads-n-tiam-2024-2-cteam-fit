import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Titulo(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Cadastrar Exercício</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    }
  });
  