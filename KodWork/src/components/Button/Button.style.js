import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 3,
    backgroundColor: '#ef5451',
    borderRadius: 10,
  },
  icon: {
    margin: 5,
  },
  title: {
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});
