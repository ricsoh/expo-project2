import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CounterText(props) {
    return (
        <Text style={[styles.CounterText, {color: props.color, fontSize: props.fontSize}]}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    CounterText: { fontWeight: 'bold',}
})