import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CounterText(props) {
    return (
        <Text style={[styles.CounterText, {color: props.color, marginBottom: props.marginBottom, fontSize: props.fontSize}]}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    CounterText: { fontWeight: 'bold',}
})