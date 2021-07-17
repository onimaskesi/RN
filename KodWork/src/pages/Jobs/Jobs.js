import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import styles from './Jobs.style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import JobCard from '../../components/JobCard';

function Jobs({navigation}) {
  const {data, isLoading, error, fetchData} = useFetch();

  const params = {
    page: 1,
    descending: true,
  };

  useEffect(() => {
    fetchData(Config.API_URL, params);
    console.log('Mount');
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="lightsalmon" />
      </View>
    );
  } else if (data) {
    console.log(data);
    const jobList = data.results;

    const jobRender = ({item}) => {
      return <JobCard job={item} navigate={navigation.navigate} />;
    };

    return (
      <View style={styles.container}>
        <FlatList data={jobList} renderItem={jobRender} />
      </View>
    );
  } else {
    console.log('error: ' + error);
    return <Text>Error!</Text>;
  }
}

export default Jobs;
