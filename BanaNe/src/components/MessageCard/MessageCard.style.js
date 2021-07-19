import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.green,
    borderColor: colors.darkGreen,
    borderBottomWidth: 3,
    borderBottomColor: colors.darkGreen,
    borderRightWidth: 3,
    borderRightColor: colors.darkGreen,
  },
  title_container: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  username: {
    flex: 1,
    color: colors.ultraDarkGreen,
    fontWeight: 'bold',
  },
  date: {
    fontStyle: 'italic',
    color: colors.lightGreen,
    fontSize: 13,
  },
  text_container: {},
  text: {
    color: colors.ultraDarkGreen,
    fontSize: 16,
  },
});
