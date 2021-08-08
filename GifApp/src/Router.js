import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import strings from './strings';
import Home from './pages/Home';
import Gifs from './pages/Gifs';
import Favorites from './pages/Favorites';
import Details from './pages/Details';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={strings.homePageName} component={Home} />
        <Stack.Screen name={strings.gifsPageName} component={Gifs} />
        <Stack.Screen name={strings.favoritesPageName} component={Favorites} />
        <Stack.Screen name={strings.detailsPageName} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
