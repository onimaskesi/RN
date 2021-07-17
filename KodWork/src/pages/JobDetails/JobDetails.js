import React from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import styles from './JobDetails.style';
import {WebView} from 'react-native-webview';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';

function JobDetails({route}) {
  const job = route.params;

  const dispatch = useDispatch();
  const favoriteJobs = useSelector(s => s.favoriteJobs);

  const webViewStyle =
    '<style> body { font-size: 300%; word-wrap: break-word; overflow-wrap: break-word; }</style>';

  const submitHandler = () => {
    Alert.alert('KodWork', 'Submitted, good luck');
  };

  const favoriteHandler = () => {
    if (favoriteJobs.includes(job)) {
      Alert.alert('KodWork', 'This job already in Favorited Jobs');
    } else {
      dispatch({type: 'ADD_FAV', payload: {job}});
      Alert.alert('KodWork', 'Job added in Favorited Jobs');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_title}>{job.name}</Text>
        <View style={styles.header_content}>
          <Text style={styles.header_content_title}>Location: </Text>
          <Text style={styles.header_content_body}>
            {job.locations[0].name}
          </Text>
        </View>
        <View style={styles.header_content}>
          <Text style={styles.header_content_title}>Job Level: </Text>
          <Text style={styles.header_content_body}>{job.levels[0].name}</Text>
        </View>
        <Text style={styles.detail_title}>Job Detail</Text>
      </View>
      <WebView
        style={styles.body_container}
        source={{
          html: `<html>${webViewStyle}<body>${job.contents}</body></html>`,
        }}
      />
      <View style={styles.footer_container}>
        <Button title="Submit" iconName="login" onPress={submitHandler} />
        <Button
          title="Favorite Job"
          iconName="heart"
          onPress={favoriteHandler}
        />
      </View>
    </View>
  );
}

export default JobDetails;
