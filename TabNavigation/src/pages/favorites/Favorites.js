import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Product from '../../components/Product';

function Favorites({navigation}) {
  const favorites = createFavs();

  const renderFavs = ({item}) => (
    <Product
      product={item}
      navigate={navigation.navigate}
      navTo={'FavoriteEditScreen'}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={favorites} renderItem={renderFavs} />
    </View>
  );
}

export default Favorites;

function createFavs() {
  let favs = [];
  for (let i = 0; i < 10; i++) {
    favs.push({id: i, name: `favorite ${i}`});
  }
  return favs;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
