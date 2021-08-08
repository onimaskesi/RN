import React from 'react';
import {Image, View} from 'react-native';
import styles from './GifCardStyle';

export default ({gifUrl, color = 'white'}) => {
  const style = styles(color);

  return (
    <View style={style.container}>
      <Image
        style={style.gif}
        source={{
          uri: gifUrl,
        }}
      />
    </View>
  );
};
