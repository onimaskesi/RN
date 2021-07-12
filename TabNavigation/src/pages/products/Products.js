import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Product from '../../components/Product';

function Products({navigation}) {
  const products = createProducts();

  const renderproducts = ({item}) => (
    <Product
      product={item}
      navigate={navigation.navigate}
      navTo={'ProductDetailScreen'}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderproducts} />
    </View>
  );
}

export default Products;

function createProducts() {
  let favs = [];
  for (let i = 0; i < 10; i++) {
    favs.push({id: i, name: `product ${i}`});
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
