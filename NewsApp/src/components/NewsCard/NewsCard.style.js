import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 5,
  },
  desc: {
    fontSize: 13,
    margin: 10,
    marginTop: 5,
  },
  author: {
    fontStyle: 'italic',
    alignItems: 'flex-end',
    textAlign: 'right',
    margin: 5,
    marginTop: 0,
  },
});
