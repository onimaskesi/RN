import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Messages from './pages/Messages';
import auth from '@react-native-firebase/auth';
import FlashMessage from 'react-native-flash-message';
import colors from './styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{
          title: 'Dertler',
          headerStyle: {backgroundColor: colors.ultraDarkGreen},
          headerTitleStyle: {color: colors.lightGreen},
          headerRight: () => (
            <Icon
              name="logout"
              size={30}
              color={colors.lightGreen}
              onPress={() => auth().signOut()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [userSession, setUserSession] = useState(false);

  function checkUser() {
    auth().onAuthStateChanged(user => setUserSession(user));
  }

  useEffect(() => checkUser(), []);

  return (
    <>
      <NavigationContainer>
        {userSession ? <MessagesContainer /> : <AuthContainer />}
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default Router;
