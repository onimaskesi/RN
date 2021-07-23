import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import strings from '../../strings';
import styles from './Loading.style';

export default () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color="green" />
      <Text style={styles.title}>{strings.loading}</Text>
    </View>
  );
};
