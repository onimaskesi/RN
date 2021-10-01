import React, {useEffect, useState, useRef} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './DetailsStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavGifService from '../../services/FavGifService';
import arrangeTheGif from '../../utils/arrangeTheGif';
import strings from '../../strings';
import Config from 'react-native-config';
import axios from 'axios';
import GifCard from '../../components/GifCard';
import Error from '../../components/Error';

const apiKey = Config.API_KEY;
let offset = 0;
const maxOffset = 4999;
const gifsNumberPerPage = 20;

const initNextOffsetValue = () => {
  offset + gifsNumberPerPage > maxOffset
    ? (offset = 0)
    : (offset += gifsNumberPerPage);
};

export default ({navigation, route}) => {
  const [isFav, setIsFav] = useState(false);
  const {setFav, deleteFav, isTheGifFav} = FavGifService;

  const flatlistRef = useRef();

  const arangedGif = route.params;

  const getIsFavState = async () => {
    const isF = await isTheGifFav(arangedGif);
    setIsFav(isF);
  };

  useEffect(() => {
    getIsFavState();
    fetchGifs();
    flatlistRef.current &&
      flatlistRef.current.scrollToOffset({animated: true, offset: 0});
  }, [route.params]);

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

  const navigateToGifs = () => {
    navigation.navigate(strings.gifsPageName, `@${arangedGif.username}`);
  };

  const [gifList, setGifList] = useState();
  const [error, setError] = useState();

  const fetchGifs = async isLoadingMore => {
    let apiUrl = '';
    let params = {};

    const searchParams = {
      api_key: apiKey,
      limit: gifsNumberPerPage,
      offset: offset,
      q: arangedGif.title,
    };

    params = searchParams;
    apiUrl = Config.API_SEARCH_URL;

    try {
      const {data: res} = await axios.get(apiUrl, {params});

      setGifList(isLoadingMore ? [...gifList, ...res.data] : [...res.data]);
      initNextOffsetValue();
    } catch (err) {
      setError(err);
    }
  };

  const renderGif = ({item, index}) => (
    <GifCard
      key={item.id + index}
      gifUrl={item.images.fixed_height_small.url}
      color="purple"
      onClick={() =>
        navigation.navigate(strings.detailsPageName, arrangeTheGif(item))
      }
    />
  );

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
        <View style={styles.usernameContainer}>
          <TouchableOpacity onPress={navigateToGifs}>
            <Text style={styles.username}>{`by ${arangedGif.username}`}</Text>
          </TouchableOpacity>
        </View>
        <Icon
          name={isFav ? 'heart' : 'heart-outline'}
          color="red"
          size={40}
          onPress={favHandler}
        />
      </View>
      <View style={styles.gifsContainer}>
        {error ? (
          <Error errorMessage={error.message} />
        ) : (
          <FlatList
            ref={flatlistRef}
            data={gifList}
            onEndReached={() => fetchGifs(true)}
            onEndReachedThreshold={0}
            renderItem={renderGif}
          />
        )}
      </View>
    </View>
  );
};
