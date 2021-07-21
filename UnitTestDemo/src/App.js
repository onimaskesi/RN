import React, {useState} from 'react';
import {View, FlatList, TextInput, StyleSheet, Text} from 'react-native';
import Button from '../components/Button';

export default () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  function addHHandler() {
    if (input) {
      setList([...list, input]);
      setInput('');
    }
  }

  const renderInput = ({item}) => <Text>{item}</Text>;

  const keyExt = (_, i) => i.toString();

  return (
    <View sytle={styles.container}>
      <FlatList
        testID="list"
        data={list}
        renderItem={renderInput}
        keyExtractor={keyExt}
      />
      <TextInput
        testID="input-area"
        style={styles.input}
        value={input}
        onChangeText={setInput}
      />
      <Button title="Ekle" onClick={addHHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
});
