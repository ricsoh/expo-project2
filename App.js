import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import CounterText from './components/CounterText';

export default function App() {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);
  var btnPressed = 0;
  
  function increment() {
    setPreviousCount(count);
    setCount(count + 1);
    btnPressed = 1;
  }

  function decrement() {
    if(count >= 1) {
      setPreviousCount(count);
      setCount(count - 1);
      }else {
        setPreviousCount(0);
        setCount(0);
      }
      btnPressed = 1;
    }

  function reset() {
    setCount(0);
    setPreviousCount(0);
    btnPressed = 1;
    renderEncourageingText();
  }

  function screenTouch() {
    if (btnPressed == 0) {
      setPreviousCount(count);
      setCount(count + 1);
      }else {
        btnPressed = 0;
    } 
  }

  function renderEncourageingText() {
    if (previousCount > count) {
      return "Hey! Wrong way dude!";
    }

    if (count>=10 && count <20) {
      return "Great Job! Keep going above 10!";
    }else if (count>=20 && count <30) {
      return "Great Job! Keep going above 20!";
    }else if (count>=30) {
      return "Great Job! Keep going above 30!";
    }else if (count == 0) {
      return "Start clicking!";
    }else{
      return "Continue clicking!";
    }
  }

  return (
    <View style={styles.container} onTouchEnd={() => screenTouch()}>
      <CounterText fontSize={30} marginBottom={30} color='lightgray'> {count} </CounterText>
      <CounterText fontSize={60} marginBottom={20} color='gray'> {count} </CounterText>
      <CounterText fontSize={120} color='black'> {count} </CounterText>
      <Text style={styles.textEncourageing}> {renderEncourageingText()} </Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Increment</Text></TouchableOpacity>
      <TouchableOpacity onPress={decrement} style={styles.button}><Text style={styles.buttonText}>Decrement</Text></TouchableOpacity>
      <TouchableOpacity onPress={reset} style={styles.button}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
      <Text style={styles.textInstruction}>You may click anywhere on the screen to increase the counter!</Text>
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
    fontSize: 150,
    fontWeight: 'bold',
  },

  textEncourageing: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },

  textInstruction: {
    fontSize: 10,
    marginTop: 20,
  },

  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'gray',
    width: 160,
    marginTop: 20,
  },
  
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  }, 
});
