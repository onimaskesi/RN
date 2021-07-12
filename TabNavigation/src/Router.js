import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Products from './pages/products/Products';
import ProductDetail from './pages/products/ProductDetail';
import Favorites from './pages/favorites/Favorites';
import FavoriteEdit from './pages/favorites/FavoriteEdit';

const Stack = createStackNavigator();

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritesScreen" component={Favorites} />
      <Stack.Screen name="FavoriteEditScreen" component={FavoriteEdit} />
    </Stack.Navigator>
  );
}

function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductsScreen" component={Products} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetail} />
    </Stack.Navigator>
  );
}

const TabNav = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabNav.Screen name="ProductsTab" component={ProductsStack} />
        <TabNav.Screen name="FavoritesTab" component={FavoritesStack} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

export default App;
