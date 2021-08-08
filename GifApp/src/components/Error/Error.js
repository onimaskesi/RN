import React from 'react';
import {Text, View} from 'react-native';
import styles from './ErrorStyle';

const Exclamation = () => <Text style={styles.exclamation}>!</Text>;

export default ({errorMessage = 'Error'}) => {
  return (
    <View style={styles.container}>
      <Exclamation />
      <Text style={styles.message}>{errorMessage}</Text>
      <Exclamation />
    </View>
  );
};
