import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  modal: {
    justifyContent: 'flex-end',
  },
  modal_content_container: {
    backgroundColor: colors.orange,
    borderRadius: 10,
  },
});
