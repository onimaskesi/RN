import React from 'react';
import {View, Image, Alert, AsyncStorageStatic} from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import {Formik} from 'formik';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

function Login({navigation}) {
  const {data, isLoading, error, post} = usePost();

  const dispatch = useDispatch();

  function loginHandler(values) {
    values.username = values.username.toLowerCase();
    post(Config.API_LOGIN_URL, values);
  }

  if (error) {
    Alert.alert('Store', 'Error!');
  }

  if (data) {
    if (data.status == 'Error') {
      Alert.alert('Store', data.msg);
    }
    if (data.token) {
      dispatch({type: 'SET_USER', payload: {user}});
      //navigation.navigate('ProductsScreen');
    }
  }

  const loginForm = ({handleSubmit, handleChange, values}) => (
    <View style={styles.form_style}>
      <Input
        placeholder="User Name"
        value={values.username}
        onChangeText={handleChange('username')}
        iconName="account"
      />
      <Input
        placeholder="Password"
        value={values.password}
        onChangeText={handleChange('password')}
        iconName="key"
        isSecure
      />
      <Button title="LOGIN" onPress={handleSubmit} isLoading={isLoading} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={loginHandler}>
        {loginForm}
      </Formik>
    </View>
  );
}

export default Login;

const user = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
};
