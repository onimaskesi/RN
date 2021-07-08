import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import products from './product_data';
import ProductCard from './components/ProductCard';

function App() {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  const keyExtractorProduct = (item, index) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput placeholder="Ara..." style={styles.searchBox} />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns="2"
        data={products}
        renderItem={renderProduct}
        keyExtractor={keyExtractorProduct}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
  },
  title: {
    color: 'darkmagenta',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  searchBox: {
    backgroundColor: '#eceff1',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
});

export default App;
