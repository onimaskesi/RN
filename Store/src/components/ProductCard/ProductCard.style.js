import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#26c6da',
    flexDirection: 'row',
  },
  image: {
    width: Dimensions.get('screen').width / 4,
    minHeight: Dimensions.get('screen').width / 4,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 5,
  },
  title: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
