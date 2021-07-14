import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './Category.style';

function Category({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Category;
