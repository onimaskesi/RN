import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './GifsStyle';
import Config from 'react-native-config';
import axios from 'axios';
import GifCard from '../../components/GifCard';
import SearchBox from '../../components/SearchBox';
import strings from '../../strings';
import Loading from '../../components/Loading';
import getColor from '../../styles/getColor';
import Error from '../../components/Error';
import Button from '../../components/Button';
import arrangeTheGif from '../../utils/arrangeTheGif';

const apiKey = Config.API_KEY;
let offset = 0;
const maxOffset = 4999;
let searchText = '';
const gifsNumberPerPage = 20;

const keyExt = item => item.id;

const initNextOffsetValue = () => {
  offset + gifsNumberPerPage > maxOffset
    ? (offset = 0)
    : (offset += gifsNumberPerPage);
};

export default ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gifList, setGifList] = useState([]);
  const [error, setError] = useState();
  const [title, setTitle] = useState(strings.trendingGifsTitle);

  const fetchGifs = async (isLoadingMore = true) => {
    !isLoading && setIsLoading(true);

    let apiUrl = '';
    let params = {};

    const baseParams = {
      api_key: apiKey,
      limit: gifsNumberPerPage,
      offset: offset,
    };

    const trendingParams = {
      ...baseParams,
    };

    const searchParams = {
      ...baseParams,
      q: searchText,
    };

    if (searchText) {
      params = searchParams;
      apiUrl = Config.API_SEARCH_URL;
    } else {
      params = trendingParams;
      apiUrl = Config.API_TRENDING_URL;
    }

    try {
      const {data: res} = await axios.get(apiUrl, {params});

      setGifList(isLoadingMore ? [...gifList, ...res.data] : [...res.data]);
      setIsLoading(false);
      initNextOffsetValue();
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    offset = 0;
    if (route.params) {
      searchText = route.params;
      setTitle(route.params);
    }
    fetchGifs(false);
  }, [route.params]);

  const loadMore = () => {
    fetchGifs();
  };

  const flatListRef = useRef();

  const searchHandler = text => {
    searchText = text;
    offset = 0;
    fetchGifs(false);
    setTitle(
      searchText ? strings.searchingGifsTitle : strings.trendingGifsTitle,
    );

    flatListRef.current &&
      flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const navigateToDetail = gif => {
    return () =>
      navigation.navigate(strings.detailsPageName, arrangeTheGif(gif));
  };

  const renderGifs = ({item}) => {
    const {images} = item;
    return (
      <GifCard
        gifUrl={
          images.hasOwnProperty('fixed_height_small')
            ? images.fixed_height_small.url
            : images.original.url
        }
        color={getColor()}
        onClick={navigateToDetail(item)}
      />
    );
  };

  const navigateToFavorites = () => {
    navigation.navigate(strings.favoritesPageName);
  };

  return (
    <View style={styles.container}>
      {error ? (
        <Error errorMessage={error.message} />
      ) : (
        <>
          <SearchBox onSearch={searchHandler} />
          <Text style={styles.title}>{title}</Text>
          {gifList.length === 0 && !isLoading ? (
            <Error errorMessage={`${strings.notFoundGifAbout} ${searchText}`} />
          ) : (
            <FlatList
              ref={flatListRef}
              data={gifList}
              renderItem={renderGifs}
              onEndReached={loadMore}
              onEndReachedThreshold={0}
              numColumns="3"
              style={styles.gifList}
              keyExtractor={keyExt}
            />
          )}
          <Button title="My Favorites" onClick={() => navigateToFavorites()} />
          {isLoading && <Loading />}
        </>
      )}
    </View>
  );
};
