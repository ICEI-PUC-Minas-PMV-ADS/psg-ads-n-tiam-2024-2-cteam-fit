import React, { useState } from 'react';
import { View, Text} from 'react-native';
import styles from './Style'

export default function Title(){
    return(
        <View style={styles.Conteiner}>
            <Text style={styles.Texto} >Agendamento de treino</Text>
        </View>
    )
}