import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image_container: {
    borderWidth: 2,
    borderColor: '#26c6da',
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'contain',
  },
  info_container: {
    flex: 1,
  },
  title: {
    margin: 15,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    margin: 15,
    fontStyle: 'italic',
    fontSize: 16,
  },
  price_container: {},
  price: {
    margin: 15,
    textAlign: 'right',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
