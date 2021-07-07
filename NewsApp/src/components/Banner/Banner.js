import React from 'react';
import {ScrollView, Image} from 'react-native';
import styles from './Benner.style';

const Banner = ({banner}) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {banner.map(bannerNews => (
      <Image style={styles.image} source={{uri: bannerNews.imageUrl}} />
    ))}
  </ScrollView>
);

export default Banner;
