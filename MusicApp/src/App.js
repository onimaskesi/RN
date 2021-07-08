import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import songs from './music_data.json';
import SongCard from './components/SongCard';
import SearchBox from './components/SearchBox';

function App() {
  const renderSongs = ({item}) => <SongCard song={item} />;
  const itemSeparator = () => <View style={styles.separator} />;
  const [songList, setSongList] = useState(songs);

  function searchHandler(text) {
    const filteredSongs = songs.filter(song =>
      (song.title + song.artist + song.year).includes(text),
    );

    setSongList(filteredSongs);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBox onSearch={searchHandler} />
      <FlatList
        data={songList}
        renderItem={renderSongs}
        ItemSeparatorComponent={itemSeparator}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
