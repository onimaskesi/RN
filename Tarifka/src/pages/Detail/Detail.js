import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';

function Detail({navigation, route}) {
  const mealId = route.params.mealId;
  const API_DETAIL_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const {data, loading, error} = useFetch(API_DETAIL_URL);

  if (loading) {
    return <Loading />;
  } else if (data.meals) {
    const meal = data.meals[0];
    const name = meal.strMeal;
    const area = meal.strArea;
    const instructions = meal.strInstructions;
    const imageUrl = meal.strMealThumb;
    const youtubeLink = meal.strYoutube;

    function goToYoutubeLink() {
      Linking.openURL(youtubeLink);
    }

    return (
      <ScrollView>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.title_container}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.area}>{area}</Text>
        </View>
        <View style={styles.instructions_container}>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={goToYoutubeLink}>
          <Text style={styles.button_text}>Watch on Youtube</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  } else {
    console.log('error: ' + error);
    console.log('data: ' + data);
    return <Error />;
  }
}

export default Detail;
