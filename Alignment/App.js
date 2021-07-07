import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxes}>
        <View style={styles.box_1} />
        <View style={styles.box_2} />
        <View style={styles.box_3} />
        <View style={styles.box_4} />
      </View>
      <Button
        title="Press Me!"
        onPress={() => {
          console.log('Selam!');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  boxes: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  box_1: {
    height: 75,
    width: 75,
    backgroundColor: 'red',
  },
  box_2: {
    height: 75,
    width: 75,
    backgroundColor: 'blue',
  },
  box_3: {
    height: 75,
    width: 75,
    backgroundColor: 'green',
  },
  box_4: {
    height: 75,
    width: 75,
    backgroundColor: 'orange',
  },
});

export default App;
