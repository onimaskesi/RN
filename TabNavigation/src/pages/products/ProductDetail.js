import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProductDetail({route}) {
  const productText = 'Product Detail \n' + route.params.name;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{productText}</Text>
    </View>
  );
}

export default ProductDetail;

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
