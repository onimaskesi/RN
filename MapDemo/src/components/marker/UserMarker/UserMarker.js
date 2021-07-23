import React from 'react';
import {View, Image} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './UserMarker.style';

const UserMarker = ({onSelect, user}) => {
  const {
    avatar,
    address: {coordinates},
  } = user;
  const coordinate = {latitude: coordinates.lat, longitude: coordinates.lng};

  return (
    <Marker coordinate={coordinate} onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: avatar}} />
      </View>
    </Marker>
  );
};

export default UserMarker;
