import React, {useEffect, useState, useRef, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import GifCard from '../../components/GifCard';
import styles from './FavoritesStyle';
import FavGifService from '../../services/FavGifService';
import Loading from '../../components/Loading';
import strings from '../../strings';

export default ({navigation}) => {
  const [favGifList, setFavGifList] = useState([]);
  const {getAllFavs} = FavGifService;

  useEffect(() => {
    let isMounted = false;
    if (!isMounted) {
      getAllFavs().then(favGifs => {
        isMounted || setFavGifList(favGifs);
      });
    }
    return () => (isMounted = true);
  });

  const navigateToDetailsWithGif = arrangedGif => {
    return () => navigation.navigate(strings.detailsPageName, arrangedGif);
  };

  const renderFavGifs = ({item}) => (
    <GifCard
      gifUrl={item.smallSizeUrl}
      onClick={navigateToDetailsWithGif(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={favGifList} renderItem={renderFavGifs} numColumns={2} />
      {!favGifList.length && <Loading />}
    </View>
  );
};
