import React, {useState} from 'react';
import {TextInput, TouchableWithoutFeedback, View} from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

function Input({
  placeholder,
  value,
  onChangeText,
  isSecure,
  iconName,
  multiline,
}) {
  const secureIconName = isSecure && 'eye-off';
  iconName = !iconName && secureIconName;

  const [isHiddenText, setIsHiddenText] = useState(isSecure);
  const [iconNameState, setIconNameState] = useState(iconName);
  const iconTouchHandler = () => {
    isHiddenText ? setIconNameState('eye') : setIconNameState('eye-off');
    setIsHiddenText(!isHiddenText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder={placeholder}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isHiddenText}
      />
      <TouchableWithoutFeedback onPress={iconTouchHandler}>
        <View style={styles.icon_container}>
          <Icon name={iconNameState} size={20} color={colors.darkGreen} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Input;
