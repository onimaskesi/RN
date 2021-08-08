import {StyleSheet} from 'react-native';

export default color => {
  return StyleSheet.create({
    box: {
      height: 70,
      width: 70,
      borderWidth: 2,
      borderColor: color,
      margin: 10,
      borderRadius: 10,
    },
  });
};
