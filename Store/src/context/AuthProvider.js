import React, {useState, useEffect} from 'react';
import reducers from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function AuthProvider({children}) {
  const [user, setUser] = useState();
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(
    () =>
      AsyncStorage.getItem('@USER').then(userSession => {
        userSession && setUser(JSON.parse(userSession));
        setIsAuthLoading(false);
      }),
    [],
  );

  const store = createStore(reducers, {user, isAuthLoading});

  return <Provider store={store}>{children}</Provider>;
}

export default AuthProvider;
