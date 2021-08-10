import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const getAllFavs = async () => {
  try {
    const favGifsValue = await AsyncStorage.getItem(Config.FAV_GIFS_KEY);
    const favGifs = JSON.parse(favGifsValue) || [];

    return favGifs;
  } catch (error) {
    console.log('Error', error);
  }
};

const setFav = async favGif => {
  try {
    const favGifs = await getAllFavs();
    await AsyncStorage.setItem(
      Config.FAV_GIFS_KEY,
      JSON.stringify([...favGifs, favGif]),
    );
  } catch (error) {
    console.log('Error', error);
  }
};

const deleteFav = async favGif => {
  try {
    const favGifs = await getAllFavs();
    const gifIndex = favGifs.indexOf(favGifs.find(fav => fav.id === favGif.id));
    favGifs.splice(gifIndex, 1);
    await AsyncStorage.setItem(
      Config.FAV_GIFS_KEY,
      JSON.stringify([...favGifs]),
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteAll = async () => {
  try {
    await AsyncStorage.setItem(Config.FAV_GIFS_KEY, JSON.stringify([]));
  } catch (error) {
    console.log(error);
  }
};

const isTheGifFav = async gif => {
  try {
    const favGifs = await getAllFavs();
    return !!favGifs.find(favGif => favGif.id === gif.id);
  } catch (error) {
    console.log(error);
  }
};

const service = {getAllFavs, setFav, deleteFav, deleteAll, isTheGifFav};

export default service;
