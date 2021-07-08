import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductCard.style';

function stockHandler(inStock) {
  const notInStockText = <Text style={styles.notInStock}>STOKTA YOK!</Text>;
  return inStock ? null : notInStockText;
}

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: product.imgURL}}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {stockHandler(product.inStock)}
      </View>
    </View>
  );
};

export default ProductCard;
