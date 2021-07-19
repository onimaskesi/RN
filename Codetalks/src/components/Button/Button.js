import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

export default ({onPress, title, iconName, theme = 'primary', disabled}) => {
  const style = disabled ? styles[theme] : styles[`${theme}_active`];

  return (
    <TouchableOpacity
      style={style.container}
      onPress={onPress}
      disabled={disabled}>
      {iconName && (
        <Icon style={style.icon} name={iconName} size={20} color="white" />
      )}
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};
