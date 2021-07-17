import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    padding: 5,
    borderColor: '#e0e0e0',
    borderWidth: 2,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 2,
  },
  company: {
    fontStyle: 'italic',
    margin: 2,
  },
  location_container: {
    marginTop: 2,
    alignItems: 'flex-start',
  },
  location: {
    backgroundColor: '#ef5451',
    color: 'white',
    borderRadius: 10,
    padding: 3,
    paddingStart: 5,
    paddingEnd: 5,
    fontWeight: 'bold',
  },
  level: {
    color: '#ef5451',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
