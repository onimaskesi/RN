import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 5,
  },
  inner_container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  info_container: {
    flexDirection: 'row',
  },
  info_inner_container: {
    flex: 1,
    flexDirection: 'row',
  },
  artist: {
    margin: 5,
  },
  year: {
    fontSize: 12,
    color: 'gray',
    margin: 5,
  },
  soldOut_container: {
    borderWidth: 2,
    padding: 4,
    borderColor: 'red',
    borderRadius: 7,
    justifyContent: 'center',
  },
  soldOut_title: {
    color: 'red',
    fontSize: 12,
    padding: 5,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 7,
  },
});
