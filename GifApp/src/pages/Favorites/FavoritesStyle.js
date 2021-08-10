import {Platform, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.backgroundColor,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
  },
});
