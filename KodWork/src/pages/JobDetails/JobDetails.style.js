import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  header_container: {
    backgroundColor: 'whitesmoke',
  },
  header_title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'dimgray',
    padding: 5,
  },
  header_content: {
    flexDirection: 'row',
  },
  header_content_title: {
    color: 'red',
    padding: 5,
  },
  header_content_body: {
    padding: 5,
    fontWeight: 'bold',
  },
  detail_title: {
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    color: 'dimgray',
  },
  body_container: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
  },
  footer_container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    backgroundColor: 'whitesmoke',
  },
});
