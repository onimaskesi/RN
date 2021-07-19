import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.superDarkGreen,
  },
  btn_container: {
    backgroundColor: colors.superDarkGreen,
  },
  modal: {
    justifyContent: 'flex-end',
  },
  modal_content_container: {
    backgroundColor: colors.green,
    borderRadius: 5,
  },
});
