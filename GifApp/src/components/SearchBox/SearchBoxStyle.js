import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: {
    fontSize: 13,
    marginLeft: 10,
    color: colors.green,
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    borderColor: colors.blue,
    borderWidth: 2,
  },
});
