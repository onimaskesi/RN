import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './DetailsStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavGifService from '../../services/FavGifService';
import arrangeTheGif from '../../utils/arrangeTheGif';

export default ({navigation, route}) => {
  const [isFav, setIsFav] = useState(false);
  const {setFav, deleteFav, isTheGifFav} = FavGifService;

  const arangedGif = route.params;

  const getIsFavState = async () => {
    const isF = await isTheGifFav(arangedGif);
    setIsFav(isF);
  };

  useEffect(() => {
    getIsFavState();
  }, []);

  const addFav = async () => {
    await setFav(arangedGif);
  };

  const delFav = async () => {
    await deleteFav(arangedGif);
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
            uri: arangedGif.originalUrl,
          }}
        />
      </View>
      <View style={styles.favContainer}>
        <Icon
          style={styles.iconStyle}
          name={isFav ? 'heart' : 'heart-outline'}
          color="red"
          size={40}
          onPress={favHandler}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{arangedGif.title.toUpperCase()}</Text>
      </View>
    </View>
  );
};
