import React, {useState} from 'react';
import {
  TextInput,
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';

function FirstPage(props) {
  const [userName, setUserName] = useState('');

  function navigateToSecondPageWithUserName() {
    props.navigation.navigate('SecondScreen', {userName: userName});
  }

  function inputChange(value) {
    setUserName(value);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello Word from First Page</Text>
      <TextInput
        style={styles.input}
        value={userName}
        placeholder="What is your name?"
        onChangeText={inputChange}
      />
      <Button
        title="Go to The Second Screen"
        onPress={navigateToSecondPageWithUserName}
      />
    </SafeAreaView>
  );
}

export default FirstPage;

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
    margin: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    padding: 10,
    margin: 10,
  },
});
