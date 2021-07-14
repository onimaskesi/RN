import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Products.style';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const API_URL = 'https://fakestoreapi.com/products';

function Products({navigation}) {
  const {data, isLoading, error} = useFetch(API_URL);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function handleSelection(id) {
    return () => navigation.navigate('DetailScreen', {id});
  }

  const renderProducts = ({item}) => (
    <ProductCard product={item} onSelect={handleSelection(item.id)} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderProducts} />
    </View>
  );
}

export default Products;
