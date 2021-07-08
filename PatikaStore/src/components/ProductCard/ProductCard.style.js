import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  image_container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 6,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  price: {
    color: 'gray',
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  notInStock: {
    color: 'red',
    fontWeight: 'bold',
    margin: 10,
    marginTop: 5,
  },
});
