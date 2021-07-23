import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Dimensions.get('window').height / 2 - 20,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: 'green',
  },
  title: {
    color: 'green',
  },
});
