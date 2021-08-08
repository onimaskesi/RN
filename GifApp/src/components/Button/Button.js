import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ButtonStyle';

export default ({onClick, title}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
