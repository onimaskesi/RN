import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

export default ({onPress, title, iconName}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.inner_container}>
        <Icon style={styles.icon} name={iconName} size={20} color="white" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
