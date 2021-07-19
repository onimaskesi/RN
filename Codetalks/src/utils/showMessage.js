import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from './authErrorMessageParser';

function error(err) {
  let errorMessage =
    typeof err === 'string' ? err : authErrorMessageParser(err);

  showMessage({
    message: errorMessage,
    type: 'danger',
  });
}

function success(txt) {
  showMessage({
    message: txt,
    type: 'success',
  });
}

export default {error, success};
