import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import styles from './JobCard.style';
import Button from '../Button';
import {useDispatch} from 'react-redux';

function JobCard({job, navigate, isFav}) {
  const goJobDetail = () => {
    navigate('JobDetails', job);
  };

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch({type: 'REMOVE_FAV', payload: {job}});
  };

  return (
    <TouchableWithoutFeedback onPress={goJobDetail}>
      <View style={styles.container}>
        <Text style={styles.name}>{job.name}</Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location}>{job.locations[0].name}</Text>
        </View>
        <Text style={styles.level}>{job.levels[0].name}</Text>
        {isFav && <Button title="Remove" onPress={removeHandler} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobCard;
