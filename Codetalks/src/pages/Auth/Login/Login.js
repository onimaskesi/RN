import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button';
import styles from './Login.style';
import strings from '../../../strings';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import auth from '@react-native-firebase/auth';
import showMessage from '../../../utils/showMessage';

function Login({navigation}) {
  const [signInBtnDisable, setSignInBtnDisable] = useState(true);

  function navigateSignUp() {
    navigation.navigate('SignUp');
  }

  function handleSignIn(inputValues) {
    auth()
      .signInWithEmailAndPassword(inputValues.email, inputValues.password)
      .then(user => showMessage.success(strings.successSignUp))
      .catch(err => showMessage.error(err));
  }

  const initialInputValues = {
    email: '',
    password: '',
  };

  const validateForm = values => {
    for (var key in values) {
      if (!values[key]) {
        setSignInBtnDisable(true);
        return;
      }
    }
    setSignInBtnDisable(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>codetalks</Text>
      <Formik
        initialValues={initialInputValues}
        onSubmit={handleSignIn}
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
              </View>
              <View style={styles.button_container}>
                <Button
                  title={strings.signIn}
                  onPress={handleSubmit}
                  disabled={signInBtnDisable}
                />
                <Button
                  title={strings.signUp}
                  onPress={navigateSignUp}
                  theme={'secondary'}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}

export default Login;
