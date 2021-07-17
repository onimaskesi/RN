import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './Favorites.style';
import {useSelector, useDispatch} from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';

function Favorites({navigation}) {
  const favoriteJobs = useSelector(s => s.favoriteJobs);

  const favoriteRender = ({item}) => {
    return <JobCard job={item} navigate={navigation.navigate} isFav />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={favoriteJobs} renderItem={favoriteRender} />
    </View>
  );
}

export default Favorites;
