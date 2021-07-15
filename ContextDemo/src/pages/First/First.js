import React, {useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import styles from './First.style';

import {useDispatch} from 'react-redux';

function First({navigation}) {
  const [userName, setUserName] = useState('');
  const [listItem, setListItem] = useState('');

  const dispatch = useDispatch();

  function saveUserNameHandler() {
    dispatch({type: 'SAVE_USERNAME', payload: {userName}});
    setUserName('');
  }
  function addToListHandler() {
    dispatch({type: 'ADD_TXT_TO_LIST', payload: {text: listItem}});
    setListItem('');
  }

  function clearListHandler() {
    dispatch({type: 'CLEAR_LIST'});
  }

  function goToSecond() {
    navigation.navigate('SecondScreen');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={userName}
        onChangeText={setUserName}
      />
      <Button title="KAYDET" onPress={saveUserNameHandler} />
      <TextInput
        style={styles.input}
        placeholder="Listeye eklenecek text"
        value={listItem}
        onChangeText={setListItem}
      />
      <Button title="EKLE" onPress={addToListHandler} />
      <View style={styles.btn}>
        <Button title="LİSTEYİ TEMİZLE" onPress={clearListHandler} />
      </View>
      <TouchableOpacity style={styles.goSecondBtn} onPress={goToSecond}>
        <Text style={styles.goSecondBtnText}>Go Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default First;
