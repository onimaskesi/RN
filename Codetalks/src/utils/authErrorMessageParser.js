import strings from '../strings';

export default error => {
  switch (error.code) {
    case 'auth/invalid-email':
      return strings.invalidEmail;

    case 'auth/weak-password':
      return strings.weakPassword;

    case 'auth/email-already-in-use':
      return strings.emailAlreadyInUse;

    case 'auth/user-not-found':
      return strings.userNotFound;

    case 'auth/wrong-password':
      return strings.wrongPassword;

    default:
      return error.code;
  }
};
