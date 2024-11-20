import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../Calendario/Style.js';

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
