import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

export default ({title, onPress, isLoading}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    disabled={isLoading}>
    {isLoading ? (
      <ActivityIndicator size="large" color="white" />
    ) : (
      <Text style={styles.title}>{title}</Text>
    )}
  </TouchableOpacity>
);
