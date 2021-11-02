import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  //Declare new state variables

  //Variable for a random number between 1-100
  const [guessnumber, setGuessNumber] = useState(Math.floor(Math.random() * 100) + 1);

  //Number guessed by user, input
  const [guess, setGuess] =  useState(0);

  //Counter variable for times guessed, starting from 0
  const [counter, setCounter] = useState(0);

  //Changing greeting depending on, what user guesses
  const [greeting, setGreeting] = useState('Guess a number between 1-100');

  const buttonPressed = (operator) => {
    console.log(counter, guessnumber, guess);
    const [randomNumber, userGuess] = [Number(guessnumber), Number(guess)]  
    if (guessnumber > guess) {
      setGreeting('Your guess ' + guess + ' is too low');
      setCounter(counter+1);
    } else if (guessnumber < guess) {
      setGreeting('Your guess ' + guess + ' is too high');
      setCounter(counter+1);
    } else {
        Alert.alert('You guessed the number ' + counter + ' times');
    }
  }

  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <TextInput
          style={{width:100, borderColor:'grey', borderWidth:1}}
          setGuess={() => setGuess(guess)}
          value={guess}
          onChangeText={e => setGuess(e)}
          placeholder=" 1-100"
          keyboardType="numeric"
        />

        <Button onPress={() => buttonPressed()} title="MAKE GUESS"></Button>
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
});
