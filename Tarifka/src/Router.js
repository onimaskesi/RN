import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

function Router() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerTitleStyle: {color: 'orange'},
    headerTitleContainerStyle: {alignItems: 'center'},
    headerTintColor: 'orange',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
