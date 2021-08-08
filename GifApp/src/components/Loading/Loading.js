import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './LoadingStyle';

export default () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={20} color="red" />
      <ActivityIndicator size={30} color="green" />
      <ActivityIndicator size={20} color="blue" />
      <ActivityIndicator size={30} color="purple" />
    </View>
  );
};
