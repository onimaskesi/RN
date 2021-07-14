import {StyleSheet, Dimensions} from 'react-native';

const imageSize = Dimensions.get('window').width / 4;

export default StyleSheet.create({
  container: {
    paddingLeft: 15,
    flexDirection: 'row',
    backgroundColor: '#eceff1',
    margin: 5,
    borderTopLeftRadius: imageSize / 2,
    borderBottomLeftRadius: imageSize / 2,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: imageSize,
    height: imageSize,
  },
  title: {
    fontSize: 20,
    padding: 10,
  },
});
