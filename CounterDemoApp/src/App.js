import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from './components/Button/Button';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counterFontSize, setCounterFontSize] = useState(20);

  const addCounter = () => {
    setCounterFontSize(counterFontSize + 1);
    setCounter(counter + 1);
  };

  const styles = getStyles(counterFontSize);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to The Counter App!</Text>
      <Text style={styles.counterStyle}>{counter}</Text>
      <Button title="+" onPress={addCounter} />
    </SafeAreaView>
  );
};

export default App;

const baseStyle = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    margin: 15,
    alignSelf: 'center',
  },
});

const getStyles = counterFontSize =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'space-around',
    },
    title: {
      ...baseStyle.text,
    },
    counterStyle: {
      ...baseStyle.text,
      fontSize: counterFontSize,
    },
  });
