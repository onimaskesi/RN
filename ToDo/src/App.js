import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DoCard from './components/DoCard';

let doId = 0;

function App() {
  const [doNumber, setDoNumber] = useState(0);
  const [doListState, setDoListState] = useState([]);

  const renderDoItem = ({item}) => (
    <DoCard doItem={item} stateNumber={doNumber} setStateNumber={setDoNumber} />
  );

  function doSaveClick() {
    if (doSaveInput) {
      let doList = [...doListState];
      doList.push(getNewDoItem(doSaveInput));
      setDoListState(doList);
      setDoNumber(doNumber + 1);
      setDoSaveInput('');
    }
  }

  const [doSaveInput, setDoSaveInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{doNumber}</Text>
      </View>
      <FlatList
        style={styles.toDoList}
        data={doListState}
        renderItem={renderDoItem}
      />
      <View style={styles.saveContainer}>
        <TextInput
          style={styles.saveInput}
          onChangeText={value => setDoSaveInput(value)}
          value={doSaveInput}
          placeholder="Yapılacak..."
          placeholderTextColor="#7a7c7c"
        />
        <TouchableOpacity
          onPress={doSaveClick}
          style={doSaveInput ? styles.saveBtnActive : styles.saveBtn}>
          <Text style={styles.saveBtnText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;

function getNewDoItem(doText) {
  return {id: doId++, text: doText, isDone: false};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'orange',
    fontSize: 30,
    padding: 15,
    fontFamily: 'sans-serif-medium',
  },
  toDoList: {
    flex: 1,
  },
  saveContainer: {
    backgroundColor: '#37474f',
    margin: 10,
    borderRadius: 10,
  },
  saveInput: {
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 3,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#728995',
  },
  saveBtn: {
    backgroundColor: '#808080',
    margin: 15,
    marginTop: 5,
    alignItems: 'center',
    padding: 7,
    borderRadius: 10,
  },
  saveBtnActive: {
    backgroundColor: '#ffa500',
    margin: 15,
    marginTop: 5,
    alignItems: 'center',
    padding: 7,
    borderRadius: 10,
  },
  saveBtnText: {
    color: 'white',
  },
});
