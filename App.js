import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

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
      <Button title='Increment' onPress={increment}></Button>
      <Button title='Decrement' onPress={decrement}></Button>
      <Button title='Reset!' onPress={reset}></Button>
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
    fontSize: 20,
  },
});
