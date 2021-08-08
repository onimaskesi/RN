import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import strings from '../../strings';
import styles from './HomeStyle';
import HomeAnimation from '../../components/HomeAnimation';

export default ({navigation}) => {
  const navigateToTrending = () => {
    navigation.navigate(strings.gifsPageName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleConteiner}>
        <Text style={styles.title}>{strings.homeTitle}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <HomeAnimation />
      </View>
      <View style={styles.footerConteiner}>
        <Button onClick={navigateToTrending} title={strings.homeBtnTitle} />
      </View>
    </View>
  );
};
