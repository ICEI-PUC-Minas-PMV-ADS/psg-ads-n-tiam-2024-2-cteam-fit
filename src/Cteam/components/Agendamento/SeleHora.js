import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform, TouchableWithoutFeedback } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SeleHora({ salvarHora }) {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    if (Platform.OS === 'android') setShowPicker(false); // Fecha o picker no Android
    setTime(currentTime);
    salvarHora(currentTime);
  };

  if (Platform.OS === 'ios') {
    return (
      <View style={styles.Container}>
        <View style={styles.TimeBoxiphone}>
        <Text style={styles.Title}>Selecione a hora</Text>
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChange}
        />
        </View>
        
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={() => setShowPicker(true)}>
        <View style={styles.TimeBox}>
          <Text style={styles.Title}>Selecione a hora</Text>
          <Text style={styles.TimeText}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  TimeText: {
    fontSize: 14,
    color: "#000",
  },
  Container: {
    alignItems: "center",
    marginBottom: 20,
  },
  TimeBoxiphone: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2e73b6",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop:30
  },
  TimeBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2e73b6",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop:30
  },
});
