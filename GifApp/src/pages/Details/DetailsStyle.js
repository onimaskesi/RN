import {Platform, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  gifContainer: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gif: {
    flex: 1,
    resizeMode: 'contain',
  },
  favContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  bodyContainer: {
    flex: 1,
  },
  usernameContainer: {
    marginTop: 10,
    flex: 1,
  },
  username: {
    color: colors.green,
  },
  gifsContainer: {
    flex: 1,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
