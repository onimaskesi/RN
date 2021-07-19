import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Messages from './pages/Messages';
import auth from '@react-native-firebase/auth';
import FlashMessage from 'react-native-flash-message';

const Stack = createStackNavigator();

const AuthContainer = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const MessagesContainer = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const user = auth().currentUser;

  return (
    <>
      <NavigationContainer>
        {user ? <MessagesContainer /> : <AuthContainer />}
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default Router;
