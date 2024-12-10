import React, { useState } from 'react';
import {StyleSheet, View, Text} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SeleData({ salvarData }) {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    salvarData(currentDate);
  };

  return (
    <View style={styles.Conteiner}>
      <Text style={styles.Titulo}>Selecione a data</Text>
      <DateTimePicker
        value={date}
        mode="date"
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
