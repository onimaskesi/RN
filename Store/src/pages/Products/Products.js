import React from 'react';
import {View, FlatList, Button} from 'react-native';
import styles from './Products.style';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';

function Products({navigation}) {
  const {data, isLoading, error} = useFetch(Config.API_PRODUCTS_URL);

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
