import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './DoCard.style';

const DoCard = props => {
  const [isDone, setIsDone] = useState(props.doItem.isDone);
  function doHandler() {
    !isDone
      ? props.setStateNumber(props.stateNumber - 1)
      : props.setStateNumber(props.stateNumber + 1);
    setIsDone(!isDone);
    props.doItem.isDone = !props.doItem.isDone;
  }
  return (
    <TouchableOpacity
      onPress={doHandler}
      style={isDone ? styles.container_done : styles.container_do}>
      <Text style={isDone ? styles.text_done : styles.text_do}>
        {props.doItem.text}
      </Text>
    </TouchableOpacity>
  );
};

export default DoCard;
