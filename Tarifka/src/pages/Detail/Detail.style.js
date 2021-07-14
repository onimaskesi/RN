import {Dimensions, StyleSheet} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

export default StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 2.5,
  },
  title_container: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  name: {
    color: 'brown',
    fontSize: 25,
    fontWeight: 'bold',
  },
  area: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 18,
  },
  instructions_container: {
    padding: 10,
  },
  instructions: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  button_text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
