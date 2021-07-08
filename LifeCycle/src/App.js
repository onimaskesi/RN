import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Switch, View, StyleSheet} from 'react-native';

function App() {
  const [switchValue, setSwitchValue] = useState(false);
  function switchValueChange(value) {
    setSwitchValue(value);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Switch
        style={styles.switch}
        value={switchValue}
        onValueChange={switchValueChange}
      />
      {switchValue && <Hello />}
    </SafeAreaView>
  );
}

export default App;

function Hello() {
  useEffect(() => {
    console.log('Hi bro!');

    return () => {
      console.log('Bye bro!');
    };
  }, []);

  return (
    <View>
      <Text style={styles.helloText}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
  },
  switch: {
    margin: 20,
  },
  helloText: {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
