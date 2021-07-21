import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

export default function ({title, onClick, theme = 'primary'}) {
  const style = styles[theme];
  return (
    <TouchableOpacity
      testID="button-touchable"
      style={style.container}
      onPress={onClick}>
      <Text testID="button-title" style={style.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
