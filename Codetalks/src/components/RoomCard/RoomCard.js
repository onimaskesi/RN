import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './RoomCard.style';

export default ({room, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onClick(room.id)}>
      <View style={styles.container}>
        <Text style={styles.room_title}>{room.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
