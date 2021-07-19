import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.green,
  },
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  input_container: {
    paddingBottom: 10,
  },
  button_container: {
    paddingTop: 10,
  },
});
