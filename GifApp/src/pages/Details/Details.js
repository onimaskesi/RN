import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import styles from './DetailsStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavGifService from '../../services/FavGifService';

const getSmallSizeUrl = gif => {
  const {images} = gif;

  if (images.hasOwnProperty('fixed_height_small')) {
    return images.fixed_height_small.url;
  } else {
    return images.original.url;
  }
};

const transformGifToFavGifObj = gif => {
  return {
    id: gif.id,
    smallSizeUrl: getSmallSizeUrl(gif),
    originalUrl: gif.images.original.url,
  };
};

export default ({navigation, route}) => {
  const [isFav, setIsFav] = useState(false);
  const {setFav, deleteFav, isTheGifFav} = FavGifService;

  const gif = route.params;
  const {
    images: {
      original: {url},
    },
  } = gif;

  const favGif = transformGifToFavGifObj(gif);

  const getIsFavState = async () => {
    const isF = await isTheGifFav(favGif);
    console.log(isF);
    setIsFav(isF);
  };

  useEffect(() => {
    getIsFavState();
    console.log(gif.id);
  }, []);

  const addFav = async () => {
    await setFav(favGif);
  };

  const delFav = async () => {
    await deleteFav(favGif);
  };

  const favHandler = async () => {
    isFav ? await delFav() : await addFav();
    setIsFav(!isFav);
  };

  return (
    <View style={styles.container}>
      <View style={styles.gifContainer}>
        <Image
          style={styles.gif}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={styles.footerContainer}>
        <Icon
          name={isFav ? 'heart' : 'heart-outline'}
          color="red"
          size={40}
          onPress={favHandler}
        />
      </View>
    </View>
  );
};
