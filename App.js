import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);

  function increment() {
    setPreviousCount(count);
    setCount(count + 1);
  }

  function decrement() {
    if (count >= 2) {
      setPreviousCount(count);
      setCount(count - 2);
    } else {
      setPreviousCount(count);
      setCount(0);
    }
  }

  function reset() {
    setCount(0);
    setPreviousCount(0);
    return "Start clicking!";
  }

  function renderEncourageingText() {
    if (previousCount > count) {
      return "Decrement clicked!";
    }

    if (count>=10 && count <20) {
      return "You reached 10, Keep Going!";
    }else if (count>=20 && count <30) {
      return "You reached 20, Keep Going!";
    }else if (count>=30) {
      return "You reached 30, Keep Going!";
    }else if (count == 0) {
      return "Start clicking!";
    }else{
      return "Continue clicking!";
    }
  }

  function screenTouch() {
    increment();
  }

  return (
    <View style={styles.container} onTouchStart={() => screenTouch()}>
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.textEncourageing}> {renderEncourageingText()} </Text>
      <Text></Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Increment</Text></TouchableOpacity>
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
    fontSize: 200,
  },

  textEncourageing: {
    fontSize: 20,
    color: 'red',
  },

  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 15,
  },
  
  buttonText: {
    fontSize: 20,
    color: 'blue',
  }, 
});
