import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({news}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: news.imageUrl,
        }}
      />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.desc}>{news.description}</Text>
      <Text style={styles.author}>{news.author}</Text>
    </View>
  );
};

export default NewsCard;
