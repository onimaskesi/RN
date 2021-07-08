import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
    padding: 2,
    height: Dimensions.get('window').height / 18,
    justifyContent: 'center',
  },
  input: {
    fontSize: 13,
    marginLeft: 10,
  },
});
