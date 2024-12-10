import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function SeleHora({ salvarHora }) {
  const [time, setTime] = useState(new Date());

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
    salvarHora(currentTime);
  };


  return (
    <View style={styles.Conteiner}>
      <Text style={styles.Titulo}>Selecione a Hora</Text>
      <DateTimePicker
        value={time}
        mode="time"
        display="default"
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    Titulo:{
        fontWeight:"bold",
        fontSize:20,
        alignItems:"center",
        paddingLeft:6,
        paddingRight:15
        },
    Conteiner:{
        flexDirection: 'row',
        backgroundColor:"#bfe4fa",
        alignItems:"center",
        height:55,
        width:390,
        borderRadius:10,
        shadowColor: '#000', 
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.30, 
        shadowRadius: 5.84,
        marginBottom:70
        }
  }
  );
