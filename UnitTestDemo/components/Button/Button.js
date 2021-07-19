import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './Button.style';

export default function ({title, onClick}) {
  return (
    <TouchableOpacity
      testID="button-touchable"
      style={styles.container}
      onPress={onClick}>
      <Text testID="button-title" style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
