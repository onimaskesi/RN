import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import First from './pages/First';
import Second from './pages/Second';

import UserProvider from './context/Provider';

function Router() {
  const Stack = createStackNavigator();
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FirstScreen"
            component={First}
            options={{title: 'Global State App (Context)'}}
          />
          <Stack.Screen name="SecondScreen" component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default Router;
