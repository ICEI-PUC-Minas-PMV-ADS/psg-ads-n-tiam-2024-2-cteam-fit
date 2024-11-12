import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextField = (props) => {

    const atDigit= (event) => {
        props.atUpdate(event.target.value)

    }

    return (
        <View style={styles.textField}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
                value={props.value}
                onChange={atDigit}
                placeholder={props.placeholder} 
                style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
    },
    input: {
        backgroundColor: '#fdfdfd',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        fontSize: 20,
    }
});

export default TextField;
