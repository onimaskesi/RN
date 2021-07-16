import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const id = route.params.id;

  const {data, isLoading, error} = useFetch(`${Config.API_PRODUCTS_URL}/${id}`);

  if (isLoading) {
    return <Loading />;
  } else if (data) {
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
  } else {
    console.log('data: ' + data);
    console.log('error: ' + error);
    return <Error />;
  }
  
};

export default Detail;
