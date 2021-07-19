import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    height: Dimensions.get('window').height / 3.5,
    backgroundColor: colors.darkRed,
  },
  room_title: {
    fontSize: 25,
    color: 'white',
  },
});
