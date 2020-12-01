import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if(count > 0){
      setCount(count - 1);
    }else{
      alert("Reached 0!")
    }
  }

  function reset() {
    setCount(0);
  }

  function renderEncourageingText() {
    if (count>=10 && count <20) {
      return "You reached 10, Keep Going!";
    }else if (count>=20 && count <30) {
      return "You reached 20, Keep Going!";
    }else if (count>=30) {
      return "You reached 30, Keep Going!";
    }else{
      return "Start pressing!";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.textEncourageing}> {renderEncourageingText()} </Text>
      <Text></Text>
      <TouchableOpacity onPress={increment} style={styles.button}><Text style={styles.buttonText}>Increment</Text></TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={decrement} style={styles.button}><Text style={styles.buttonText}>Decrement</Text></TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={reset} style={styles.button}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 100,
  },

  textEncourageing: {
    fontSize: 20,
    color: 'red',
  },

  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  },
  
  buttonText: {
    fontSize: 20,
    color: 'blue',
  }, 
});
