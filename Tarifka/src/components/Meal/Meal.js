import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './Meal.style';

function Meal({meal, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <ImageBackground
        imageStyle={styles.image_style}
        style={styles.image}
        source={{uri: meal.strMealThumb}}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{meal.strMeal}</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default Meal;
