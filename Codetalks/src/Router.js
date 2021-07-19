import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Rooms from './pages/Rooms';
import Messages from './pages/Messages';
import strings from './strings';
import colors from './styles/colors';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.orange,
        headerTitleStyle: {color: colors.orange},
      }}>
      <Stack.Screen
        name="Rooms"
        component={Rooms}
        options={{title: strings.rooms}}
      />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
}

function Router() {
  const [userSession, setUserSession] = useState(false);

  const checkUser = () => {
    auth().onAuthStateChanged(user => setUserSession(!!user));
  };

  useEffect(() => checkUser(), []);

  return (
    <NavigationContainer>
      {userSession ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Router;
