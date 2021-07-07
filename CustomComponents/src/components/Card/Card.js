import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Card.style';

const Card = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.button_container}
        onPress={() => Alert.alert(`Hello from ${props.title}`)}>
        <Text style={styles.button_title}>Like</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
