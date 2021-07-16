import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import {useSelector} from 'react-redux';
import Loading from './components/Loading';

function Router() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerStyle: {backgroundColor: '#26c6da'},
    headerTitleStyle: {color: 'white'},
    headerTitleContainerStyle: {alignItems: 'center'},
    headerTintColor: 'white',
  };

  const user = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !user ? (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
              name="ProductsScreen"
              component={Products}
              options={{title: 'Products'}}
            />
            <Stack.Screen
              name="DetailScreen"
              component={Detail}
              options={{title: 'Detail'}}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

export default Router;
