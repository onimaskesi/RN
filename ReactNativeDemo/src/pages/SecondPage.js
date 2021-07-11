import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

function SecondPage(props) {
  const userName = props.route.params.userName;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Second Screen {userName}</Text>
    </SafeAreaView>
  );
}

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
