import {StyleSheet} from 'react-native';

export default {
  primary: StyleSheet.create({
    container: {
      padding: 10,
      margin: 10,
      backgroundColor: 'blue',
      borderRadius: 10,
    },
    title: {
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      padding: 10,
      margin: 10,
      borderColor: 'blue',
      borderWidth: 2,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    title: {
      color: 'blue',
    },
  }),
};
