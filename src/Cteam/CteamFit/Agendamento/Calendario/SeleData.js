import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './Style.js';

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
