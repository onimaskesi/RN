import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import GifCard from '../../components/GifCard';
import styles from './FavoritesStyle';
import FavGifService from '../../services/FavGifService';
import Loading from '../../components/Loading';
import strings from '../../strings';

export default ({navigation}) => {
  const [favGifList, setFavGifList] = useState([]);
  const {getAllFavs, setFav, deleteFav, deleteAll, isTheGifFav} = FavGifService;

  const initFavGifList = async () => {
    const favList = await getAllFavs();
    setFavGifList(favList);
  };

  useEffect(() => {
    initFavGifList();
  });

  const navigateToDetails = () => {
    navigation.navigate(strings.detailsPageName);
  };

  const renderFavGifs = ({item}) => (
    <GifCard gifUrl={item.originalUrl} onClick={() => {}} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={favGifList} renderItem={renderFavGifs} numColumns={2} />
      {!favGifList.length && <Loading />}
    </View>
  );
};
