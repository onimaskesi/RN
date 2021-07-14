import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const API_URL = 'https://fakestoreapi.com/products';

const Detail = ({route}) => {
  const id = route.params.id;

  const {data, isLoading, error} = useFetch(`${API_URL}/${id}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: data.image}} />
      </View>
      <ScrollView
        style={styles.info_container}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </ScrollView>
      <View style={styles.price_container}>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
