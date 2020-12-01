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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
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
