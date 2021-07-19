import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import database from '@react-native-firebase/database';
import RoomCard from '../../components/RoomCard';
import parseRooms from '../../utils/parseKeyValuesToArray';
import Button from '../../components/Button';
import strings from '../../strings';
import Modal from 'react-native-modal';
import Input from '../../components/Input';
import styles from './Rooms.style';

function Rooms({navigation}) {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const dbRef = database().ref('/rooms');

  const getRooms = () => {
    const dbListener = dbRef.on('value', snapshot => {
      const response = snapshot.val();
      if (response) {
        const parsedRooms = parseRooms(response);
        setRooms(parsedRooms);
      }
    });

    return dbListener;
  };

  const closeDBListener = dbListener => dbRef.off('value', dbListener);

  useEffect(() => {
    const dbListener = getRooms();
    return () => closeDBListener(dbListener);
  }, []);

  function openTheRoom(roomId) {
    navigation.navigate('Messages', roomId);
  }

  const renderRoom = ({item}) => <RoomCard room={item} onClick={openTheRoom} />;

  function handleModalToggle() {
    setShowModal(!showModal);
  }

  function addRoomHandle() {
    dbRef.push({
      name: text,
      messages: {},
    });
    handleModalToggle();
    setText('');
  }

  return (
    <View style={styles.container}>
      <FlatList numColumns={2} data={rooms} renderItem={renderRoom} />
      <Button title={strings.addRoom} onPress={handleModalToggle} />
      <Modal
        style={styles.modal}
        isVisible={showModal}
        onBackButtonPress={handleModalToggle}
        swipeDirection="down"
        onSwipeMove={handleModalToggle}
        onBackdropPress={handleModalToggle}>
        <View style={styles.modal_content_container}>
          <Input
            placeholder={strings.addRoomPlaceHolder}
            value={text}
            onChangeText={setText}
            multiline
          />
          <Button
            title={strings.send}
            disabled={text === ''}
            onPress={addRoomHandle}
          />
        </View>
      </Modal>
    </View>
  );
}

export default Rooms;
