import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Products from './pages/Products';
import Detail from './pages/Detail';

function Router() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsScreen"
          component={Products}
          options={{
            title: 'Store',
            headerStyle: {backgroundColor: '#26c6da'},
            headerTitleStyle: {color: 'white'},
            headerTitleContainerStyle: {alignItems: 'center'},
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: '#26c6da'},
            headerTitleStyle: {color: 'white'},
            headerTitleContainerStyle: {alignItems: 'center'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
