import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './Meals.style';

import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import Meal from '../../components/Meal';

function Meals({navigation, route}) {
  const categoryName = route.params.categoryName;
  const API_MEALS_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const {data, loading, error} = useFetch(API_MEALS_URL);

  if (loading) {
    return <Loading />;
  } else if (data.meals) {
    const mealSelectHandler = mealId => {
      return () => navigation.navigate('Detail', {mealId});
    };
    const renderMeals = ({item}) => (
      <Meal meal={item} onSelect={mealSelectHandler(item.idMeal)} />
    );
    const ketExtMeals = item => item.idMeal.toString();
    return (
      <View style={styles.container}>
        <FlatList
          data={data.meals}
          renderItem={renderMeals}
          keyExtractor={ketExtMeals}
        />
      </View>
    );
  } else {
    console.log('error: ' + error);
    console.log('data: ' + data);
    return <Error />;
  }
}

export default Meals;
