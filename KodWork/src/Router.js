import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Favorites from './pages/Favorites';

function Router() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const screenOptions = {
    headerTitleStyle: {color: '#ef5451'},
    headerTitleContainerStyle: {alignItems: 'center'},
    headerTintColor: '#ef5451',
  };

  const JobsNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{activeTintColor: 'red'}}>
        <Drawer.Screen name="Jobs" component={JobsNavigator} />
        <Drawer.Screen name="Favorited Jobs" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Router;
