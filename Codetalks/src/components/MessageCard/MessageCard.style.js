import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.yellow,
    borderColor: colors.brown,
    borderBottomWidth: 3,
    borderBottomColor: colors.brown,
    borderRightWidth: 3,
    borderRightColor: colors.brown,
  },
  title_container: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  username: {
    flex: 1,
    color: colors.superDarkRed,
    fontWeight: 'bold',
  },
  date: {
    fontStyle: 'italic',
    color: colors.lightOrange,
    fontSize: 13,
  },
  text_container: {},
  text: {
    color: colors.superDarkRed,
    fontSize: 16,
  },
});
