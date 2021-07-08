import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './SongCard.style';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.info_container}>
          <View style={styles.info_inner_container}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && <SoldOut />}
        </View>
      </View>
    </View>
  );
};

export default SongCard;

function SoldOut() {
  return (
    <View>
      <Text style={styles.soldOut_title}>TÜKENDİ</Text>
    </View>
  );
}
