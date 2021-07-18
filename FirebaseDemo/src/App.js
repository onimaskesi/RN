import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function App() {
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword('onimaskesi@gmail.com', 'FramboazlıPasta')
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword('onimaskesi@gmail.com', 'FramboazlıPasta')
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(success => console.log(success))
      .catch(err => console.log(err));
  };

  const checkOut = () => {
    const user = auth().currentUser;
    console.log(user);
  };

  const setDatasToDB = () => {
    database().ref().set({
      name: 'Erdem Onat',
      surname: 'KIRAL',
      nickname: 'onimaskesi',
    });

    const books = [
      {name: 'Rüzgarın Adı', writer: 'Patrick Rothfuss'},
      {name: 'Suç ve Ceza', writer: 'Dostoyevski'},
      {name: 'Kinyas ve Kayra', writer: 'Hakan Günday'},
    ];

    database().ref('/books').set(books);
  };

  const updateFirstBookNameInDB = async () => {
    const firstBookName = 'Rüzgarın Adı';
    const secondBookName = 'Bilge Adamın Korkusu';

    const nameOfTheBook = await database().ref('books/0/name').once('value');
    console.log(nameOfTheBook.val());

    let newName =
      nameOfTheBook.val() === firstBookName ? secondBookName : firstBookName;

    database().ref('/books/0').update({name: newName});
  };

  const pushNewBook = () => {
    database().ref('/books').push({
      name: 'Kavgam',
      writer: 'Adolf Hitler',
    });
  };

  const getAllDatasFromDatabase = () => {
    database()
      .ref()
      .once('value')
      .then(snapshot => {
        const allDatas = snapshot.val();
        console.log(allDatas);
      });
  };

  const getFromDatabase = reference => {
    database()
      .ref(reference)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        console.log(data);
      });
  };

  const checkRealTimeChangesInDB = () => {
    database()
      .ref()
      .on('value', snapshot => {
        const newDatas = snapshot.val();
        console.log(newDatas);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <Text style={{fontSize: 70}}>Hello Firebase</Text>
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Check The User" onPress={checkOut} />
      <Button title="Set Datas To DB" onPress={setDatasToDB} />
      <Button
        title="Get datas from database"
        onPress={getAllDatasFromDatabase}
      />
      <Button title="Get Books" onPress={() => getFromDatabase('/books')} />
      <Button title="Push New Book" onPress={pushNewBook} />
      <Button
        title="Check Real Time Changes"
        onPress={checkRealTimeChangesInDB}
      />
      <Button
        title="Update name of the first book"
        onPress={updateFirstBookNameInDB}
      />
    </SafeAreaView>
  );
}

export default App;

const user = {
  additionalUserInfo: {isNewUser: true},
  user: {
    displayName: null,
    email: 'onimaskesi@gmail.com',
    emailVerified: false,
    isAnonymous: false,
    metadata: [Object],
    phoneNumber: null,
    photoURL: null,
    providerData: [Array],
    providerId: 'firebase',
    tenantId: null,
    uid: 'a3W682yHF2QHINlzHa9eLRdNbLx1',
  },
};
