import {number} from 'prop-types';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

function App() {
  const [counter, setCounter] = useState(0);
  const [btnColor, setBtnColor] = useState('rgb(0,0,0)');

  function increaseCounter() {
    setCounter(counter + 1);
  }
  function decreaseCounter() {
    setCounter(counter - 1);
  }

  function colorButtonPress() {
    let newColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    setBtnColor(newColor);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 255);
  }

  useEffect(() => {
    console.log('Mounting...');
  }, []);

  useEffect(() => {
    console.log('number change to ' + counter);
  }, [counter]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counter}>Counter {counter}</Text>
      <Button title="Increase Counter" onPress={increaseCounter} />
      <Button title="Decrease Counter" onPress={decreaseCounter} />
      <Button
        title="Color Button"
        onPress={colorButtonPress}
        color={btnColor}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'space-around',
    margin: 15,
  },
  counter: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;
