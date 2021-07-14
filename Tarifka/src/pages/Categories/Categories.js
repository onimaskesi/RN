import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categories.style';

import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

import Category from '../../components/Category';

const API_CATEGORY_URL =
  'https://www.themealdb.com/api/json/v1/1/categories.php';

function Categories({navigation, route}) {
  const {data, loading, error} = useFetch(API_CATEGORY_URL);

  if (loading) {
    return <Loading />;
  } else if (data.categories) {
    function categorySelectHandler(categoryName) {
      return () => navigation.navigate('Meals', {categoryName});
    }

    const renderCategories = ({item}) => (
      <Category
        category={item}
        onSelect={categorySelectHandler(item.strCategory)}
      />
    );
    const keyExtCategories = item => item.idCategory.toString();

    return (
      <View style={styles.container}>
        <FlatList
          data={data.categories}
          renderItem={renderCategories}
          keyExtractor={keyExtCategories}
        />
      </View>
    );
  } else {
    console.log('error: ' + error);
    console.log('data: ' + data);
    return <Error />;
  }
}

export default Categories;
