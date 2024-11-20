import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Subtitulo(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Descrição</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    }
  });
  