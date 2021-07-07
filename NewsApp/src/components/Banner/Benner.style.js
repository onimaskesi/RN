import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    margin: 3,
    borderRadius: 10,
  },
});
