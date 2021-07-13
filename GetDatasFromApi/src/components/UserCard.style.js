import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#e0e0e0',
  },
  userName: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerContainer: {
    flexDirection: 'row',
    margin: 3,
    alignItems: 'center',
  },
  name: {
    margin: 5,
  },
  email: {
    margin: 5,
    fontStyle: 'italic',
    fontSize: 12,
  },
});
