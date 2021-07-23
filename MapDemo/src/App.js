import React, {useRef, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';
import Config from 'react-native-config';
import useFetch from './hooks/useFetch';
import Loading from './components/Loading';
import UserMarker from './components/marker/UserMarker';
import InfoCard from './components/InfoCard';

export default function () {
  const {data, loading, error} = useFetch(Config.API_URL);
  const [selectedUser, setSelectedUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const mapRef = useRef();

  function getMarkers() {
    const users = [...data];

    return users.map(user => (
      <UserMarker
        key={user.id}
        user={user}
        onSelect={() => handleMarkerSelect(user)}
      />
    ));
  }

  function handleMarkerSelect(user) {
    const {
      address: {coordinates},
    } = user;

    mapRef.current.animateToRegion({
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      latitudeDelta: 7,
      longitudeDelta: 7,
    });
    setSelectedUser(user);
    modalToggle();
  }

  function modalToggle() {
    setShowModal(!showModal);
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView ref={mapRef} style={styles.map}>
        {data && getMarkers()}
      </MapView>
      {loading && <Loading />}
      {error && <Text style={styles.error}>ERROR!!</Text>}
      <InfoCard visible={showModal} close={modalToggle} user={selectedUser}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  error: {
    fontSize: 20,
    color: 'red',
    position: 'absolute',
    bottom: Dimensions.get('window').height / 2 - 10,
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
});
