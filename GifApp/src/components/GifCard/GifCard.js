import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import styles from './GifCardStyle';

export default ({gifUrl, color = 'white', onClick}) => {
  const style = styles(color);

  return (
    <TouchableOpacity style={style.container} onPress={onClick}>
      <Image
        style={style.gif}
        source={{
          uri: gifUrl,
        }}
      />
    </TouchableOpacity>
  );
};
