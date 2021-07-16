import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Input({placeholder, value, onChangeText, isSecure, iconName}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      <View style={styles.icon_container}>
        <Icon name={iconName} size={25} color="#0095a8" />
      </View>
    </View>
  );
}

export default Input;
