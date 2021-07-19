import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Messages.style';
import MessageCard from '../../components/MessageCard';
import Button from '../../components/Button';
import strings from '../../strings/strings';
import Modal from 'react-native-modal';
import Input from '../../components/Input';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseMessages from '../../utils/parseMessages';

function Messages({navigation}) {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  function getMessages() {
    database()
      .ref('/messages')
      .on('value', snapshot => {
        if (snapshot) {
          const parsedMessages = parseMessages(snapshot.val());
          setMessages(parsedMessages);
        }
      });
  }

  useEffect(() => {
    getMessages();
  }, []);

  const renderMessage = ({item}) => {
    return <MessageCard message={item} />;
  };

  function handleModalToggle() {
    setShowModal(!showModal);
  }

  function sendHandler() {
    const username = auth().currentUser.email.split('@')[0];
    database().ref('/messages').push({
      username: username,
      text: text,
      date: new Date().toISOString(),
    });
    setText('');
    handleModalToggle();
  }

  const keyExt = (_, index) => index.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={keyExt}
      />
      <View style={styles.btn_container}>
        <Button
          title={strings.addBtnText}
          onPress={handleModalToggle}
          theme="secondary"
        />
      </View>
      <Modal
        style={styles.modal}
        isVisible={showModal}
        onBackButtonPress={handleModalToggle}
        swipeDirection="down"
        onSwipeMove={handleModalToggle}
        onBackdropPress={handleModalToggle}>
        <View style={styles.modal_content_container}>
          <Input
            placeholder={strings.addTxtPlaceholder}
            value={text}
            onChangeText={setText}
            multiline
          />
          <Button
            title={strings.send}
            disabled={text === ''}
            onPress={sendHandler}
          />
        </View>
      </Modal>
    </View>
  );
}

export default Messages;
