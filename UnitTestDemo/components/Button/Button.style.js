import {StyleSheet} from 'react-native';

const base = {
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {},
};

export default {
  primary: StyleSheet.create({
    ...base,
    container: {
      ...base.container,
      backgroundColor: 'blue',
    },
    title: {
      ...base.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base,
    container: {
      ...base.container,
      borderColor: 'blue',
      borderWidth: 2,
      backgroundColor: 'white',
    },
    title: {
      ...base.title,
      color: 'blue',
    },
  }),
};
