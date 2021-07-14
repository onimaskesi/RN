import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 4,
    margin: 5,
  },
  image_style: {
    borderRadius: 10,
  },
  title_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
