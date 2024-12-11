import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform, TouchableWithoutFeedback } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SeleData({ salvarData }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'android') setShowPicker(false);
    setDate(currentDate);
    salvarData(currentDate);
  };

  if (Platform.OS === 'ios') {
    return (
      <View style={styles.DateBoxiphone}>
        <Text style={styles.Title}>Selecione a data</Text>
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <TouchableWithoutFeedback onPress={() => setShowPicker(true)}>
        <View style={styles.DateBox}>
          <Text style={styles.Title}>Selecione a data</Text>
          <Text style={styles.DateText}>
            {date.toLocaleDateString()}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
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
  DateText: {
    fontSize: 14,
    color: "#000",
  },
  Container: {
    alignItems: "center",
    marginBottom: 20,
  },
  DateBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2e73b6",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  DateBoxiphone: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2e73b6",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
});
