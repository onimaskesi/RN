import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 5,
    margin: 5,
    backgroundColor: 'black',
    width: Dimensions.get('window').width / 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
