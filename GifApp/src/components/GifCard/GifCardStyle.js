import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  gif: {
    height: 100,
  },
});

const style = color => {
  return StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      borderColor: color,
    },
  });
};

export default style;
