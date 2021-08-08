import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  titleConteiner: {
    margin: 10,
    marginTop: Platform.OS === 'ios' ? 50 : 10,
    flex: 1,
    borderWidth: 5,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
  },
  bodyContainer: {
    flex: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {},
  footerConteiner: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});
