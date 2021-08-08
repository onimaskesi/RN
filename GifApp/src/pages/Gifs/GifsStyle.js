import {Platform, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'ios' ? 70 : 10,
    paddingBottom: Platform.OS === 'ios' ? 50 : 0,
  },
  gifList: {
    flex: 1,
  },
  title: {
    margin: 10,
    color: colors.pink,
  },
});
