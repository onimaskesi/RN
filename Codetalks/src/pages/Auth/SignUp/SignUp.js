import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button';
import styles from './SignUp.style';
import strings from '../../../strings';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import showMessage from '../../../utils/showMessage';
import auth from '@react-native-firebase/auth';

function SignUp({navigation}) {
  const [signUpBtnDisable, setSignUpBtnDisable] = useState(true);

  function successSignUpHandler() {
    showMessage.success(strings.successSignUp);
    navigation.navigate('Login');
  }

  function handleSignUp(inputValues) {
    if (inputValues.password !== inputValues.repeatPassword) {
      showMessage.error(strings.passwordsNotSame);
      return;
    }

    auth()
      .createUserWithEmailAndPassword(inputValues.email, inputValues.password)
      .then(user => successSignUpHandler())
      .catch(err => showMessage.error(err));
  }

  const initialInputValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const validateForm = values => {
    for (var key in values) {
      if (!values[key]) {
        setSignUpBtnDisable(true);
        return;
      }
    }
    setSignUpBtnDisable(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>codetalks</Text>
      <Formik
        initialValues={initialInputValues}
        onSubmit={handleSignUp}
        validate={validateForm}>
        {({values, handleChange, handleSubmit}) => {
          return (
            <>
              <View style={styles.input_container}>
                <Input
                  placeholder={strings.email}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <Input
                  placeholder={strings.password}
                  isSecure
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                <Input
                  placeholder={strings.passwordAgain}
                  isSecure
                  value={values.repeatPassword}
                  onChangeText={handleChange('repeatPassword')}
                />
              </View>
              <View style={styles.button_container}>
                <Button
                  title={strings.signUp}
                  onPress={handleSubmit}
                  disabled={signUpBtnDisable}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}

export default SignUp;
