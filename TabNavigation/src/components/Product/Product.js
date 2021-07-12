import React from 'react';
import {View, Text} from 'react-native';
import Button from './Button';
import styles from './Product.style';

const Product = ({product, navigate, navTo}) => {
  function onNavigate() {
    navigate(navTo, product);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.name}</Text>
      <Button title="Detail/Edit" onPress={onNavigate} />
    </View>
  );
};

export default Product;
